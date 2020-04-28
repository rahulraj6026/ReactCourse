import React from 'react'
import NavBar from './NavBar'
import MastHead from "./MastHead"
import "./styles.css"
import avataaars from "./assets/avataaars.svg"
import About from "./About"
import Contact from "./Contact"
import Footer from './Footer'
import Copyright from "./Copyright"
import Protfolio from './Protfolio'

const App = () => {
    return(
        <div>
            <NavBar />
            <MastHead src={avataaars}/>
            <Protfolio />
            <About />
            <Contact />
            <Footer />
            <Copyright title={'Copyright © Your Website 2020'}/>
        </div>
    )
}

export default App