import React,{useContext} from 'react'
import ThemeContext from "../Context/ThemeContext"
import AppTheme from "../Color"

const Header = () => {
    const context = useContext(ThemeContext)[0]    
    const Theme = AppTheme[context]
    const [Themes, SetThemes] = useContext(ThemeContext)

    return(
        <div
            style={{
                backgroundColor: `${Theme.backgroundColor}`,
                height: "140px"
            }}
        >
            <h2 style={{
                color: `${Theme.Color}`,
                marginLeft: "40px",
                padding: "10px"
            }}> We are in header </h2>
            <button onClick={
                () => {
                    SetThemes(Themes === "Light"?"Dark":"Light")
                }
            }
            style = {{
                    backgroundColor: `${Theme.backgroundColor}`,
                    padding:"10px 150px",
                    fontSize: "20px",
                    color: "#D63031",
                    border: "2px solid #6ab04c",
                    marginLeft: "40px"
            }}
            > {Themes} 
            </button>
        </div>
    )
}

export default Header