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
  }
  const [color,setcolor]=useState(false)
  const changenav=()=>{
    if(window.scrollY>=70){
      setcolor(true)
       }
       else{
         setcolor(false)
       }
  }
 const tounchnav=()=>{
   console.log("hello")
 }
    window.addEventListener("scroll",changenav)

    window.addEventListener("touchstart",tounchnav)
  return (
    <div className="sticky top-0 flex h-12 max-w-screen mx-auto justify-between items-center z-50 backdrop-blur transition-colors duration-500 opacity-95" style={color?{backgroundColor:"black",color:"white"}:{color:"black"}} >
      <div >
        <ul className="flex mx-4">
      <Link to="/">
        <li className="text-2xl">Home </li>
        </Link>
      
      
      </ul>
      </div>
      <nav>
        <ul className="hidden md:flex text-lg">
        <Link to="/about">
            <li className="flex items-center px-5 mx-4 hover:underline">
              {" "}
              <BiMessageDots className="mx-2" /> About
            </li>
          </Link>
        <Link to="/contact">
            <li className="flex items-center px-5 mx-4 hover:underline">
              <AiOutlineContacts className="mx-2" />
              Contact
            </li>
          </Link>
          
            <li className="flex items-center px-5 mx-4 bg-slate-900 text-white rounded py-0">
            <BsDownload className="mx-2"/>
             <a href="https://drive.google.com/u/0/uc?id=1FjiPUuhKStIUTXyHPdL-1pwM8hKwwkIi&export=download">Resume</a>
            </li>
          
         
          
         
        </ul>
      </nav>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-[-100%]" : "md:hidden fixed left-0 top-0 w-[60%] h-screen text-white bg-slate-900 ease-in-out duration-500"
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
