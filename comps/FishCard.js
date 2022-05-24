import Link from "next/link";
import Image from "next/image";

const FishCard = (props) => {
  return (
      <div>
    <Link href={`/fish/${props.slug}`} >
      <a>
        <li
          key={props._id}
          className="relative rounded-lg shadow-lg hover:shadow-[#4BB6EF]"
        >
          <div className="h-48 bg-[#4BB6EF] relative rounded-lg shadow-lg">
            <Image
              src={props.mainImage}
              alt={props.alt}
              // priority={true}
              loading="lazy"
              // placeholder="blur" with animated shimmer blurDataURL
              layout="fill"
              objectFit="contain"
              className="p-2 rounded-lg relative shadow hover:scale-110 duration-500 transform transition"
            />
          </div>
          <div className="p-4 h-48 bg-[#edf6f9] rounded">
            <h3 className="text-xl font-semibold text-gray-800">{props.name}</h3>
            <p className="text-gray-500 italic text-sm pb-2">
              {props.scientificName}
            </p>
            <div className="flex">
            <div className="flex">
              <img className="pb-2" src="/ruler.png" />
              <p className="self-center pl-2">to {props.length} in.</p>
            </div>
            <div className="flex">
              <img className="pb-2" src="/scale.png" />
              <p className="self-center pl-2">to {props.weight} lbs.</p>
            </div>
            </div>
            <div>
              <h3 className="font-semibold">MN State Record</h3>
            </div>
            {props.recordPounds == "undefinedlbs" ?
              <p></p> :
              <p>{props.recordPounds} {props.recordOunces} {props.recordLength} {props.recordGirth} {props.recordLake} {props.recordCounty} {props.recordDate}</p>
            }
          </div>
        </li>
      </a>
     </Link>
    </div>
  );
};

export default FishCard;