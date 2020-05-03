import React, {useState} from 'react'
import Header from './Components/Header'
import ThemeContext from "./Context/ThemeContext"
import AppTheme from "./Color"

const App = () => {
  const themeHook = useState("Light")
  const Theme = AppTheme[themeHook[0]]
  return(
    <div style = {{
      color: `${Theme.Color}`  
    }}>
      <h1 > Changing the theme of the page to {themeHook}.</h1>
      <ThemeContext.Provider value={themeHook}>
          <Header />
      </ThemeContext.Provider>
    </div>
  )
}

export default App