import React from 'react'
import Events from '../Components/Events/Events';
import Navbar from '../Components/Navbar/Navbar';
import "./Home.css";
import User from '../Components/User/User';

const SearchPage = () => {
  return (
    <div className='main_container'>
      <Navbar />
      <Events />
      <User />
    </div>
  )
}

export default SearchPage
