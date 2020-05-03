import {createContext} from 'react'

const ThemeContext = createContext(["light", () => {}])

export default ThemeContext
//creating a context for theme with default value of light and a 
//call back function