import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import About from './components/About';
// import Navbar from './components/Navbar'
// import Footer from './components/Footer';
// import Services from './components/Services';
// import HomePage from './components/HomePage';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Services from './components/Service/Services';
import HomePage from './Home/HomePage';
import Contact from './components/Contact/Contact';
// import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path = '/services' element = {<Services/>}/>
          <Route path='/contact' element = {<Contact/>}/>
        </Routes>
       
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
