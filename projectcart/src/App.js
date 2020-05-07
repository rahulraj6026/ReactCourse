import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.min.css'
import './App.css';
import { ToastContainer ,toast } from 'react-toastify';
import BuyPage from './Components/BuyPage'
import Cart from './Components/Cart';
import { Container, Row, Col }  from 'reactstrap'


function App() {
  const [cartItem, setcartItem] = useState([])

  //Method to add a item in the card
  const addInCart = (item) => {
    const getaddStatus = cartItem.findIndex( (array) => {
      return array.id === item.id
    })

    if(getaddStatus !== -1){ //item is already in cart
      toast("Item Already in cart!",{
        type: "error"
      })
    }
    else
      setcartItem([...cartItem, item]);//if not there set the item to cart
  }

  //Method to buy a product
  const buyNow = () => {
    toast("Purchase Completed",{
      type: "success"
    })
    setcartItem([])
  }

  //Method to remove selected item from the cart
  const removeItem = (item) => {
    setcartItem(cartItem.filter( (array) => {
      return array.id !== item.id 
    }))
  }

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md="8">
          <BuyPage addInCart={addInCart} />
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
