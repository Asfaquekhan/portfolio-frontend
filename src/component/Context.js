import React, { createContext } from "react"
const theme ={
    dark:{
          color: 'dark',
          
    },
    light:{
          color: "white"
    }
}
const ThemeContext=createContext(theme.dark)
export default ThemeContext;