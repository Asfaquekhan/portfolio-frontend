import React from 'react'
import data from './data'
export default function Joke() {
  
  const choose =Math.ceil(Math.random()*500);
  const jokedata=data[choose]
    
const move =()=>{
  
}
  return (
    <div onClick={move}>
        <h4>Come here for some jokes</h4>
    {jokedata.setup}
    <br />
    {jokedata.punchline}
    
    </div>
  )
}
