import React from 'react'
import { SiTailwindcss } from "react-icons/si";
import { IoLogoReact, IoLogoHtml5, IoLogoJavascript } from "react-icons/io5";

import {  BsDownload } from "react-icons/bs";
import { Link } from "react-scroll";
import { SiRedux } from "react-icons/si";
import { MdWorkOutline } from "react-icons/md";
import { DiCss3 } from "react-icons/di";
import { useMode } from '../Context/ThemeContext';
function Intro() {
    const mode = useMode();
  return (
    <div
          className="mb-28 md:w-1/2 space-y-10 "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1
            className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white "
            id={mode ? "primary_dark" : "primary_light"}
          >
            Hi <span className="">👋</span> I'm Asfaque
          </h1>
          <p
            className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white "
            id={mode ? "primary_dark" : "primary_light"}
          >
            <span class="text-blue-600 dark:text-blue-500">
              Frontend Web Devloper
            </span>
          </p>
          <p
            className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
            id={mode ? "second_dark" : "second_light"}
          >
            Frontend web developer with a passion for creating responsive and
            high-performance websites. In a digital world where user experience
            is paramount, I specialize in crafting seamless and visually
            engaging interfaces that adapt flawlessly to any device. With a keen
            eye for design and a dedication to optimizing performance, I'm here
            to transform your online vision into a reality.
          </p>
          <div
            className="m-3
           "
            id={mode ? "second_dark" : "second_light"}
          >
            <ul className="grid grid-cols-2 gap-5 ">
              <li className="flex items-center text-xl font-bold ">
                <IoLogoHtml5 className="mr-2" size={20} />
                Html
              </li>
              <li className="flex items-center text-xl font-bold ">
                <DiCss3 className="mr-2" size={20} />
                Css
              </li>
              <li className="flex items-center text-xl font-bold ">
                {" "}
                <SiTailwindcss className="mr-2" size={20} />
                Tailwind
              </li>
              <li className="flex items-center text-xl font-bold ">
                <IoLogoJavascript className="mr-2" size={20} />
                Javascript
              </li>
              <li className="flex items-center text-xl font-bold">
                {" "}
                <IoLogoReact className="mr-2" size={20} />
                React
              </li>
              <li className="flex items-center text-xl font-bold">
                <SiRedux className="mr-2" size={20} />
                Redux
              </li>
            </ul>
          </div>

          <div className="flex m-3 space-x-7 my-11 ">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <button
                className="p-2 flex items-center text-center justify-center transition-colors duration-150 rounded-lg focus:shadow-outline"
                id={mode ? "button_dark" : "button_light"}
              >
                <MdWorkOutline size={20} className="mr-2" />
                Hire me
              </button>
            </Link>
            <button
              className="p-2 text-center justify-center transition-colors duration-150 rounded-lg focus:shadow-outline  "
              id={mode ? "button_dark" : "button_light"}
            >
              <a
                href="https://drive.google.com/u/0/uc?id=1FjiPUuhKStIUTXyHPdL-1pwM8hKwwkIi&export=download"
                className="flex items-center "
              >
                <BsDownload className="mr-2" size={20} /> Resume
              </a>
            </button>
          </div>
        </div>
  )
}

export default Intro
