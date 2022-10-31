import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useMode } from "./Context/ThemeContext";
export default function DataProject(props) {
  const mode=useMode()
  return (
    <div>
      <section className="p-4 my-4 rounded-3xl shadow-md">
        <h1 className="text-center text-2xl"id={mode?"primary_dark":"primary_light"}>{props.name}</h1>
        <div className="md:flex space-x-3">
          <div>
            <img
              src="https://reactjs.org/logo-og.png"
              alt=""
              width={1240}
              className="my-4 rounded-3xl"
            />
          </div>
          <div>
            <article className="p-4" id={mode?"second_dark":"second_light"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dicta
              necessitatibus molestias, repudiandae excepturi at aliquam nisi
              velit est saepe.
            </article>
            <div id={mode?"second_dark":"second_light"}>
              <ul className="md:flex">
                <li className="flex items-center">
                  <AiOutlineCheckCircle className="mx-2" size={20} />
                  Html
                </li>
                <li className="flex items-center">
                  <AiOutlineCheckCircle className="mx-2" size={20} />
                  Tailwind
                </li>
                <li className="flex items-center">
                  <AiOutlineCheckCircle className="mx-2" size={20} />
                  Javascript
                </li>
                <li className="flex items-center">
                  <AiOutlineCheckCircle className="mx-2" size={20} />
                  React
                </li>
                <li className="flex items-center">
                  <AiOutlineCheckCircle className="mx-2" size={20} />
                  Redux
                </li>
              </ul>
            </div>
            <div className="flex space-x-4 justify-center m-6 p-2" >
            <button className="p-2 flex items-center text-center justify-center text-indigo-100 transition-colors duration-150 bg-slate-900 rounded-lg focus:shadow-outline hover:border-2 border-slate-900 hover:bg-white hover:text-black" id={mode?"button_dark":"sbutton_light"}>
              Live Demo
            </button>
            <button className="p-2 flex items-center text-center justify-center text-indigo-100 transition-colors duration-150 bg-slate-900 rounded-lg focus:shadow-outline hover:border-2 border-slate-900 hover:bg-white hover:text-black" id={mode?"button_dark":"sbutton_light"}>
              GitHUb
            </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
