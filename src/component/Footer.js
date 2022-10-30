import React from "react";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <div>
      <hr />
      <div className=" w-full grid grid-cols-3">
        <div className="text-center">
          <p className="m-2">logo</p>
          <p className="m-2">Asfaque khan</p>
        </div>
        <div className="justify-center text-center md:flex">
      
          <p className="text-sm m-2">Home</p>
          <p className="text-sm m-2">Project</p>
          <p className="text-sm m-2">About</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center">
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
      <p className="text-center">&#169;copyright 2022 by Asfaque khan</p>
    </div>
  );
}
