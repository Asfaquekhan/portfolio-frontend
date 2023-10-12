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
    <div className="min-h-screen m-3 py-5" id="about">
      
      <h1
        className="mb-4  tracking-tight  text-center p-3 m-3 text-4xl font-extrabold dark:text-white underline underline-offset-3 decoration-8 decoration-blue-600  leading-none  text-gray-900 md:text-5xl lg:text-6xl "
        id={mode ? "primary_dark" : "primary_light"}
      >
        About me
      </h1>
      <div className=" max-w-[900px] mx-auto">
        <img src=" " alt="" className="rounded-full" width={320} />

        <div className=" py-16" id={mode ? "second_dark" : "second_light"}>
          <p className="mb-3 font-light text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-4xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
            {" "}
            Hi,<span>{setgreet}!</span> Hope you having a great day...
          </p>
          <br />
          <ul className="">
            <li className="font-light text-gray-500 dark:text-gray-400">
              I'm Asfaque , a passionate and dedicated Frontend Web Developer
              with a strong enthusiasm for creating elegant, user-friendly web
              applications. I have a knack for turning ideas into interactive
              and visually appealing digital experiences.
            </li>
            <br />
            <li className="font-light text-gray-500 dark:text-gray-400 mb-4">
              My journey into web development started with a curiosity about how
              websites work and a desire to bring creative concepts to life. I
              embarked on this exciting path, constantly learning and honing my
              skills to stay up-to-date with the latest web technologies.
            </li>
            <span className="font-semibold ">What I Love</span> 
            <li className="font-light text-gray-500 dark:text-gray-400 mb-4">
              {" "}
             I thrive on the challenges that web development
              presents. Crafting beautiful and responsive user interfaces,
              optimizing performance, and solving complex problems are some of
              the aspects of frontend development that truly excite me. I
              believe that a well-designed website can make a significant
              difference in user engagement and satisfaction.{" "}
            </li>
           
           
            <li className="font-light text-gray-500 dark:text-gray-400">Let's Connect I'm always eager to collaborate on
              exciting projects, learn from others, and share my knowledge. If
              you're looking for a frontend developer or just want to connect,
              feel free to reach out to me. Let's work together to create
              remarkable web experiences. Thank you for visiting my portfolio,
              and I look forward to connecting with you!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
