import React from "react";
import { useMode } from "../Context/ThemeContext";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import Lottie from "lottie-react";

// eslint-disable-next-line
function ProjectCard({ name, image, details, stacks, live, github }) {
  const mode = useMode();
  return (
    <div>
      <section className="" id={mode ? "second_dark" : "second_light"}>
        <div className="flex flex-col justify-center ">
         
        <Lottie animationData={image} style={{height:"320px",width:"100%"}}/>
       
          <article className="text-center p-2 m-2">
            <span className="text-blue-600 font-extrabold leading-none tracking-tight mr-2">{name}</span>
            {details}
          </article>
        </div>
        <div>
          <div className="flex flex-wrap gap-3 justify-around md:w-3/4 mx-auto p-2 ">
            {stacks?.map((value, index) => {
              return (
                <p
                  key={index}
                  className="flex items-center text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
                >
                  <span className="mr-2">{value.icon}</span> {value.skill}
                </p>
              );
            })}
          </div>

          <div className="flex space-x-4 justify-center m-6 p-2">
            <a href={live} target="_blank" rel="noopener noreferrer">
              <button
                id={mode ? "button_dark" : "button_light"}
                className=" flex items-center text-center justify-center transition-colors duration-150 rounded-lg focus:shadow-outline px-4 py-2"
              >
                <AiOutlineLink className="mr-2" size={25} />
                Live Demo
              </button>
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <button
                id={mode ? "button_dark" : "button_light"}
                className=" flex items-center text-center justify-center transition-colors duration-150 rounded-lg focus:shadow-outline px-4 py-2"
              >
                <AiFillGithub className="mr-2" size={25} />
                GitHUb
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectCard;
