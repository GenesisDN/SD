import Forms from '../Components/Form/Forms'
import Navbar from '../Components/Navbar/Navbar';
import Events  from '../Components/Events/Events';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Home.css";

export default function homepage (){
    return(
        <>
            <div className='container_home'>
                <Navbar/>
                <Row>
                    <Col xs={{ order: 'first' }}><Forms /></Col>
                    <Col xs={{ order: 'last' }}><Events /></Col>
                </Row>
            </div>

        </>
    )
}
