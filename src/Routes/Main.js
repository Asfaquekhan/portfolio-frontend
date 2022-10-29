import React from 'react'
 import {SiTailwindcss} from 'react-icons/si'
import {IoLogoReact,IoLogoHtml5,IoLogoJavascript} from "react-icons/io5"
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import { Link } from 'react-router-dom'
import {SiRedux} from 'react-icons/si'


export default function Main(props) {
  return (
    <>
    <div className='flex max-w-[950px] h-screen mx-auto justify-between py-16'>
      <div className=' m-2'>
       <img src=".\Images\IMG_20221013_181332.jpg" alt="" width={240} className='rounded-full border-2 border-slate-900'/>

       <a href="https://github.com/Asfaquekhan">
      <button className='flex items-center my-8  hover:border-b-2 border-b-gray-900'><BsGithub className='mx-4' size={20}/>github</button>
      </a>
      

      <a href="https://www.linkedin.com/in/asfaque-khan-359b39186/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BEyfAlF%2B9RT2r9WAgMf2C4Q%3D%3D" className='text-center'><button className='flex items-center my-8  hover:underline'><BsLinkedin className='mx-4' size={20}/>Linkedin</button>
</a>
<div className='m-2'>
<Link to="/contact">
  
            <div className="py-2 text-center text-indigo-100 transition-colors duration-150 bg-slate-900 rounded-lg focus:shadow-outline hover:border-2 border-slate-900 hover:bg-blue-600">
             
              Hire me
            </div>
          </Link>
         
            </div>
      </div>
      <div className=' '>
        <h1 className='md:text-4xl text-xl mx-7 '> &lt; Hi! My name is Asfaque / &gt;</h1>
        <p className='py-3 mx-7'>Aspiring Frontend web devloaper</p>
        <ul className='mx-7'>
          <li className='flex items-center py-3'><IoLogoHtml5 className='mx-4' size={20}/> HTML</li>
          <li className='flex items-center py-3'> <SiTailwindcss className='mx-4' size={20}/>TAILWIND CSS</li>
          <li className='flex items-center py-3'><IoLogoJavascript className='mx-4 ' size={20}/>JAVASCRIPT</li>
          <li className='flex items-center py-3'> <IoLogoReact className='mx-4'size={20}/> REACT</li>
         <li className='flex items-center py-3' ><SiRedux className='mx-4'size={20}/>React-Redux</li>
        </ul>
       
      </div>
    </div>
    
    </>
  )
}
