import React from 'react'

import {IoLogoReact,IoLogoHtml5,IoLogoJavascript,IoLogoCss3} from "react-icons/io5"

export default function Main(props) {
  return (
    <>
    <div className='flex max-w-[900px] w-full h-screen mx-auto py-6'>
      <div>
       <img src=".\Images\IMG_20221013_181332.jpg" alt="" width={240} className='rounded-full'/>
      </div>
      <div className='py-8 px-8'>
        <h1 className='md:text-4xl sm:text-2xl'>Hi! My name is Asfaque Khan</h1>
        <p className='py-3'>Aspiring Frontend web devloaper</p>
        <ul>
          <li className='flex items-center py-3'><IoLogoHtml5 className='mx-4' size={20}/> HTML</li>
          <li className='flex items-center py-3'> <IoLogoCss3 className='mx-4' size={20}/> CSS & TAILWIND CSS</li>
          <li className='flex items-center py-3'><IoLogoJavascript className='mx-4 ' size={20}/>JAVASCRIPT</li>
          <li className='flex items-center py-3'> <IoLogoReact className='mx-4'size={20}/> REACT</li>
        </ul>
      </div>
    </div>
    </>
  )
}
