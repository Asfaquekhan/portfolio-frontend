import React from "react";

import { FaReact } from "react-icons/fa";
import { SiRedux, SiMaterialui } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { GiChart } from "react-icons/gi";
import { useMode } from "./Context/ThemeContext";
export default function DataProject(props) {
  const mode = useMode();

  const Projects = [
    {
      live: "https://cryptosquare1.netlify.app/",
      github: "https://github.com/Asfaquekhan/Crypto_project",
      text: "project1",
      image: "https://reactjs.org/logo-og.png",
      skills: [
        { skill: "React", icon: <FaReact /> },
        { skill: "React", icon: <FaReact /> },
        { skill: "React", icon: <FaReact /> },
        { skill: "React", icon: <FaReact /> },
        { skill: "React", icon: <FaReact /> },
        { skill: "React", icon: <FaReact /> },
      ],
      name: "Project 1",
    },
    {
      live: "https://github.com/Asfaquekhan/Crypto_project",
      github: "https://github.com/Asfaquekhan/Crypto_project",
      text: "project 2",
      image: "https://reactjs.org/logo-og.png",
      skills: [
        { skill: "React", icon: <FaReact /> },
        { skill: "React", icon: <FaReact /> },
        { skill: "React", icon: <FaReact /> },
        { skill: "React", icon: <FaReact /> },
        { skill: "React", icon: <FaReact /> },
        { skill: "React", icon: <FaReact /> },
      ],
      name: "project 2",
    },
    {
      live: "https://cryptosquare1.netlify.app/",
      github: "https://github.com/Asfaquekhan/Crypto_project",
      text: "web app providing various informations about crypto currencies .Also react curd operations ",
      image:
        "https://images.pexels.com/photos/6771740/pexels-photo-6771740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      skills: [
        { skill: "React", icon: <FaReact /> },
        { skill: "Redux", icon: <SiRedux /> },
        { skill: "Material UI", icon: <SiMaterialui /> },
        { skill: "Chart.js", icon: <GiChart /> },
        { skill: "Rest API", icon: <VscJson /> }
        
      ],
      name: "CryptoSquare",
    },
  ];

  return (
    <div id="project">
      <h1
        className="mb-4 text-4xl tracking-tight  text-center p-3 m-3"
        id={mode ? "primary_dark" : "primary_light"}
      >
        Projects
      </h1>

      <div
        className="md:grid grid-cols-2"
        id={mode ? "primary_dark" : "primary_light"}
      >
        {Projects &&
          Projects.map((curr) => {
            return (
              <div>
                <section className="">
                  <h1
                    className="text-center p-2 m-2 text-xl"
                    id={mode ? "primary_dark" : "primary_light"}
                  >
                    {curr.name}
                  </h1>
                  <div className="">
                    <div>
                      <img
                        src={curr.image}
                        alt=""
                        width={320}
                        className="mx-auto rounded-3xl"
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
                        <div className="grid gap-3  grid-cols-3 m-2 p-2">
                          {curr.skills.map((value) => {
                            return (
                              <span className="flex items-center ">
                                {value.icon}
                                <p className="ml-3">{value.skill}</p>
                              </span>
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
                            className="p-2 flex items-center text-center justify-center transition-colors duration-150 rounded-lg focus:shadow-outline"
                            id={mode ? "button_dark" : "button_light"}
                          >
                            Live Demo
                          </button>
                        </a>
                        <a
                          href={curr.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button
                            className="p-2 flex items-center text-center justify-center transition-colors duration-150 rounded-lg focus:shadow-outline"
                            id={mode ? "button_dark" : "button_light"}
                          >
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
