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

  const SideNavStyle =
    "flex cursor-default items-center p-2 m-7 border-b-2 hover:rounded-full text-xl font-bold link link-underline link-underline-black ";
  const SideNavStyleActive =
    " flex cursor-default items-center p-2 m-7 border-b-2 rounded-full text-xl font-bold bg-white text-black ";
  const navbarStyleActiveDark =
    "cursor-default items-center text-xl font-bold  rounded-full   bg-blue-600 text-white";
  const navbarStyleLight =
    "flex items-center px-3 cursor-pointer mx-2 hover:rounded-full text-xl font-bold  link link-underline link-underline-black  ";

  const navbarStyleActiveLight =
    "cursor-default items-center text-xl font-bold  rounded-full bg-blue-600 text-white ";
  const navbarStyleDark =
    "flex items-center px-3 cursor-pointer mx-2 hover:rounded-full text-xl font-bold text-white link link-underline link-underline-black";

  return (
    <div
      id="navbar"
      className={
        !color
          ? "sticky top-0 flex h-14 max-w-screen mx-auto justify-between items-center z-40 backdrop-blur transition-colors duration-500 opacity-95 shadow-2xl p-5"
          : "sticky top-0 flex h-14 max-w-screen mx-auto justify-between items-center z-40 backdrop-blur transition-colors duration-500 opacity-95 shadow-xl p-5"
      }
    >
      <div
        id={mode ? "primary_dark" : "primary_light"}
        className="cursor-pointer"
      >
        <ul className="">
          <Link to="main" spy={true} smooth={true} offset={50} duration={500}>
          <img
            src=".\Images\me.webp"
            alt=""
            width={50}
            className="rounded-full border  border-slate-900 mx-auto items-center"
          />
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
              <BsSun className="mx-4 my-1" size={25} />
            ) : (
              <BsMoonStars className="mx-4 my-1" size={25} />
            )}
          </li>
          <Link
            to="main"
            offset={-100}
            duration={500}
            spy={true}
            smooth={true}
            className={mode ? navbarStyleDark : navbarStyleLight}
            activeClass={mode ? navbarStyleActiveLight : navbarStyleActiveDark}
           
            onClick={top}
          >
            <AiOutlineHome className="mx-2" size={25} />
            Home
          </Link>

          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className={mode ? navbarStyleDark : navbarStyleLight}
            activeClass={mode ? navbarStyleActiveLight : navbarStyleActiveDark}
           
          >
            <MdOutlineWorkOutline className="mx-2" size={25} /> Projects
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            className={mode ? navbarStyleDark : navbarStyleLight}
            activeClass={mode ? navbarStyleActiveLight : navbarStyleActiveDark}
          >
            <BiMessageDots className="mx-2" size={25} /> About
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className={mode ? navbarStyleDark : navbarStyleLight}
            activeClass={mode ? navbarStyleActiveLight : navbarStyleActiveDark}
           
          >
            <AiOutlineContacts className="mx-2" size={25} />
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
        <ul className="cursor-pointer space-y-16">
          <Link to="main">
            <p className="text-2xl my-8 mx-8 flex items-center ">
            <img
            src=".\Images\me.webp"
            alt=""
            width={50}
            className="rounded-full border  border-slate-900 mx-auto items-center"
          />
          </p>
          </Link>
          <Link
            to="main"
            spy={true}
            smooth={true}
            offset={-1000}
            duration={500}
            activeClass={SideNavStyleActive}
            className={SideNavStyle}
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
            activeClass={SideNavStyleActive}
            className={SideNavStyle}
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
            activeClass={SideNavStyleActive}
            className={SideNavStyle}
          >
            <BiMessageDots className="mx-2" size={20} /> About
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass={SideNavStyleActive}
            className={SideNavStyle}
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
