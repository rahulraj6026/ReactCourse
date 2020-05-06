import React from 'react'
import { Card, CardBody, CardTitle, CardText}  from 'reactstrap'
import { FaMailBulk, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const CardApp = ({details}) => {
    return(
        <Card>
            <CardBody>
            <img 
                height="150" width="150" className="rounded-circle img-thumbnail border-danger"
                src={details.picture?.large}
                alt="img"
            />
            <span 
                className="pl-5" 
                style={{textTransform:"uppercase"}}>
                    {details.gender}
            </span>
            <CardTitle className="text-primary" style={{display:"inline-block"}}>
                <h1>
                    <span className="pr-2">{details.name?.title}</span>
                    <span className="pr-1">{details.name?.first }</span>
                    <span>{details.name?.last}</span>
                </h1>
            </CardTitle>
            <CardText>
                <ul style={{listStyleType:"none"}}>
                    <li>
                        <ul>
                            <FaMapMarkedAlt />
                            <span className="pl-2">{details.location?.city}</span>
                        </ul>
                    </li>

                    <li>
                        <ul>
                            <FaPhone />
                            <span className="pl-2">{details.phone}</span>
                        </ul>
                    </li>

                    <li>
                        <ul>
                            <FaMailBulk />
                            <span className="pl-2">{details.email}</span>
                        </ul>
                    </li>
                </ul>
            </CardText>
            </CardBody>
        </Card>
    )
}

export default CardApp