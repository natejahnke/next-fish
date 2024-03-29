import Link from "next/link";
import Image from "next/image";

const FishCard = (props) => {
  return (
    <div>
      <Link href={`/fish/${props.slug}`}>
        <a>
          <li
            key={props._id}
            className="relative shadow hover:shadow-lg border-gray-800 border rounded-lg"
          >
            <div className="h-48 bg-[#4BB6EF] rounded-t-lg relative shadow-lg">
              <Image
                src={props.mainImage}
                alt={props.alt}
                loading="lazy"
                layout="fill"
                objectFit="contain"
                className="p-2 relative shadow hover:scale-110 duration-500 transform transition"
              />
            </div>
            <div className="p-4 h-54 bg-[#274059] hover:bg-[#2c4763] rounded-b-lg">
              <h3 className="text-xl font-semibold">{props.name}</h3>
              <p className="italic text-sm pb-2 text-[#63809c]">
                {props.scientificName}
              </p>
              <div className="flex text-[#b6cce2]">
                <div className="flex">
                  <img className="pb-2 w-8" src="/tapewhite.svg" />
                  <p className="self-center pl-2">to {props.length} in.</p>
                </div>
                <div className="ml-4 flex">
                  <img className="pb-2 w-8" src="/weightwhite.svg" />
                  <p className="self-center pl-2">to {props.weight} lbs.</p>
                </div>
              </div>
              {!props.recordName ? (
                <p></p>
              ) : (
                <div>
                  <div>
                    <h3 className="font-semibold">MN State Record</h3>
                  </div>
                  <p>
                    <span className="italic text-sm pb-2 text-[#63809c]">
                      Weight:
                    </span>{" "}
                    {props.recordPounds} {props.recordOunces}
                    <span className="ml-4 italic text-sm pb-2 text-[#63809c]">
                      Length:
                    </span>{" "}
                    {props.recordLength}{" "}
                    <span className="ml-4 italic text-sm pb-2 text-[#63809c]">
                      Girth:
                    </span>{" "}
                    {props.recordGirth}{" "}
                    <span className="ml-4 italic text-sm pb-2 text-[#63809c]">
                      Place:
                    </span>{" "}
                    {props.recordLake}
                    <br />
                    <span className="italic text-sm pb-2 text-[#63809c]">
                      County:{" "}
                    </span>
                    {props.recordCounty}{" "}
                    <span className="ml-4 italic text-sm pb-2 text-[#63809c]">
                      Caught:{" "}
                    </span>
                    {props.recordDate}
                  </p>
                </div>
              )}
            </div>
          </li>
        </a>
      </Link>
    </div>
  );
};

export default FishCard;

// Path: .comps/FishCard.js
