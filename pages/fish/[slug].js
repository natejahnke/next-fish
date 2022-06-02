import {
    sanityClient,
    urlFor,
    usePreviewSubscription,
    PortableText,
} from "../../lib/sanity";
import { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";

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
}`

export default function OneFish({ data }) {
    
    // const router = useRouter()
    if (!data) return <div>Loading...</div>;
    const { fish } = data;
    const image = fish.mainImage;
    // console.log(image);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const { data: fish } = usePreviewSubscription(fishQuery, {
    //   params: { slug: data.fish?.slug.current },
    //   initialData: data,
    //   enabled: preview,
    // });

    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const imgBuilder = imageUrlBuilder({
            projectId: "42ynkluk",
            dataset: "production",
        });

        setImageUrl(imgBuilder.image(image));
    }, [image]);

    // if (!fish) return <div>Loading...</div>;
    return (
        <div className="rounded-lg shadow-lg mx-4 mt-2 bg-[#edf6f9]">
            <div className="">
                {imageUrl && <img className="p-2 rounded-lg bg-[#4BB6EF] shadow w-[600px]" src={imageUrl} alt="" />}
            </div>
            <div className="px-4 mt-2">
                <h3 className="text-lg font-semibold text-gray-800">{fish.name}</h3>
                <p className="text-gray-500 italic text-sm pb-2">{fish.scientificName}</p>
                <div className="flex">
                    <img className="pb-2" src="/ruler.png" />
                    <p className="self-center pl-2">to {fish.length} in.</p>
                </div>
                <div className="flex">
                    <img className="pb-2" src="/scale.png" />
                    <p className="self-center pl-2">to {fish.weight} lbs.</p>
                </div>
                <p>{fish.description}</p>
                <p>{fish.record?.name}</p>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const paths = await sanityClient.fetch(
        `*[_type == "fish" && defined(slug.current)]{
        "params": {
          "slug": slug.current
        }
      }`
    );

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const fish = await sanityClient.fetch(fishQuery, { slug });
    return { props: { data: { fish }, preview: true } };
}