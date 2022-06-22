import Table from 'react-tailwind-table';
import React, { useState, Component } from 'react';
import { sanityClient, urlFor } from "../lib/sanity";
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const recordQuery = `*[_type == "record"]{
    _id,
    name,
    pounds,
    ounces,
    length,
    girth,
    place,
    county,
    date,
}`;

function column() {
    return [
      {
        
        field: "name",
        use: "Name"
      },
      {
        // use_in_display: false,
        field: "pounds", //Object destructure
        use: "Lbs."
      },
      {
        field: "ounces",
        use: "Oz.",
        // use_in_search:false
      },
      {
          field: "length",
          use: "Length (in)"
      },
      {
        field: "girth",
        use: "Girth (in)"
      },
      {
        field: "place",
        use: "Place"
      },
      {
        field: "county",
        use: "County"
      },
      {
        field: "date",
        use: "Date"
      }
    ]
}

export default function Record({ record }) {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      '(min-width: 768px)': {
        slides: {
          perView: 3,
          spacing: 10,
        },
      },
    },
    // slides: {
    //   perView: 3,
    //   spacing: 10,
    // },
  })

  console.log(record);
  const [columns, setColumns] = useState(column());

  const rowcheck = (row,column, display_value) => {
    if (column.field === "created_at") {
      return <button className="border p-2">See button</button>
    }
    if (column.field === "name") {
      return <b>{display_value}</b>
    }
    return display_value
  }
  
    return (
      <div className="lg:mx-32 mt-3">
          <div ref={sliderRef} className="keen-slider overflow-hidden">
          <div className="keen-slider__slide flex bg-slate-200 rounded-lg shadow-xl">
            <Zoom>
            <img src="../flatheadcatfishrecord.jpg" alt="" className="rounded-lg shadow-xl h-full w-44 object-cover object-center" />
            </Zoom>
            <div className="ml-4">
            <h3 className="text-2xl mb-2">Flathead Catfish</h3>
            <p><span className="font-semibold">Length:</span> 52 inches<sup>1</sup>/<sub>2</sub></p>
            <p><span className="font-semibold">Girth:</span> 32 inches</p>
            <p><span className="font-semibold">Caught:</span> August 2, 2017</p>
            <p><span className="font-semibold">Place:</span> St. Croix River</p>
            <p><span className="font-semibold">County:</span> Washington</p>
            <p><span className="font-semibold">Angler:</span> Mark Mosby, St. Anthony</p>
            </div>
          </div>
          <div className="keen-slider__slide flex-col bg-slate-200 rounded-lg shadow-xl">
            <Zoom>
            <img src="../lakesturgeonrecord.jpg" alt="" className="rounded-lg shadow-xl h-52 w-full object-cover object-center" />
            </Zoom>
            <div className="ml-4">
            <h3 className="text-2xl mb-2">Lake Sturgeon</h3>
            <p><span className="font-semibold">Length:</span> 78 inches<sup>1</sup>/<sub>2</sub></p>
            <p><span className="font-semibold">Girth:</span> 29<sup>1</sup><sub>2</sub> inches</p>
            <p><span className="font-semibold">Caught:</span> February 9, 2019</p>
            <p><span className="font-semibold">Place:</span> St. Croix River</p>
            <p><span className="font-semibold">County:</span> Washington</p>
            <p><span className="font-semibold">Angler:</span> Darren Troseth, Jordan</p>
            </div>
          </div>
          <div className="keen-slider__slide flex-col bg-slate-200 rounded-lg shadow-xl">
            <Zoom wrapStyle={{width: '100%'}}>
            <img src="../pikerecord.jpg" alt="" className="rounded-lg shadow-xl h-52 w-full object-cover object-center" />
            </Zoom>
            <div className="ml-4">
            <h3 className="text-2xl mb-2">Northern Pike</h3>
            <p><span className="font-semibold">Length:</span> 46 inches<sup>1</sup>/<sub>4</sub></p>
            <p><span className="font-semibold">Girth:</span> Not provided</p>
            <p><span className="font-semibold">Caught:</span> June 19, 2021</p>
            <p><span className="font-semibold">Place:</span> Basswood Lake</p>
            <p><span className="font-semibold">County:</span> Lake</p>
            <p><span className="font-semibold">Angler:</span> Brecken Kobylecky, Geneva, Ill.</p>
            </div>
          </div>
          <div className="keen-slider__slide flex-col bg-slate-200 rounded-lg shadow-xl">
          <Zoom wrapStyle={{width: '100%'}}>
            <img src="../muskyrecord1.jpg" alt="" className="rounded-lg shadow-xl h-52 w-full object-cover object-top" />
            </Zoom>
            <div className="ml-4">
            <h3 className="text-2xl mb-2">Muskellunge - Tie</h3>
            <p><span className="font-semibold">Length:</span> 57 inches<sup>1</sup>/<sub>4</sub></p>
            <p><span className="font-semibold">Girth:</span> Not provided</p>
            <p><span className="font-semibold">Caught:</span> July 23, 2021</p>
            <p><span className="font-semibold">Place:</span> Lake Vermilion</p>
            <p><span className="font-semibold">County:</span> Cook</p>
            <p><span className="font-semibold">Angler:</span> Todd Kirby, Hudson, Wis.</p>
            </div>
          </div>
          <div className="keen-slider__slide flex-col bg-slate-200 rounded-lg shadow-xl">
            <Zoom wrapStyle={{width: '100%'}}>
            <img src="../muskyrecord2.jpg" alt="" className="rounded-lg shadow-xl h-52 w-full object-cover object-center" />
            </Zoom>
            <div className="ml-4">
            <h3 className="text-2xl mb-2">Muskellunge - Tie</h3>
            <p><span className="font-semibold">Length:</span> 57 inches<sup>1</sup>/<sub>4</sub></p>
            <p><span className="font-semibold">Girth:</span> 25<sup>1</sup><sub>2</sub> inches</p>
            <p><span className="font-semibold">Caught:</span> August 6, 2019</p>
            <p><span className="font-semibold">Place:</span> Lake Vermilion</p>
            <p><span className="font-semibold">County:</span> St. Louis</p>
            <p><span className="font-semibold">Angler:</span> Corey Kitzmann, Davenport, Iowa</p>
            </div>
          </div>
          </div>
        <div className='mt-2'>
            <Table columns={columns} rows={record} per_page={5} table_header="MN State Record Fish" row_render={rowcheck} /> 
        </div>
      </div>
      );
};

export async function getStaticProps() {
    const record = await sanityClient.fetch(recordQuery);
    return { props: { record}};
}


  

