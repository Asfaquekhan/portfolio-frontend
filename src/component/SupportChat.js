import React, {useState} from 'react'
import { useMode } from './Context/ThemeContext'
import SupportWindow from './SupportWindow'
function SupportChat(props) {
const mode = useMode()
const [show,setShow]=useState(false)
  return (
    <div className={mode?'fixed bottom-20 right-2 md:right-10 rounded-full bg-blue-600 text-white ease-in-out':'fixed  bottom-20 right-2 md:right-10 rounded-full bg-black text-white ease-in-out'}>
      <div className='flex'>
        <div className={show?"":"hidden"}>Chat with me</div>
      <img
            src=".\Images\me.png"
            alt=""
            width={50}
            className={`rounded-full border  border-slate-900 mx-auto items-center`}
            onMouseEnter={()=>setShow(true)}
            onMouseLeave={()=>setShow(false)}
          />
      </div>
     <SupportWindow/>
    </div>
  )
}

export default SupportChat
