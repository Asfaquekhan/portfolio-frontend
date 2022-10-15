import React from 'react'

import '../filesCss/main.css'
export default function Main(props) {
  return (
    <>
    <div className='main'>
      <h2>Hi,I'm Asfaque </h2>
      <p>Welcome to my website!</p>
     
      <div>
        <ul className='resume'>
          <li > <img src=".\Images\resume.png" alt="" width={20}/> Resume</li>
         
        </ul>
      </div>
    </div>
    </>
  )
}
