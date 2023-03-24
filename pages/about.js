import React from "react";

function About() {
  return (
    <div className="grid lg:grid-cols-2">
      <div>
        <img
          className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-88 sm:w-full sm:object-cover object-center"
          src="/natejahnke.jpg"
        ></img>
      </div>
      <div>
        <h1>Nathan Jahnke</h1>
      </div>
    </div>
  );
}

export default About;
