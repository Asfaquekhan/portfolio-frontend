import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import { BiMessageDots } from "react-icons/bi";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsSun,BsMoonStars } from "react-icons/bs";
import {MdOutlineWorkOutline} from 'react-icons/md'
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

  const top=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }

  const mode =useMode()
  const theme =useFun()


  return (
    <div
      className={
        !color
          ? "sticky top-0 flex h-12 max-w-screen mx-auto justify-between items-center z-40 backdrop-blur transition-colors duration-500 opacity-95 shadow-2xl"
          : "sticky top-0 flex h-12 max-w-screen mx-auto justify-between items-center z-40 backdrop-blur transition-colors duration-500 opacity-95 shadow-xl"
      } 
    >
      <div>
        <ul className="flex mx-4">
          <li><img src="https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/4a14e7b2de7f6eaf5a6c98cb8c00b8de.png" alt="" width={30} className='rounded-full mx-4'/></li>
          <Link to="main" spy={true} smooth={true} offset={50} duration={500}>
            <li className="text-2xl">&lt;A.K&gt;</li>
          </Link>
          
        </ul>
      </div>
      <nav>
        <ul className="hidden md:flex text-lg">
        
        <li className=" mx-3 border rounded-full" onClick={theme}>{mode?<BsSun className="mx-4 my-1" size={20}/>:<BsMoonStars className="mx-4 my-1" size={20}/>}</li>
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
      <button className="md:hidden mx-3 border rounded-full" onClick={theme}>{mode?<BsSun className="mx-4 my-1" size={20}/>:<BsMoonStars className="mx-4 my-1" size={20}/>}</button>
      
      <div onClick={handleNav} className="block md:hidden">
     
        {!nav ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
      
      </div>
      <div
        className={
          !nav
            ? "fixed left-[-100%] top-0 w-[60%] min-h-screen text-white bg-slate-900 ease-in-out duration-500"
            : "md:hidden fixed left-0 top-0 w-[60%] min-h-screen text-white bg-slate-900 ease-in-out duration-500"
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
