import React from 'react'
import Events from '../Components/Events/Events';
import Navbar from '../Components/Navbar/Navbar';
import "./Home.css";

const SearchPage = () => {
  return (
    <div className='main_container'>
      <Navbar />
      <Events />
    </div>
  )
}

export default SearchPage
