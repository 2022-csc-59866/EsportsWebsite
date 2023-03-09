//import logo from './logo.svg';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import './nav.css';
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import Navbar from './Navbar';
import League from './League';

function App() {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/lol" element={<League/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App;
