
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineContacts} from "react-icons/ai"
import {BiMessageDots} from "react-icons/bi"
import {Link} from 'react-router-dom'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { useState } from "react"


export default function Navbar(props) {
 
  const[nav,setNav]=useState(false)
  const handleNav=()=>{
    setNav(!nav)
  }
  return (
    
    <div className="flex py-3 h-24 max-w-[1240px] mx-auto justify-between items-center" >
      <Link to='/'>
       <p className="text-2xl"><span></span>Home</p>
       </Link>
       
      <nav >
        <ul className="hidden md:flex text-xl" >
          <Link to="/">
            <li className="flex items-center mx-5"><AiOutlineHome className="mx-2"/>Home</li>
            </Link>
            <Link to="/about">
            <li className="flex items-center mx-5"> <BiMessageDots className="mx-2"/> About</li>
            </Link>
            <li className="flex items-center mx-5"><AiOutlineContacts className="mx-2" />Contact</li>
             
        </ul>
      </nav>  
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <div  className={!nav ? "fixed left-0 top-0 w-[60%] text-black bg-white h-full ease-in-out duration-500" : "fixed left-[-100%]"}>
      <Link to='/'>
       <p className="text-2xl">Home</p>
       </Link>
      <ul className="">
            <Link to='/'>
            <li className="flex items-center py-3 border-b border-gray-900"><AiOutlineHome className="mx-2"/>Home</li>
            </Link>
            <Link to='/about'>
            <li className="flex items-center py-3 border-b border-gray-900"> <BiMessageDots className="mx-2"/> About</li>
            </Link>
            <li className="flex items-center py-3 border-b border-gray-900"><AiOutlineContacts className="mx-2" />Contact</li>
            </ul>
      </div>
  </div>
    
  )
}
