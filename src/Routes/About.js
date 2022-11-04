import React from "react";
import { useMode } from "../component/Context/ThemeContext";


export default function About(props) { 
 const mode =useMode();

  const greet = new Date().getHours();
  let setgreet = "";
  if (greet < 12) {
    setgreet = "Good morning";
  } else if (greet < 18) {
    setgreet = "Good afternoon";
  } else {
    setgreet = "Good Evening";
  }
  return (
    <div className="h-screen m-3" id="about"  >
    <h1 className="text-center text-3xl"id={mode?"primary_dark":"primary_light"}>About me</h1>
      <div className="md:flex h-full max-w-[900px] mx-auto justify-between items-center">
  
        <img src=" " alt="" className="rounded-full" width={320} />
       
        <div className=""id={mode?"second_dark":"second_light"}>
          <p className="text-xl font-bold " >
            Hi,<span>{setgreet}!</span> Hope you having a great day
          </p>
             <p className="">My name is Asfaque khan.i'm a self-taught frontend web devloaper
            </p>
          <hr />
          <p className="text-xl font-bold">
            why this mechanical guy with a web portfolio?
          </p>
          <p className="">
            From college days i was passonate about coding.I love how it gives a
            free path for creativity & automate things.
          </p>
          <p className="">
            So here i'm coming crawling from tutorial hell with a portfolio and
            some projects using html css javascript react.
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
