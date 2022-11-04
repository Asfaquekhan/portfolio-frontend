import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

import { useMode } from "./Context/ThemeContext";
export default function DataProject(props) {
  const mode=useMode()


const Projects=[
        {
          live:"https://cryptosquare1.netlify.app/",
          github:"https://github.com/Asfaquekhan/Crypto_project",
          text:"project1",
          image:"https://reactjs.org/logo-og.png",
          skills:"",
          name :"Project 1"
      
      },
      {
        live:"https://github.com/Asfaquekhan/Crypto_project",
        github:"https://github.com/Asfaquekhan/Crypto_project",
        text:"project 2",
        image:"https://reactjs.org/logo-og.png",
        skills:"",
        name :"project 2"
    
    },
    {
      live:"https://cryptosquare1.netlify.app/",
      github:"https://github.com/Asfaquekhan/Crypto_project",
      text:"Made a crypto currency real time website using api & curd operations with help of material ui",
      image:"https://reactjs.org/logo-og.png",
      skills:"",
      name :"CryptoSquare1"
  
  },
]



  return (
    <div id="project">
      <h1 className="text-center text-3xl p-3 m-3">Projects</h1>
    <div className="md:grid grid-cols-2"  id={mode?"primary_dark":"primary_light"}>
      {Projects && Projects.map((curr)=>{
        return (
          <div>
             <section className="" >
        <h1 className="text-center p-2 m-2"id={mode?"primary_dark":"primary_light"}>{curr.name}</h1>
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
            <article className="text-center p-2 m-2" id={mode?"second_dark":"second_light"}>
             {curr.text}
            </article>
            <div id={mode?"second_dark":"second_light"}>
              <ul className="grid grid-cols-2">
                <li className="flex items-center p-1 m-1 md:p-0 md:m-0">
                  <AiOutlineCheckCircle className="mx-2" size={20} />
                  Html
                </li>
                <li className="flex items-center p-1 m-1 md:p-0 md:m-0">
                  <AiOutlineCheckCircle className="mx-2" size={20} />
                  Tailwind
                </li>
                <li className="flex items-center p-1 m-1 md:p-0 md:m-0">
                  <AiOutlineCheckCircle className="mx-2" size={20} />
                  Javascript
                </li>
                <li className="flex items-center p-1 m-1 md:p-0 md:m-0 ">
                  <AiOutlineCheckCircle className="mx-2" size={20} />
                  React
                </li>
                <li className="flex items-center p-1 m-1 md:p-0 md:m-0">
                  <AiOutlineCheckCircle className="mx-2" size={20} />
                  Redux
                </li>
              </ul>
            </div>
            <div className="flex space-x-4 justify-center m-6 p-2" >
              <a href={curr.live} target="_blank" rel="noopener noreferrer">
              <button className="p-2 flex items-center text-center justify-center transition-colors duration-150 rounded-lg focus:shadow-outline" id={mode?"button_dark":"button_light"}>
              Live Demo
            </button>
              </a>
              <a href={curr.github} target="_blank" rel="noopener noreferrer">
              <button className="p-2 flex items-center text-center justify-center transition-colors duration-150 rounded-lg focus:shadow-outline" id={mode?"button_dark":"button_light"}>
              GitHUb
            </button>
              </a>
           
            </div>
          </div>
        </div>
      </section>

          </div>
        )
      })}
     
    </div>
    </div>
  );
}
