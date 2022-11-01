import { useContext } from "react";
import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();
export const FunthemeContext = React.createContext();

export function useMode() {
  return useContext(ThemeContext);
}

export function useFun(){
    return useContext(FunthemeContext)
}

const StateContext = ({ children }) => {
  const [mode, setmode] = useState(false);
  const theme = () => {
    setmode(!mode);
  };
  return (
    <ThemeContext.Provider value={mode}>
        <FunthemeContext.Provider value={theme}>
        {children}
        </FunthemeContext.Provider>
        </ThemeContext.Provider>
  );
};
export default StateContext;
