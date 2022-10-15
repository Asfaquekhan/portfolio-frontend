import React from 'react'
import '../filesCss/footer.css'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
export default function Footer() {
  return (
    <div className='logo'>
        <a href="https://github.com/Asfaquekhan">
      <p><BsGithub className='icon'/></p>
      </a>
      

      <a href="https://www.linkedin.com/in/asfaque-khan-359b39186/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BEyfAlF%2B9RT2r9WAgMf2C4Q%3D%3D"><p><BsLinkedin className='icon'/></p>
</a>
     
      <a href=""><p><AiOutlineMail className='icon'/></p></a>
      
    </div>

  
  )
}
