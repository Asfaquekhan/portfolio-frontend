import React from "react";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux, SiMaterialui, SiFirebase } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { GiChart } from "react-icons/gi";
import { useMode } from "./Context/ThemeContext";
import { useState } from "react";

export default function DataProject(props) {
  const mode = useMode();

  const Projects = [
    {
      id: 1,
      live: "https://recipecompiler.netlify.app/",
      github: "https://github.com/Asfaquekhan/Frontend_FoodRecipes",
      text: "A Food Recipe Webapp",
      image: "https://youtu.be/do957lxzVs0?si=x2EnkcDIUSor6lGh",
      skills: [
        { skill: "React", icon: <FaReact /> },
        { skill: "Tailwind", icon: <SiTailwindcss /> },
        { skill: "Firebase", icon: <SiFirebase /> },

        { skill: "Rest API", icon: <VscJson /> },
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
        { skill: "React", icon: <FaReact /> },
        { skill: "Tailwind", icon: <SiTailwindcss /> },
        { skill: "Firebase", icon: <SiFirebase /> },

        { skill: "Rest API", icon: <VscJson /> },
      ],
      name: "Netflix Clone",
    },
    {
      id: 3,
      live: "https://kanban.netlify.app/",
      github: "https://github.com/Asfaquekhan/Kanban_project",
      text: "Kanban Board with drag and drop feature.",
      image: "https://www.youtube.com/embed/do957lxzVs0?si=ieCzT5kuIbbUfXRr",
      skills: [
        { skill: "React", icon: <FaReact /> },
        { skill: "Tailwind", icon: <SiTailwindcss /> },
        { skill: "React", icon: <FaReact /> },
        { skill: "React", icon: <FaReact /> },
      ],
      name: "Kanban Board",
    },
    {
      id: 4,
      live: "https://cryptosquare1.netlify.app/",
      github: "https://github.com/Asfaquekhan/Crypto_project",
      text: "web app providing various informations about crypto currencies with individual coin page ",
      image: "https://www.youtube.com/embed/do957lxzVs0?si=ieCzT5kuIbbUfXRr",
      skills: [
        { skill: "React", icon: <FaReact /> },
        { skill: "Redux", icon: <SiRedux /> },
        { skill: "Material UI", icon: <SiMaterialui /> },
        { skill: "Chart.js", icon: <GiChart /> },
        { skill: "Rest API", icon: <VscJson /> },
      ],
      name: "CryptoSquare",
    },
  ];
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div id="project" className="max-w-[1500px] mx-auto">
      <h1
        className="mb-4  tracking-tight  text-center p-3 m-3 text-4xl font-extrabold dark:text-white underline underline-offset-3 decoration-8  dark:decoration-blue-600  leading-none  text-gray-900 md:text-5xl lg:text-6xl "
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
                      <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{ position: "relative" }}
                      >
                        {isHovered ? (
                          <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/do957lxzVs0?si=x2EnkcDIUSor6lGh&mute=1&autoplay=1&showinfo=0"
                            title="YouTube video player"
                            className="rounded-2xl"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullscreen
                          ></iframe>
                        ) : (
                          <img
                            src={
                              "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
                            }
                            alt="Video Thumbnail"
                            width="300"
                            height="200"
                          />
                        )}
                      </div>
                    </div>
                    <div>
                      <article
                        className="text-center p-2 m-2"
                        id={mode ? "second_dark" : "second_light"}
                      >
                        {curr.text}
                      </article>
                      <div id={mode ? "second_dark" : "second_light"}>
                        <div className="flex flex-wrap justify-around md:w-3/4 mx-auto ">
                          {curr.skills.map((value) => {
                            return (
                              <button className="flex  items-center p-2 m-1">
                                {value.icon}
                                <p className="ml-3">{value.skill}</p>
                              </button>
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
