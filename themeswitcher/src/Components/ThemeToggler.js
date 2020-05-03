import React, {useContext} from 'react'
import ThemeContext from "../Context/ThemeContext"

const ThemeToggler = () => {
    const [Theme, SetTheme] = useContext(ThemeContext)
    return(
        <div onClick={ () => {
            SetTheme(Theme === "light"?"dark":"light")
        }}>
            <span>{Theme === "light"?"dark":"light"}</span>
        </div>
    )
}

export default ThemeToggler