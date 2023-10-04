import React from "react";
import { useMode } from "../component/Context/ThemeContext";

export default function About(props) {
  /*to get time*/
  const mode = useMode();
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
    <div className="h-screen m-3 py-16" id="about">
      <h1
        className="mb-4  tracking-tight  text-center p-3 m-3 text-4xl font-extrabold dark:text-white underline underline-offset-3 decoration-8  dark:decoration-blue-600  leading-none  text-gray-900 md:text-5xl lg:text-6xl "
        id={mode ? "primary_dark" : "primary_light"}
      >
        About me
      </h1>
      <div className=" max-w-[900px] mx-auto">
        <img src=" " alt="" className="rounded-full" width={320} />

        <div className=" py-16" id={mode ? "second_dark" : "second_light"}>
        
          
<p className="mb-3 font-light text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-4xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">  Hi,<span>{setgreet}!</span> Hope you having a great day...</p>
<br />
<ul className="list-disc">
<li className="font-light text-gray-500 dark:text-gray-400">My name is Asfaque khan & i enjoy creating things that live on the internet. i'm a passionate developer, with strong administrative & communication skills, good attention to details. my aim is to write efficient code with responsive design.</li>
<br />
<li className="font-light text-gray-500 dark:text-gray-400">Currently my main goal is to learn new technologies & expand my knowledge </li>
</ul>


        </div>
      </div>
    </div>
  );
}
