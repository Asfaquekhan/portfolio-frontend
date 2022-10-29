import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import { BiMessageDots } from "react-icons/bi";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {MdOutlineWorkOutline} from 'react-icons/md'
import { useState } from "react";

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

  const top=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }

  return (
    <div
      className={
        !color
          ? "sticky top-0 flex h-12 max-w-screen mx-auto justify-between items-center z-50 backdrop-blur transition-colors duration-500 opacity-95 shadow-2xl"
          : "sticky top-0 flex h-12 max-w-screen mx-auto justify-between items-center z-50 backdrop-blur transition-colors duration-500 opacity-95 shadow-xl"
      }
    >
      <div>
        <ul className="flex mx-4">
          <Link to="main" spy={true} smooth={true} offset={50} duration={500}>
            <li className="text-2xl">&#123; A.K &#125;</li>
          </Link>
        </ul>
      </div>
      <nav>
        <ul className="hidden md:flex text-lg">
            <li className="flex items-center px-3  mx-2  hover:bg-slate-900 hover:text-white hover:rounded-full" onClick={top}>
              <AiOutlineHome className="mx-2" />
              Home
            </li>
         
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <li className="flex items-center px-3  mx-2 hover:bg-slate-900 hover:text-white hover:rounded-full">
             <MdOutlineWorkOutline className="mx-2" size={20}/> Projects
            </li>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <li className="flex items-center px-3 mx-2 hover:bg-slate-900 hover:text-white hover:rounded-full">
              <BiMessageDots className="mx-2" /> About
            </li>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <li className="flex items-center px-3 mx-2  hover:bg-slate-900 hover:text-white hover:rounded-full">
              <AiOutlineContacts className="mx-2" />
              Contact
            </li>
          </Link>
        </ul>
      </nav>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-[-100%] min-h-screen ease-in-out duration-500"
            : "md:hidden fixed left-0 top-0 w-[60%] h-screen text-white bg-slate-900 ease-in-out duration-500"
        }
      >
        <ul className="">
          <Link to="/">
            <p className="text-2xl my-8 mx-8 flex items-center">
              {" "}
              <AiOutlineHome className="mx-2" />
              &#123; A.K &#125;
            </p>
          </Link>
          <li className="flex items-center p-2 m-2 hover:bg-slate-900 hover:text-white hover:rounded-full" onClick={top}>
              <AiOutlineHome className="mx-2" size={20}/>
              Home
            </li>
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <li className="flex items-center p-2 m-2 border-b border-gray-900 "><MdOutlineWorkOutline className="mx-2" size={20}/>
              Projects
            </li>
          </Link>
          
          <Link  to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            <li className="flex items-center p-2 m-2 border-b border-gray-900 ">
              {" "}
              <BiMessageDots className="mx-2" size={20} /> About
            </li>
          </Link>
          <Link to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            <li className="flex items-center p-2 m-2 border-b border-gray-900 ">
              <AiOutlineContacts className="mx-2" size={20}/>
              Contact
            </li>
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
