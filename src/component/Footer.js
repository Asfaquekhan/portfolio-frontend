import React from "react";
import { BsLinkedin, BsGithub, BsCodeSlash } from "react-icons/bs";
import { Link } from "react-scroll";

import { useMode } from "./Context/ThemeContext";
export default function Footer() {
  const mode = useMode();
  return (
    <footer class="p-4  sm:p-6 ">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0 flex ">
          <span id={mode ? "second_dark" : "second_light"}>
            <BsCodeSlash className="mr-3" size={35} />
          </span>
          <span class=" text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Toggle
            </h2>
            <ul class="text-gray-600 dark:text-gray-400 cursor-pointer">
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <li class="mb-4 hover:underline">Projects</li>
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li className="hover:underline">About</li>
              </Link>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Links
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <a
                  href="https://github.com/Asfaquekhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:underline flex items-center "
                >
                  {" "}
                  <BsGithub className="mr-3" />
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/asfaque-khan-359b39186/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BEyfAlF%2B9RT2r9WAgMf2C4Q%3D%3D"
                  class="hover:underline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin className="mr-3" />
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Resume
            </h2>
            <ul class="text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <a href="/" class="hover:underline">
                  Download
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="text-center">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022 All Rights Reserved
          <span className="ml-3">By Asfaque khan</span>
        </span>
      </div>
    </footer>
  );
}
