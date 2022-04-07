import Head from 'next/head'
import Image from 'next/image'

export default function Home({data}) {
  const fish = data.fish;
  return ( <div className = "flex space-x-2 justify-center" >
    <button type = "button" className = "inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">{fish[0].name}</button> 
    </div>
  );
}


export function getStaticProps() {
  return {
    props: {
      data: {
        fish: [{
          name: "Largemouth Bass"
        }],
      },
    },
  };
}