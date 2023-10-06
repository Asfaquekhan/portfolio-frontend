import React from "react";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux, SiMaterialui, SiFirebase,SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { GiChart } from "react-icons/gi";
import {DiMongodb } from "react-icons/di"
import { useMode } from "./Context/ThemeContext";

export default function DataProject(props) {
  const mode = useMode();

  const Projects = [
    {
      id: 1,
      live: "https://recipecompiler.netlify.app/",
      github: "https://github.com/Asfaquekhan/Frontend_FoodRecipes",
      text: " web app is built using the MERN (MongoDB, Express.js, React, Node.js) stack and provides access to an extensive collection of over 6000+ food recipes. Users can engage with the app to explore, search for, and access detailed information on a wide range of recipes. Additionally, the app offers a feature that allows users to mark their favorite recipes for easy access and reference.",
      image: "https://drive.google.com/uc?export=download&id=1vYcvGmoSbBXOs6qnY1hqBJ7rVQqsvHnK",
      skills: [
        { skill: "React", icon: <FaReact size={20}/> },
        { skill: "Tailwind", icon: <SiTailwindcss size={20}/> },
        { skill: "Node.js", icon: <FaNodeJs size={20}/> },
        { skill: "Express.js", icon: <SiExpress size={20}/> },
        { skill: "MongoDB", icon: <DiMongodb size={20}/> },
      ],
      name: "Recipe Compiler",
    },
    {
      id: 2,
      live: "https://netflix-clone790.netlify.app/",
      github: "https://github.com/Asfaquekhan/netflix-clone",
      text: "A Netflix clone with Firebase backend",
      image: "https://www.youtube.com/embed/do957lxzVs0?si=ieCzT5kuIbbUfXRr",
      skills: [
        { skill: "React", icon: <FaReact size={20}/> },
        { skill: "Tailwind", icon: <SiTailwindcss size={20}/> },
        { skill: "Firebase", icon: <SiFirebase size={20}/> },

       
      ],
      name: "Netflix Clone",
    },
   
    {
      id: 4,
      live: "https://cryptosquare1.netlify.app/",
      github: "https://github.com/Asfaquekhan/Crypto_project",
      text: "web app providing various informations about crypto currencies with individual coin page ",
      image: 'https://drive.google.com/uc?export=download&id=1PSRs31FQA5t_Rd_JhzTFn7LG41WFl2FV',
      skills: [
        { skill: "React", icon: <FaReact size={20}/> },
        { skill: "Redux", icon: <SiRedux size={20}/> },
        { skill: "Material UI", icon: <SiMaterialui size={20}/> },
        { skill: "Chart.js", icon: <GiChart size={20} /> },
       
      ],
      name: "CryptoSquare",
    },
  ];

  return (
    <div id="project" className="max-w-[1500px] mx-auto">
      <h1
        className="mb-4  tracking-tight  text-center p-3 m-3 text-4xl font-extrabold dark:text-white underline underline-offset-3 decoration-8  decoration-blue-600  leading-none  text-gray-900 md:text-5xl lg:text-6xl "
        id={mode ? "primary_dark" : "primary_light"}
      >
        Projects
      </h1>

      <div
        className="md:grid grid-cols-2 gap-4 "
        id={mode ? "primary_dark" : "primary_light"}
      >
        {Projects &&
          Projects.map((curr) => {
            return (
              <div key={curr.id} className="">
                <section className="">
                  <h2
                    className="text-center p-2 m-2 text-xl font-bold "
                    id={mode ? "primary_dark" : "primary_light"}
                  >
                    {curr.name}
                  </h2>
                  <div className="">
                    <div className=" flex justify-center">
                      <img
                        src={
                         curr.image
                        }
                        alt="Food Recipe Project"
                        className="rounded-xl"
                        height={1280}
                      />
                    </div>
                    <div>
                      <article
                        className="text-center p-2 m-2"
                        id={mode ? "second_dark" : "second_light"}
                      >
                        {curr.text}
                      </article>
                      <div id={mode ? "second_dark" : "second_light"}>
                        <div className="flex flex-wrap gap-3 justify-around md:w-3/4 mx-auto p-2 ">
                          {curr.skills.map((value,index) => {
                            return (
                             <p key={index} className="flex items-center text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                            <span className="mr-2">{value.icon}</span>   {value.skill}
                            </p>
                            );
                          })}
                        </div>
                      </div>
                      <div className="flex space-x-4 justify-center m-6 p-2">
                        <a
                          href={curr.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button
                            className=" flex items-center text-center justify-center transition-colors duration-150 rounded-lg focus:shadow-outline px-4 py-2"
                            id={mode ? "button_dark" : "button_light"}
                          >
                            <AiOutlineLink className="mr-2" size={25} />
                            Live Demo
                          </button>
                        </a>
                        <a
                          href={curr.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button
                            className=" flex items-center text-center justify-center transition-colors duration-150 rounded-lg focus:shadow-outline px-4 py-2"
                            id={mode ? "button_dark" : "button_light"}
                          >
                            <AiFillGithub className="mr-2" size={25} />
                            GitHUb
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            );
          })}
      </div>
    </div>
  );
}
