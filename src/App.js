import './App.css';
import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Diabetes from './pages/Diabetes';
import NeurologicalDiseases from './pages/NeurologicalDiseases';
import HeartDiseases from './pages/HeartDiseases';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/> }/>
    <Route path="/about" element={< About/>} />
    <Route path='/diabetes' element={<Diabetes/>}/>
    <Route path='/neurological' element={<NeurologicalDiseases/>}/>
    <Route path='/heart' element={<HeartDiseases/>}/>
    
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
