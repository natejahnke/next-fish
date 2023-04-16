import { sanityClient } from "../../lib/sanity";
import { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { useRouter } from "next/router";

const fishQuery = `*[_type == "fish" && slug.current == $slug][0]{
  _id,
  name,
  scientificName,
  slug,
  mainImage,
  length,
  weight,
  description,
  "record": record->
}`;

export default function OneFish({ data }) {
  const router = useRouter();
  const { fish } = data ?? {};
  const image = fish.mainImage;

  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: "42ynkluk",
      dataset: "production",
    });

    setImageUrl(imgBuilder.image(image));
  }, [image]);

  if (!fish || router.isFallback) {
    return <div>Loading...</div>;
  }

  const record = fish.record;

  return (
    <div className="bg-[#274059] p-4 sm:p-8 rounded-lg shadow-lg">
      <div className="flex flex-col sm:flex-row items-center">
        {imageUrl && (
          <img
            className="bg-[#4BB6EF] rounded-lg shadow w-full sm:w-1/3 h-auto object-cover mb-4 sm:mb-0 sm:mr-6"
            src={imageUrl}
            alt={fish.name}
          />
        )}
        <div className="text-white space-y-4">
          <h3 className="text-2xl font-semibold">{fish.name}</h3>
          <p className="text-lg italic text-[#63809c]">{fish.scientificName}</p>
          <div className="flex items-center text-[#b6cce2] space-x-2">
            <img className="w-8" src="/tapewhite.svg" />
            <p>Up to {fish.length} in.</p>
          </div>
          <div className="flex items-center text-[#b6cce2] space-x-2">
            <img className="w-8" src="/weightwhite.svg" />
            <p>Up to {fish.weight} lbs.</p>
          </div>
          <p className="text-white">{fish.description}</p>

          {record && (
            <div className="space-y-2">
              <h3 className="font-semibold">MN State Record</h3>
              <p>
                {record.pounds && (
                  <>
                    <span className="italic text-sm text-[#63809c]">
                      Weight:
                    </span>{" "}
                    {record.pounds} lbs {record.ounces} oz
                  </>
                )}
                {record.length && (
                  <>
                    <span className="ml-4 italic text-sm text-[#63809c]">
                      Length:
                    </span>{" "}
                    {record.length} in.
                  </>
                )}
                {record.girth && (
                  <>
                    <span className="ml-4 italic text-sm text-[#63809c]">
                      Girth:
                    </span>{" "}
                    {record.girth} in.
                  </>
                )}
                {record.place && (
                  <>
                    <span className="ml-4 italic text-sm text-[#63809c]">
                      Place:
                    </span>{" "}
                    {record.place}
                  </>
                )}
                <br />
                {record.county && (
                  <>
                    <span className="italic text-sm text-[#63809c]">
                      County:
                    </span>{" "}
                    {record.county}
                  </>
                )}
                {record.date && (
                  <>
                    <span className="ml-4 italic text-sm text-[#63809c]">
                      Caught:
                    </span>{" "}
                    {new Date(record.date).toLocaleDateString()}
                  </>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  let paths = [];

  try {
    paths = await sanityClient.fetch(
      `*[_type == "fish" && defined(slug.current)]{
          "params": {
            "slug": slug.current
          }
        }`
    );
  } catch (error) {
    console.error("Error fetching paths in getStaticPaths:", error);
  }

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  let fish;

  try {
    fish = await sanityClient.fetch(fishQuery, { slug });
  } catch (error) {
    console.error("Error fetching fish data in getStaticProps:", error);
    return {
      notFound: true,
    };
  }

  return { props: { data: { fish }, preview: true }, revalidate: 60 };
}

// Path: ./pages/fish/[slug].js
