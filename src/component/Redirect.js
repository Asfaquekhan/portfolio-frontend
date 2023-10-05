import React, { useEffect, useState } from 'react'
import { AiOutlineArrowUp } from "react-icons/ai"
import { useMode } from './Context/ThemeContext';
export default function Redirect() {
   const mode =useMode()
    const[backtotop,setbacktotop]=useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY >80){
                setbacktotop(true)
            }
            else{
                setbacktotop(false);
            }
        })
    },[])
    const scrollup=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
  return (
    <div className={mode?'fixed bottom-4 right-4 rounded-full bg-blue-600 text-white ease-in-out md:right-12':'fixed bottom-4 right-4 rounded-full bg-black text-white ease-in-out md:right-12'}>
        {backtotop &&(<button className=' py-2 px-2' onClick={scrollup}><AiOutlineArrowUp size={20}/></button>)}
    </div>
  )
}
