import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// import {usePreviewSubscription, } from '../lib/sanity'
// import {PortableText} from '@portabletext/react'
// import {groq} from 'next-sanity'
// import {getClient} from '../lib/sanity.server'
import { sanityClient, urlFor } from "../lib/sanity";

const fishQuery = `*[_type == "fish"]{
  _id,
  name,
  slug,
  scientificName,
  description,
  habitat,
  bait,
  mainImage,
  status,
  length,
  weight,
}`;

export default function Home({ fish }) {
  return (
    <div>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
        {fish?.length > 0 && fish.map((fish) => (
          <li key={fish._id} className="rounded-lg shadow-lg mx-4 mt-2 bg-[#4bb6ef62]">
            <div className="h-48 bg-[#4BB6EF] relative rounded-lg shadow-lg">
              <Link href={`/fish/${fish.slug.current}`}>
                <a>
                  <Image src={urlFor(fish.mainImage).url()} layout="fill" objectFit="contain" className="p-2 rounded-lg shadow relative" />
                </a>
              </Link>
            </div>
            <div className="p-4 h-48">
              <h3 className="text-xl font-semibold text-gray-800">{fish.name}</h3>
              <p className="text-gray-500 italic text-sm pb-2">{fish.scientificName}</p>
              <div className="flex">
                <img className="pb-2" src="/ruler.png" />
                <p className="self-center pl-2">to {fish.length} in.</p>
              </div>
              <div className="flex">
                <img className="pb-2" src="/scale.png" />
                <p className="self-center pl-2">to {fish.weight} lbs.</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const fish = await sanityClient.fetch(fishQuery);
  return { props: { fish } };
}