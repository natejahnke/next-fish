import Table from 'react-tailwind-table'
import 'react-tailwind-table/dist/index.css' //use for a non tailwind project
import React, { useState } from 'react';
import { sanityClient, urlFor } from "../../lib/sanity";
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';


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
  const [refCallback, slider, sliderNode] = useKeenSlider(
    {
      slideChanged() {
        console.log('slide changed')
      },
    },
    [
      // add plugins here
    ]
  )
  console.log(record);
  const [columns, setColumns] = useState(column());
//   const [rows, setRows] = useState(fakePlayers());


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
      <div>
          <div ref={refCallback} className="keen-slider h-20">
          <div className="keen-slider__slide">1</div>
          <div className="keen-slider__slide">2</div>
          <div className="keen-slider__slide">3</div>
          </div>
        <div className='mx-32 mt-2'>
            <Table columns={columns} rows={record} per_page={5} table_header="MN State Record Fish" row_render= {rowcheck} /> 
        </div>
      </div>
      );
};

export async function getStaticProps() {
    const record = await sanityClient.fetch(recordQuery);
    return { props: { record}};
}


  

