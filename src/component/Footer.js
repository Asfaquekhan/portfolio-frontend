import React from "react";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { useMode } from "./Context/ThemeContext";
export default function Footer() {
  const mode=useMode()
  return (
    <div>
      
      <div className=" w-full grid grid-cols-2 justify-between">
        <div className="text-center">
          <p className="m-2">logo</p>
        
        </div>
       
        <div className="text-center">
          <div className="flex justify-center"id={mode?"icons_dark":"primar_light"}>
            <span className="m-2">
              <a
                href="https://www.linkedin.com/in/asfaque-khan-359b39186/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BEyfAlF%2B9RT2r9WAgMf2C4Q%3D%3D"
                className="flex items-center "
              >
                <BsGithub className="" size={20} />
              </a>
            </span>
            <span className="m-2">
              <a
                href="https://github.com/Asfaquekhan"
                className="flex items-center"
              >
                <BsLinkedin className="" size={20} />
              </a>
            </span>
            <span className="m-2">
              <AiOutlineMail size={20} />
            </span>
            <span className="m-2">
              <BsWhatsapp size={20} />
            </span>
          </div>
         
        </div>
      </div>
      <p className="text-center m-2 p-2"id={mode?"second_dark":"primary_light"}>&#169;copyright 2022 by Asfaque khan</p>
    </div>
  );
}
