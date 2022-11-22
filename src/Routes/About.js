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
        className="mb-4 text-2xl tracking-tight font-extrabold text-center"
        id={mode ? "primary_dark" : "primary_light"}
      >
        About me
      </h1>
      <div className=" max-w-[900px] mx-auto">
        <img src=" " alt="" className="rounded-full" width={320} />

        <div className=" py-16" id={mode ? "second_dark" : "second_light"}>
        
          
<p className="mb-3 font-light text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-4xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">  Hi,<span>{setgreet}!</span> Hope you having a great day </p>
<p className="font-light text-gray-500 dark:text-gray-400">My name is Asfaque khan</p>

        </div>
      </div>
    </div>
  );
}
