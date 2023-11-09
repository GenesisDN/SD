import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./Forms.css"


const Forms = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    place: ''
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSearch = () => {
    fetch('URL_DEL_BACKEND', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        // Maneja la respuesta del backend (data) como sea necesario
        console.log(data);
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className='form_container'>
        <Card className="text-center">
            <Card.Header className='title_search'>Search Event</Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formEventName">
                      <Form.Label column sm="2">Name</Form.Label>
                      <Col sm="10"><Form.Control type="text" placeholder="Name" value={formData.name} onChange={handleInputChange}/></Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formEventData">
                      <Form.Label column sm="2">Data</Form.Label>
                      <Col sm="10"><Form.Control type="date" placeholder="10/20/30" value={formData.date} onChange={handleInputChange}/></Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="forEventLocation">
                      <Form.Label column sm="2">Location</Form.Label>
                      <Col sm="10"><Form.Control type="text" placeholder="Ex: Funchal.." value={formData.place} onChange={handleInputChange}/></Col>
                    </Form.Group>
                  </Form>
                    <Button variant="primary"className='search_button'>Search</Button>
                </Card.Body>
        </Card>
    </div>
  )
}

export default Forms
