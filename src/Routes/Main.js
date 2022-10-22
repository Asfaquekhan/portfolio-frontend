import React from 'react'
 import {SiTailwindcss} from 'react-icons/si'
import {IoLogoReact,IoLogoHtml5,IoLogoJavascript} from "react-icons/io5"

export default function Main(props) {
  return (
    <>
    <div className='flex max-w-[900px] w-full h-screen mx-auto py-6'>
      <div>
       <img src=".\Images\IMG_20221013_181332.jpg" alt="" width={240} className='rounded-full'/>
       
      </div>
      <div className='py-8 px-8'>
        <h1 className='md:text-4xl text-xl font-bold'> &lt; Hi! My name is Asfaque Khan / &gt;</h1>
        <p className='py-3'>Aspiring Frontend web devloaper</p>
        <ul className=''>
          <li className='flex items-center py-3'><IoLogoHtml5 className='mx-4' size={20}/> HTML</li>
          <li className='flex items-center py-3'> <SiTailwindcss className='mx-4' size={20}/>TAILWIND CSS</li>
          <li className='flex items-center py-3'><IoLogoJavascript className='mx-4 ' size={20}/>JAVASCRIPT</li>
          <li className='flex items-center py-3'> <IoLogoReact className='mx-4'size={20}/> REACT</li>
        </ul>
      </div>
    </div>
    </>
  )
}
