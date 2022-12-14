import React from "react";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux, SiMaterialui, SiFirebase } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { GiChart } from "react-icons/gi";
import { useMode } from "./Context/ThemeContext";
export default function DataProject(props) {
  const mode = useMode();

  const Projects = [
    {
      live: "https://netflix-clone790.netlify.app/",
      github: "https://github.com/Asfaquekhan/netflix-clone",
      text: "A Netflix clone with Firebase backend",
      image:
        "https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png",
      skills: [
        { skill: "React", icon: <FaReact /> },
        { skill: "Tailwind", icon: <SiTailwindcss /> },
        { skill: "Firebase", icon: <SiFirebase /> },

        { skill: "Rest API", icon: <VscJson /> },
      ],
      name: "Netflix Clone",
    },
    {
      live: "https://kanban.netlify.app/",
      github: "https://github.com/Asfaquekhan/Kanban_project",
      text: "Kanban Board with drag and drop feature.",
      image: "https://reactjs.org/logo-og.png",
      skills: [
        { skill: "React", icon: <FaReact /> },
        { skill: "Tailwind", icon: <SiTailwindcss /> },
        { skill: "React", icon: <FaReact /> },
        { skill: "React", icon: <FaReact /> },
        { skill: "React", icon: <FaReact /> },
        { skill: "React", icon: <FaReact /> },
      ],
      name: "Kanban Board",
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
        { skill: "Rest API", icon: <VscJson /> },
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
                  <h2
                    className="text-center p-2 m-2 text-xl font-bold "
                    id={mode ? "primary_dark" : "primary_light"}
                  >
                    {curr.name}
                  </h2>
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
                        <div className="flex flex-wrap w-3/4 mx-auto ">
                          {curr.skills.map((value) => {
                            return (
                              <button className="flex items-center p-2 m-1">
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
