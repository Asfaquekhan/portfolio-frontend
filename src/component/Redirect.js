import React, { useEffect, useState } from 'react'
import { AiOutlineArrowUp } from "react-icons/ai"
export default function Redirect() {
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
    <div className='fixed bottom-4 right-4 text-white bg-slate-900 rounded-full'>
        {backtotop &&(<button className=' py-1 px-1' onClick={scrollup}><AiOutlineArrowUp/></button>)}
    </div>
  )
}
