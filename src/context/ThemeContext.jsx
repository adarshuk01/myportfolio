import { createContext, useContext, useState } from "react";

export const ThemeContext=createContext()

export const ThemeProvider=({children})=>{

    const [theme,settheme]=useState('light')

    const toggleTheme=()=>{

        settheme((prev)=>prev=='light'?'dark':'light')

    }

    return(
        <ThemeContext.Provider value={{toggleTheme,theme}}>{children}</ThemeContext.Provider>
    )
}