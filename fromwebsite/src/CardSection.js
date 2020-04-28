import React from 'react'
import Card from "./Card"

const CardSection = () => {
    return(
        <section className="contact bg-success ">
            <div className="container ">
                <h2 className="text-white">
                We love new friends!
                </h2>
                <div className="row">
                    <div className="col-4">
                        <Card title="Title1" btnText="buttonText 1" Paragraph="Some quick example 1"/>
                    </div>

                    <div className="col-4">
                        <Card title="Title2" btnText="buttonText 2" Paragraph="Some quick example 2"/>
                    </div>

                    <div className="col-4">
                    <Card title="Title3" btnText="buttonText 3" Paragraph="Some quick example 3"/>
                    </div>
                </div>
            </div>
    </section>
    )
}

export default CardSection