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
    // <div classNameName = "flex space-x-2 justify-center" >
    // <button type = "button" classNameName = "inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">{fish[0].name}</button>
    // <div className="rounded-lg shadow-lg mx-4 mt-2 bg-[#edf6f9]">
    //         <div className="">
    //             <img className="p-2 rounded-lg bg-[#4BB6EF] shadow" src="/smallmouthbass2.png" alt="" />
    //         </div>
    //         <div className="px-4 mt-2">
    //             <h3 className="text-lg font-semibold text-gray-800">Smallmouth Bass</h3>
    //             <p className="text-gray-500 italic text-sm pb-2">Micropterus dolomieu</p>
    //             <div className="flex">
    //                 <img className="pb-2" src="/ruler.png" />
    //                 <p className="self-center pl-2">to 24 in.</p>
    //             </div>
    //             <div className="flex">
    //                 <img className="pb-2" src="/scale.png" />
    //                 <p className="self-center pl-2">to 12 lbs.</p>
    //             </div>
    //         </div>
    //     </div> 

    <div>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
        {fish?.length > 0 && fish.map((fish) => (
          <li key={fish._id} className="rounded-lg shadow-lg mx-4 mt-2">
            <div className="h-48 bg-[#4BB6EF] relative rounded-lg shadow-lg">
              <Link href={`/fish/${fish.slug.current}`}>
                <a>
                  <Image src={urlFor(fish.mainImage).url()} layout="fill" objectFit="contain" className="p-2 rounded-lg shadow relative" />
                </a>
              </Link>
            </div>
            <div className="p-4 h-48 bg-[#edf6f9] rounded">
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