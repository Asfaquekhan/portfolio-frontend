import React from "react";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoReact, IoLogoHtml5, IoLogoJavascript } from "react-icons/io5";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { BsGithub, BsDownload } from "react-icons/bs";
import { Link } from "react-scroll";
import { SiRedux } from "react-icons/si";
import { MdWorkOutline } from "react-icons/md";
import {DiCss3} from 'react-icons/di'

export default function Main(props) {
  return (
    <>
      <div className="md:flex max-w-[950px]  mx-auto justify-between my-20">
        <div className="h-screen md:w-1/2 space-y-10 ">
          <h1 className="text-2xl m-3  ">Hi I'm Asfaque</h1>
          <p className="text-4xl m-3 flex">Frontend Web Devloper</p>
          <p className="my-10 m-3">
            i'm a self taught frontend web devloper with a passion for making beautiful, responsive web
            applications.
          </p>
          <div className="m-2
           p-2">
            <ul className="grid grid-cols-2">
              <li className="flex items-center p-2">
                <IoLogoHtml5 className="mr-2" size={20} />
                Html
              </li>
              <li className="flex items-center p-2">
                <DiCss3 className="mr-2" size={20} />Css
              </li>
              <li className="flex items-center p-2">
                {" "}
                <SiTailwindcss className="mr-2" size={20} />Tailwind
              </li>
              <li className="flex items-center p-2">
                <IoLogoJavascript className="mr-2 " size={20} />Javascript
              </li>
              <li className="flex items-center p-2">
                {" "}
                <IoLogoReact className="mr-2" size={20} />React
              </li>
              <li className="flex items-center p-2">
                <SiRedux className="mr-2" size={20} />Redux
              </li>
            </ul>
          </div>
         
          <div className="flex m-3 space-x-7 my-11">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <button className="p-2 flex items-center text-center justify-center text-indigo-100 transition-colors duration-150 bg-slate-900 rounded-lg focus:shadow-outline hover:border-2 border-slate-900 hover:bg-white hover:text-black">
                <MdWorkOutline size={20} className="mr-2" />
                Hire me
              </button>
            </Link>
            <button className="p-2 text-center justify-center text-indigo-100 transition-colors duration-150 bg-slate-900 rounded-lg focus:shadow-outline hover:border-2 border-slate-900 hover:bg-white hover:text-black">
              <a
                href="https://drive.google.com/u/0/uc?id=1FjiPUuhKStIUTXyHPdL-1pwM8hKwwkIi&export=download"
                className="flex items-center "
              >
                <BsDownload className="mr-2" size={20} /> Resume
              </a>
            </button>
          </div>
        </div>
        <div className="md:my-16 ">
          
          <img
            src=".\Images\IMG_20221013_181332.jpg"
            alt=""
            width={240}
            className="rounded-full border-2 border-slate-900 mx-auto"
          />
 <div className="flex my-5 space-x-7 justify-center">
            <a href="https://github.com/Asfaquekhan">
              <BsGithub className="" size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/asfaque-khan-359b39186/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BEyfAlF%2B9RT2r9WAgMf2C4Q%3D%3D"
              className="text-center"
            >
              <BsLinkedin className="" size={20} />
            </a>
            
            <span className="">
              <BsWhatsapp size={20} />
            </span>
          </div>
          
        </div>
      </div>
    </>
  );
}
