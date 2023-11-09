import React, { useState, useEffect } from 'react';
import './Events.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import localImage from '../Assets/location.png';
import dataImage from '../Assets/data.png';

const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('URL_DEL_BACKEND')
            .then(response => response.json())
            .then(data => setEvents(data))
            .catch(error => console.error('Error:', error));
    }, []);

  return (
    <div className='container'>
        {events.map(event => (
            <Card key={event.id} className='card_container'>
                <Card.Header className='title_event'>{event.name}</Card.Header>
                <Card.Body>
                    <Card.Text className='subtitle'>
                        <Card.Img variant="left" src={localImage} className='images' />
                        {event.place}
                    </Card.Text>
                    <Card.Text className='subtitle'>
                        <Card.Img variant="left" src={dataImage} className='images' />
                        {event.date}
                    </Card.Text>
                    <Button variant="primary">Register</Button>
                </Card.Body>
            </Card>
        ))}
    </div>
  )
}

export default Events
