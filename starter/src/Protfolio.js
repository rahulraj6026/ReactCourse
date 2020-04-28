import React from 'react'
import cabin from "./assets/cabin.png"
import cake from "./assets/cake.png"
import circus from "./assets/circus.png"
import game from "./assets/game.png"
import safe from "./assets/safe.png"
import submarine from "./assets/submarine.png"
import Prot from "./Prot"


const Protfolio = () => {
        return(
            <section classNameName="page-section portfolio" id="portfolio">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-5">
                            <Prot source={cabin}/>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <Prot source={cake}/>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <Prot source={circus}/>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                            <Prot source={game}/>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                            <Prot source={safe}/>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <Prot source={submarine}/>
                        </div>
                    </div>
                </div>
            </section>
        )
}   

export default Protfolio;