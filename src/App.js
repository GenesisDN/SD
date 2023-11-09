import './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home.jsx';

function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>}></Route>
            <Route path='/home' element={<Home/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
