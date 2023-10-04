import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import { BiMessageDots } from "react-icons/bi";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { MdOutlineWorkOutline } from "react-icons/md";
import { useState } from "react";

import { useFun, useMode } from "./Context/ThemeContext";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const [color, setcolor] = useState(false);
  const changenav = () => {
    if (window.scrollY >= 70) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };
  const tounchnav = () => {
    setNav(false);
  };
  window.addEventListener("scroll", changenav);

  window.addEventListener("touchcancel", tounchnav);

  const top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const mode = useMode();
  const theme = useFun();
  

  return (
    <div
      id="navbar"
      className={
        !color
          ? "sticky top-0 flex h-12 max-w-screen mx-auto justify-between items-center z-40 backdrop-blur transition-colors duration-500 opacity-95 shadow-2xl p-3"
          : "sticky top-0 flex h-12 max-w-screen mx-auto justify-between items-center z-40 backdrop-blur transition-colors duration-500 opacity-95 shadow-xl p-3"
      }
    >
      <div
        id={mode ? "primary_dark" : "primary_light"}
        className="cursor-pointer"
      >
        <ul className="flex">
          <Link to="main" spy={true} smooth={true} offset={50} duration={500}>
            <li className="text-2xl">&lt;A.K&gt;</li>
          </Link>
        </ul>
      </div>
      <nav>
        <ul className="hidden md:flex text-lg">
          <li
            className=" mx-3 cursor-pointer "
            id={mode ? "primary_dark" : "primary_light"}
            onClick={theme}
          >
            {mode ? (
              <BsSun className="mx-4 my-1" size={20} />
            ) : (
              <BsMoonStars className="mx-4 my-1" size={20} />
            )}
          </li>
          <Link
            to="main"
            offset={-100}
            duration={500}
            spy={true}
            smooth={true}
            className="flex items-center px-3 cursor-pointer mx-2 hover:rounded-full"
            id={mode ? "primaryn_dark" : "primaryn_light"}
            onClick={top}
          >
            <AiOutlineHome className="mx-2" />
            Home
          </Link>

          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <li
              className="flex items-center px-3 cursor-pointer mx-2 hover:rounded-full"
              id={mode ? "primaryn_dark" : "primaryn_light"}
            >
              <MdOutlineWorkOutline className="mx-2" size={20} /> Projects
            </li>
          </Link>
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
            <li
              className="flex items-center cursor-pointer px-3 mx-2 hover:rounded-full"
              id={mode ? "primaryn_dark" : "primaryn_light"}
            >
              <BiMessageDots className="mx-2" /> About
            </li>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="flex items-center px-3 cursor-pointer mx-2 hover:rounded-full "
            className="flex items-center px-3 cursor-pointer mx-2 hover:rounded-full"
              id={mode ? "primaryn_dark" : "primaryn_light"}
          >
          
              <AiOutlineContacts className="mx-2" />
              Contact
           
          </Link>
        </ul>
      </nav>
      <button
        className="md:hidden mx-3 cursor-pointer"
        id={mode ? "icons_dark" : "icon_light"}
        onClick={theme}
      >
        {mode ? (
          <BsSun className="mx-4 my-1" size={20} />
        ) : (
          <BsMoonStars className="mx-4 my-1" size={20} />
        )}
      </button>

      <div
        onClick={handleNav}
        className="block md:hidden"
        id={mode ? "icons_dark" : "prima_light"}
      >
        {!nav ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-[-100%] top-0 w-[60%] min-h-screen text-white bg-slate-900 ease-in-out duration-500"
            : "md:hidden fixed left-0 top-0 w-[60%] min-h-screen text-white bg-slate-900 ease-in-out duration-500"
        }
        id={mode ? "primary_dark" : "primarys_light"}
      >
        <ul className="cursor-pointer">
          <Link to="main">
            <p className="text-2xl my-8 mx-8 flex items-center ">
              {" "}
              &lt;A.K&gt;
            </p>
          </Link>
          <Link
            to="main"
            spy={true}
            smooth={true}
            offset={-1000}
            duration={500}
            activeClass="flex cursor-default items-center p-2 m-7 border-b-2 rounded-full text-lg bg-white text-black "
            className="flex cursor-default items-center p-2 m-7 border-b-2 hover:rounded-full  hover:text-lg hover:bg-white hover:text-black"
          >
            <AiOutlineHome className="mx-2" size={20} />
            Home
          </Link>
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            activeClass="flex cursor-default items-center p-2 m-7 border-b-2 rounded-full text-lg bg-white text-black "
            className="flex cursor-default items-center p-2 m-7 border-b-2 hover:rounded-full  hover:text-lg hover:bg-white hover:text-black"
          >
            <MdOutlineWorkOutline className="mx-2" size={20} />
            Projects
          </Link>

          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="flex cursor-default items-center p-2 m-7 border-b-2 rounded-full text-lg bg-white text-black "
            className="flex cursor-default items-center p-2 m-7 border-b-2 hover:rounded-full  hover:text-lg hover:bg-white hover:text-black"
          >
            <BiMessageDots className="mx-2" size={20} /> About
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass=" flex cursor-default items-center p-2 m-7 border-b-2 rounded-full text-lg bg-white text-black "
            className="flex cursor-default items-center p-2 m-7 border-b-2 hover:border-b-0  hover:text-lg "
          >
            <AiOutlineContacts className="mx-2" size={20} />
            Contact
          </Link>
        </ul>
      </div>
      <div
        className={
          !nav
            ? "absolute"
            : "w-[40%] min-h-screen right-0 absolute top-11 md:hidden"
        }
        onClick={tounchnav}
      ></div>
    </div>
  );
}
