import React from 'react'
 import {SiTailwindcss} from 'react-icons/si'
import {IoLogoReact,IoLogoHtml5,IoLogoJavascript} from "react-icons/io5"
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import { Link } from 'react-router-dom'

import Project from './Project'
import About from './About'
import Contact from './Contact'

export default function Main(props) {
  return (
    <>
    <div className='flex max-w-[950px] w-full max-h-fit mx-auto py-6'>
      <div>
       <img src=".\Images\IMG_20221013_181332.jpg" alt="" width={240} className='rounded-full'/>

       <a href="https://github.com/Asfaquekhan">
      <p className='flex items-center my-8 hover:underline'><BsGithub className='mx-4' size={20}/>github</p>
      </a>
      

      <a href="https://www.linkedin.com/in/asfaque-khan-359b39186/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BEyfAlF%2B9RT2r9WAgMf2C4Q%3D%3D" className='text-center'><p className='flex items-center my-8 hover:underline'><BsLinkedin className='mx-4' size={20}/>Linkedin</p>
</a>
<Link to="/contact">
            <p className="text-center bg-slate-900 text-white rounded px-5 py-1">
             
              Hire me
            </p>
          </Link>
       
      </div>
      <div className='py-8 px-8'>
        <h1 className='md:text-4xl text-xl '> &lt; Hi! My name is Asfaque Khan / &gt;</h1>
        <p className='py-3'>Aspiring Frontend web devloaper</p>
        <ul className=''>
          <li className='flex items-center py-3'><IoLogoHtml5 className='mx-4' size={20}/> HTML</li>
          <li className='flex items-center py-3'> <SiTailwindcss className='mx-4' size={20}/>TAILWIND CSS</li>
          <li className='flex items-center py-3'><IoLogoJavascript className='mx-4 ' size={20}/>JAVASCRIPT</li>
          <li className='flex items-center py-3'> <IoLogoReact className='mx-4'size={20}/> REACT</li>
        </ul>
      </div>
    </div>
    <Project/>
    <About/>
    <Contact/>
    </>
  )
}
