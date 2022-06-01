import {
    sanityClient,
    urlFor,
    usePreviewSubscription,
    PortableText,
} from "../../lib/sanity";
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
}`

export default function OneFish({ data }) {
    const { fish } = data;
    const router = useRouter()


    if (router.isFallback) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="rounded-lg shadow-lg mx-4 mt-2 bg-[#edf6f9]">
            <div className="">
                <img className="p-2 rounded-lg bg-[#4BB6EF] shadow w-[600px]" src={urlFor(fish.mainImage).url()} alt="" />
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
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const fish = await sanityClient.fetch(fishQuery, { slug });
    return { props: { data: { fish }, preview: true } };
}