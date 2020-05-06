import React, {useState, useEffect} from 'react';
import { Container, Row, Col }  from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Axios from 'axios'//to make a request 
import CardApp from './CardApp'

function App() {
  const [details, setdetails] = useState({})

  const fetchData = async() => {
    const { data } = await Axios.get('https://randomuser.me/api/') //destructure
    
    const details = data.results[0]

    setdetails(details)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Container fluid className="p-4 bg-primary App">
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <CardApp details={details}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
