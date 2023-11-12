import Forms from '../Components/Form/Forms'
import Navbar from '../Components/Navbar/Navbar';
import Events  from '../Components/Events/Events';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Home.css";
import {useEffect, useState} from "react";

export default function Home (){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/events', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Error');
            }

            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return(
        <>
            <div className='main_container'>
                <Navbar/>
                <Row>
                    <Col xs={{ order: 'first' }}><Forms /></Col>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <Col xs={{ order: 'last' }}><Events state={{event: data}} /></Col>
                    )}
                </Row>
            </div>
        </>
    )
}
