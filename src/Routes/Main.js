import React from "react";


import Intro from "../component/main/Intro.js";
import Pic from "../component/main/Pic";

export default function Main() {
  
  return (
    <>
      <div
        className="md:flex max-w-[1250px]  mx-auto justify-between my-11 p-3"
        id="main"
      >
       <Intro/>
       <Pic/>
      </div>
    </>
  );
}
