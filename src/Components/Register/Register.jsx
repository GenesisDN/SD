import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Register.css'

const Register = () => {
    const [registerData, setRegisterData] = useState({
        email: '',
    })
    const handleInputChange = (e) => {
        const  {name, value} = e.target;
        setRegisterData({
            ...registerData
            [name] = value
        });
    }
    const handleRegister = () => {
        fetch('URL_DEL_BACKEND', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerData),
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data);
        })
        .catch(err => console.error(err));
    }

  return (
    <div className='container_register'>
      <Card className="text-center">
            <Card.Header className='title_register'>Register in a event</Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group as={Row} className="mb-3" controlId="forEventLocation">
                      <Form.Label column sm="2">Email</Form.Label>
                      <Col sm="10"><Form.Control type="email" placeholder="email@gmail.com" value={registerData.email} onChange={handleInputChange}/></Col>
                    </Form.Group>
                  </Form>
                  <Link to="/search">
                    <Button variant="primary"className='register_button'>Register</Button>
                  </Link>
                </Card.Body>
        </Card>
    </div>
  )
}

export default Register
