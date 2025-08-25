import React from 'react';
import Contact from './components/Contact'; 
import Gallery from './components/Gallery';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/contact' element={<Contact/>}/> 
      </Routes>
      
       <Footer />
    </>
   
  );
}

export default App;