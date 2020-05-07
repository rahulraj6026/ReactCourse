import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Container, Col, Row }  from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { commerce, random } from 'faker'
import CardItem from "./CartItem"

const apiKey = ""

const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"


const BuyPage = ({ addInCart }) => {
   const [products, setproducts] = useState([])//to store all the added products
    
   //fetch all the photos from pixels by passing url and key for authorization
   const fetchPhotos = async () => {
       const { data } = await Axios.get(url, {
            headers: {
                'Authorization': `${apiKey}`  
            }
       })

        const { photos } = data

        const allProducts = photos.map( (photo) => ({
                smallImage: photo.src.medium,
                tinyImage : photo.src.tiny,
                productname: random.word(),
                productPrice : commerce.price(),
                id : random.uuid()
        }))
        setproducts(allProducts)
    } 


   useEffect(() => {
       fetchPhotos()
   }, [])

   return(
    <Container fluid>
        <h1 className="text-success text-center"> BUY PAGE </h1>
        <Row>
            {products.map( (product) =>(
                <Col md={4} key={product.id}>
                    <CardItem product={product} addInCart={addInCart} />
                </Col>
            ))}
        </Row>
    </Container>
   )
    
}

export default BuyPage
