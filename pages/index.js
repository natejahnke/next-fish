import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from 'react';

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
  category,
}`;

// const speciesQuery = `*[category == "pan]{
//   _id,
//   name,
//   slug,
//   scientificName,
//   description,
//   habitat,
//   bait,
//   mainImage,
//   status,
//   length,
//   weight,
//   category,
// }`;

export default function Home({ fish }) {

    const [species, setSpecies] = useState([""]);

    useEffect(() => {}, [species]);
  
    // console.log(`${species[0]} ${species[1]}`)
    console.log(species);
    console.log(fish);
    // console.log(speciesSelect);

    // const speciesList = fish.filter(f => {
    //   return f.scientificName === "Lepomis";
    // });

    // console.log(fish[0].scientificName);
    // console.log(speciesList)

    const setSpeic = fish.filter(speci => speci.category == species);
    console.log(setSpeic);
 

  return (
    <div>
      <div className="grid lg:grid-cols-2">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full">
          <div className="xl:max-w-xl">
            <div className="flex"><img className="h-10 self-center" src="/hook.svg" alt="Workcation" />
            <h1 className="text-2xl font-headline tracking-tight font-semibold text-gray-900  sm:text-4xl lg:text-3xl xl:text-4xl">Fish of Minnesota</h1></div>
            <img
              className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-88 sm:w-full sm:object-cover object-center lg:hidden"
              src="/natejahnke.jpg"
              alt="Woman workcationing on the beach"
            />
            <h1 className="mt-6 text-2xl font-headline tracking-tight font-semibold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              A Guide to Game Fishes
              <br className="hidden lg:inline" /> <span className="text-brand"></span>
            </h1>
            
            <ul role="list" class="ml-2 mt-2 sm:mt-8 sm:text-xl marker:text-gray-900 list-disc pl-5 space-y-3 text-gray-900">
            <li>Size & Habitat</li>
            <li>Distinguishing Features</li>
            <li>Easy Identification</li>
            </ul>
            <div className="mt-4 space-x-1 sm:mt-6">
              <a
                className="inline-block px-5 py-3 rounded-lg transform transition bg-brand hover:bg-brand-light hover:-translate-y-0.5 focus:ring-brand focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-brand-dark uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
                href="#"
              >
                I'm Feeling Fishy
              </a>
              <Link href={`/record/record`}>
              <a
                className="inline-block px-5 py-3 rounded-lg transform transition bg-brand hover:bg-brand-light hover:-translate-y-0.5 focus:ring-brand focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-brand-dark uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
                href="#"
              >
                Record Fish
              </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden max-w-xl lg:block">
          <div className="">
          <img
            className="m-3 object-cover rounded-lg shadow-lg"
            src="/natejahnke.jpg"
            alt="Woman workcationing on the beach"
          />
          </div>
        </div>
      </div>
    <div className="bg-gray-200">
          <div className="justify-center">
          <a
                className="m-6 inline-block p-3 rounded-lg transform transition bg-brand hover:bg-brand-light hover:-translate-y-0.5 focus:ring-brand focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-brand-dark uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
                onClick={() => setSpecies("")}
                href="#"
                scroll={false}
              >
                All
              </a>
              <Link href={"#"} scroll={false}>
              <a
                className="m-6 inline-block px-5 py-3 rounded-lg transform transition bg-brand hover:bg-brand-light hover:-translate-y-0.5 focus:ring-brand focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-brand-dark uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
                onClick={() => setSpecies("pan")}
                href="#"
                scroll={false}
              >
                Panfish
              </a>
              </Link>
              <Link href={"#"} scroll={false}>
              <a
                className="m-6 inline-block px-5 py-3 rounded-lg transform transition bg-brand hover:bg-brand-light hover:-translate-y-0.5 focus:ring-brand focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-brand-dark uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
                onClick={() => setSpecies("bass")}
                href="#"
                scroll={false}
              >
                Bass & Walleye
              </a>
              </Link>
              <Link href={"#"} scroll={false}>
              <a
                className="m-6 inline-block px-5 py-3 rounded-lg transform transition bg-brand hover:bg-brand-light hover:-translate-y-0.5 focus:ring-brand focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-brand-dark uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
                onClick={() => setSpecies("pike")}
                href="#"
                scroll={false}
              >
                Pike & Musky
              </a>
              </Link>
              <Link href={"#"} scroll={false}>
              <a
                className="m-6 inline-block px-5 py-3 rounded-lg transform transition bg-brand hover:bg-brand-light hover:-translate-y-0.5 focus:ring-brand focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-brand-dark uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
                onClick={() => setSpecies("cat")}
                href="#"
                scroll={false}
              >
                Catfish
              </a>
              </Link>
              </div>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
        {fish.filter(fishes => fishes.name && fishes.category == species).map(fish => (
          <Link href={`/fish/${fish.slug.current}`}>
                   <a>
          <li key={fish._id} className="rounded-lg shadow-lg hover:shadow-[#4BB6EF] mx-4 mt-2">
            <div className="h-48 bg-[#4BB6EF] relative rounded-lg shadow-lg">         
                  <Image src={urlFor(fish.mainImage).url()} layout="fill" objectFit="contain" className="p-2 rounded-lg shadow relative  hover:scale-110 duration-500 transform transition" />             
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
          </a>
          </Link>
        ))}
      </ul>
    </div>
    </div>
  );
}

export async function getStaticProps() {
  const fish = await sanityClient.fetch(fishQuery);
  // const speciesSelect = await sanityClient.fetch(speciesQuery)
  return { props: { fish} };
}