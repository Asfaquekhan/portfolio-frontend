import React, { createContext } from 'react'
import '../filesCss/navbar.css';
import {AiOutlineFundProjectionScreen} from "react-icons/ai"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineContacts} from "react-icons/ai"
import {BiMessageDots} from "react-icons/bi"
import {Link} from 'react-router-dom'
import { useState } from 'react';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext();

export default function Navbar(props) {
  const[darkTheme,setDarkTheme]=useState("light");

  const togglemode=()=>{
    if(darkTheme==="light"){
      setDarkTheme("dark")
    }
    else{
      setDarkTheme("light")
    }
  }
  
  return (
    <ThemeContext.Provider value={darkTheme}>
    <div className='header' id={darkTheme}>
      <Link to='/'>
       <p className='home' id={darkTheme}><AiOutlineHome className='icon'/>Home</p>
       </Link>
      <nav>
        <ul className="nav-menu">
          <Link to='/project'>
          <li id={darkTheme}><AiOutlineFundProjectionScreen className='icon'/>Projects</li>
          </Link>
          <Link to='/about'>
            <li id={darkTheme}> <BiMessageDots className='icon'/> About</li>
            </Link>
            <Link to='/contact'>
            <li id={darkTheme}><AiOutlineContacts className='icon'/>Contact</li>
            </Link> 
            <li id={darkTheme}><ReactSwitch onChange={togglemode} checked={darkTheme==="light"}/></li>
          
        </ul>
      </nav>
    </div>
    </ThemeContext.Provider>
  )
}
