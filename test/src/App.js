import React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import './nav.css';
import Navbar from './Components/Navbar';
import Home from "./Components/Home";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import League from './Components/League';

function App() {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/lol" element={<League/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App;
