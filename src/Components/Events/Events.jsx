import React, { useState, useEffect } from 'react';
import './Events.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import localImage from '../Assets/location.png';
import dataImage from '../Assets/data.png';

const Events = () => {
    const limitedEvents = events.slice(0, 3);
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => setEvents(data))
            .catch(error => console.error('Error:', error));
    }, []);
    
  return (
    <div className='container'>
        {limitedEvents.map(event => (
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
                    <Link to="/search">
                        <Button variant="primary">Register</Button>
                    </Link>
                </Card.Body>
            </Card>
        ))}
    </div>
  )
}

export default Events
