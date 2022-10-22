import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import { BiMessageDots } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {BsDownload} from 'react-icons/bs'
import { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex py-3 h-20 max-w-[1240px] mx-auto justify-between items-center">
      <Link to="/">
        <p className="text-2xl px-10">Home</p>
      </Link>

      <nav>
        <ul className="hidden md:flex text-xl">
          
            <li className="flex items-center px-10 bg-blue-500 rounded hover:bg-white transition-all">
            <BsDownload className="mx-2"/>
             <a href="https://drive.google.com/u/0/uc?id=1FjiPUuhKStIUTXyHPdL-1pwM8hKwwkIi&export=download">Resume</a>
            </li>
          
          <Link to="/about">
            <li className="flex items-center px-10">
              {" "}
              <BiMessageDots className="mx-2" /> About
            </li>
          </Link>
          <Link to="/contact">
            <li className="flex items-center px-10">
              <AiOutlineContacts className="mx-2" />
              Contact
            </li>
          </Link>
         
        </ul>
      </nav>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-[-100%]" : "md:hidden fixed left-0 top-0 w-[40%] text-black bg-white h-full ease-in-out duration-500 opacity-90"
        }
      >
       
        <ul className="">
        <Link to="/">
        <p className="text-2xl my-8 mx-8 flex items-center"> <AiOutlineHome className="mx-2" />Home</p>
      </Link>
            <li className="flex items-center py-3 border-b border-gray-900 my-3 mx-4">
             <BsDownload className="mx-2"/>
              Resume
            </li>
          <Link to="/about">
            <li className="flex items-center py-3 border-b border-gray-900 my-3 mx-4">
              {" "}
              <BiMessageDots className="mx-2" /> About
            </li>
          </Link>
          <Link to="/contact">
            <li className="flex items-center py-3 border-b border-gray-900 my-3 mx-4">
              <AiOutlineContacts className="mx-2" />
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
