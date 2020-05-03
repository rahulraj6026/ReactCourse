import React, {useContext} from 'react'
import ThemeContext from "../Context/ThemeContext"
import AppTheme from "../Colors"

const HeroSection = () => {
    const theme = useContext(ThemeContext)[0] //get theme value i.e. dark or light
    const currentTheme = AppTheme[theme] //get theme css based on whether theme is dark or light
    const [Theme, SetTheme] = useContext(ThemeContext)
    return(
        <div
            style={{
                padding: "1rem",
                backgroundColor:`${currentTheme.backgroundColor}`,
                color: `${currentTheme.textColor}`,
                textAlign: "center"
            }}
        >
            <h1>Hero Section</h1>
            <p>This is a Hero Section</p>
            <button
                onClick={
                    () => {
                        SetTheme(Theme === "light"?"dark":"light") 
                    }
                }
                style={{
                    backgroundColor: "#26ae60",
                    padding:"10px 150px",
                    fontSize: "20px",
                    color: "#fff",
                    border: `${currentTheme.border}`
                }}
            >Change Theme</button>
        </div>
    )
}

export default HeroSection