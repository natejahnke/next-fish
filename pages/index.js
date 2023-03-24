import Link from "next/link";
import React, { useEffect, useState } from "react";
import FishCard from "../comps/FishCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
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
  record->,
}`;

const speciesQuery = `*[category == $speci]{
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

export default function Home({ data }) {
  const { fishData } = data;
  console.log(fishData[5].record);
  const [species, setSpecies] = useState(false);

  useEffect(() => {}, [species]);

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: "auto",
      spacing: 15,
    },
  });

  return (
    <div className="font-source_sans min-h-[calc(100vh-100px)]">
      <div className="grid lg:grid-cols-2">
        <div className="justify-self-center px-8 py-12 lg:px-12 lg:py-24 lg:max-w-full">
          <div className="xl:max-w-xl">
            <div className="flex">
              <img
                className="h-10 self-center"
                src="/hook.svg"
                alt="Workcation"
              />
              <h1 className="text-2xl font-headline tracking-tight font-semibold sm:text-4xl lg:text-3xl xl:text-4xl">
                Fish of Minnesota
              </h1>
            </div>
            <div className="flex lg:hidden">
              <img
                className="rounded-lg shadow-lg"
                src="/fishbanner.png"
                alt="Fish banner"
              />
            </div>
            <h1 className="mt-6 text-2xl font-headline tracking-tight font-semibold sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              A Guide to Game Fishes
              <br className="hidden lg:inline" />{" "}
              <span className="text-brand"></span>
            </h1>
            <ul
              role="list"
              className="ml-2 mt-2 sm:mt-8 sm:text-xl list-disc pl-5 space-y-3 text-[#b6cce2]"
            >
              <li>Size & Habitat</li>
              <li>Distinguishing Features</li>
              <li>Easy Identification</li>
            </ul>
            <div className="mt-4 sm:mt-6 flex-col md:flex-row flex">
              <Link
                href="https://files.dnr.state.mn.us/rlp/regulations/fishing/fishing_regs.pdf#view=fit&pagemode=bookmarks"
                passHref={true}
              >
                <a
                  className="shadow hover:shadow-lg border border-gray-800 md:mr-2 mb-2 text-center inline-block px-5 py-3 rounded transform transition bg-[#1f364d] hover:bg-[#274059] hover:-translate-y-0.5 focus:ring-brand focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-brand-dark uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Fishing Regulations
                </a>
              </Link>
              <Link href={`/record`}>
                <a
                  className="shadow hover:shadow-lg border border-gray-800 mb-2 text-center inline-block px-5 py-3 rounded transform transition bg-[#1f364d] hover:bg-[#274059] hover:-translate-y-0.5 focus:ring-brand focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-brand-dark uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
                  href="#"
                >
                  Minnesota Records
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:grid">
          <img
            className="rounded-lg shadow-lg"
            src="/fishbanner.png"
            alt="Fish banner"
          />
        </div>
      </div>
      <div>
        <div
          className="flex lg:mx-16 mx-5 gap-2 justify-center"
          id="fishfilter"
        >
          <button
            className="shadow hover:shadow-lg border border-gray-800 w-full my-2 inline-block px-2 py-3 rounded transform transition bg-[#1f364d] hover:bg-[#274059] hover:-translate-y-0.5 focus:ring-brand focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-brand-dark uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
            onClick={() => setSpecies(false)}
          >
            All
          </button>
          <button
            className="shadow hover:shadow-lg border border-gray-800 w-full my-2 inline-block px-2 py-3 rounded transform transition bg-[#1f364d] hover:bg-[#274059] hover:-translate-y-0.5 focus:ring-brand focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-brand-dark uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
            onClick={() => setSpecies("pan")}
            href="#"
          >
            Panfish
          </button>
          <button
            className="shadow hover:shadow-lg border border-gray-800 w-full my-2 inline-block px-2 py-3 rounded transform transition bg-[#1f364d] hover:bg-[#274059] hover:-translate-y-0.5 focus:ring-brand focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-brand-dark uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
            onClick={() => setSpecies("bass")}
            href="#"
          >
            Bass
          </button>
          <button
            className="shadow hover:shadow-lg border border-gray-800 w-full my-2 inline-block px-2 py-3 rounded transform transition bg-[#1f364d] hover:bg-[#274059] hover:-translate-y-0.5 focus:ring-brand focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-brand-dark uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
            onClick={() => setSpecies("pike")}
            href="#"
          >
            Pike
          </button>
          <button
            className="shadow hover:shadow-lg border border-gray-800 w-full my-2 inline-block px-2 py-3 rounded transform transition bg-[#1f364d] hover:bg-[#274059] hover:-translate-y-0.5 focus:ring-brand focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-brand-dark uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
            onClick={() => setSpecies("cat")}
            href="#"
          >
            Catfish
          </button>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:mx-16 mx-5">
          {species
            ? fishData
                .filter((fishes) => fishes.name && fishes.category == species)
                .map((fish) => (
                  <FishCard
                    key={fish._id}
                    slug={fish.slug.current}
                    alt={fish.name}
                    name={fish.name}
                    scientificName={fish.scientificName}
                    length={fish.length}
                    weight={fish.weight}
                    mainImage={urlFor(fish.mainImage).url()}
                    recordName={fish.record?.name}
                    recordPounds={fish.record?.pounds + "lbs"}
                    recordOunces={fish.record?.ounces + "oz"}
                    recordLength={fish.record?.length + "in"}
                    recordGirth={fish.record?.girth + "in"}
                    recordLake={fish.record?.place}
                    recordCounty={fish.record?.county}
                    recordDate={fish.record?.date}
                  />
                ))
            : fishData.map((fish) => (
                <FishCard
                  key={fish._id}
                  slug={fish.slug.current}
                  alt={fish.name}
                  name={fish.name}
                  scientificName={fish.scientificName}
                  length={fish.length}
                  weight={fish.weight}
                  mainImage={urlFor(fish.mainImage).url()}
                  recordName={fish.record?.name}
                  recordPounds={fish.record?.pounds + "lbs"}
                  recordOunces={fish.record?.ounces + "oz"}
                  recordLength={fish.record?.length + "in"}
                  recordGirth={fish.record?.girth + "in"}
                  recordLake={fish.record?.place}
                  recordCounty={fish.record?.county}
                  recordDate={fish.record?.date}
                />
              ))}
        </ul>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const fishData = await sanityClient.fetch(fishQuery);
  const data = { fishData };
  return { props: { data } };
}

// Path ./pages/index.js
