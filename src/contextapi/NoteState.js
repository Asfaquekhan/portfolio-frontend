import React, { useState } from "react";
import notecontext from "./NoteContext";

const NoteState =(props)=>{
     const state ={
        "name":"html",
        "class":"6a"
     }
     const [mode,setmode]=useState("light");
 const toggle=()=>{
  if(mode ==="light"){
    setmode("dark")
  }
  else{
    setmode("light")
  }
 }
    return(
        <notecontext.Provider value={{state,toggle}}>
{props.children}
        </notecontext.Provider>
    )
}

export default NoteState;