import React from "react";
import ProjectCard from "./ProjectCard";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { useMode } from "../Context/ThemeContext";
import { DiMongodb } from "react-icons/di";
// eslint-disable-next-line

function ProjectList() {
  const mode = useMode();
  return (
    <div id="project" className="max-w-[1500px] mx-auto mb-10">
      <h1
        className="mb-10 tracking-tight  text-center p-3 m-3 text-4xl font-extrabold dark:text-white underline underline-offset-3 decoration-8  decoration-blue-600  leading-none  text-gray-900 md:text-5xl lg:text-6xl "
        id={mode ? "primary_dark" : "primary_light"}
      >
        Projects
      </h1>

      <div
        className="md:grid grid-cols-2 gap-4 "
        id={mode ? "primary_dark" : "primary_light"}
      >
        <ProjectCard
          live={"https://recipecompiler.netlify.app/"}
          github={"https://github.com/Asfaquekhan/Frontend_FoodRecipes"}
          details={
            "Provides access to an extensive collection of over 6000+ food recipes. Users can engage with the app to explore, search for, and access detailed information on a wide range of recipes. Additionally, the app offers a feature that allows users to mark their favorite recipes for easy access and reference."
          }
          stacks={[
            { skill: "React", icon: <FaReact size={20} /> },
            { skill: "Tailwind", icon: <SiTailwindcss size={20} /> },
            { skill: "Node.js", icon: <FaNodeJs size={20} /> },
            { skill: "Express.js", icon: <SiExpress size={20} /> },
            { skill: "MongoDB", icon: <DiMongodb size={20} /> },
          ]}
          image={"https://drive.google.com/uc?export=view&id=13gFHBvgodJDEJC-9ta2gVSOIbCqe4whM"}
          name={"Recipe Compiler"}
        />
        <ProjectCard />
      </div>
    </div>
  );
}

export default ProjectList;
