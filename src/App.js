import './App.css';
import Forms from './Components/Form/Forms'
import Navbar from './Components/Navbar/Navbar';
import Events  from './Components/Events/Events';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <>
    <div className='App'>
        <Navbar/>
       
            <Row>
              <Col xs={{ order: 'first' }}><Forms /></Col>
              <Col xs={{ order: 'last' }}><Events /></Col>
            </Row>
        
       
        
      </div>
    </>
  );
}

export default App;
