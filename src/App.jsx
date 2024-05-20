import React from 'react';
import { BrowserRouter, Routes, Route, UNSAFE_DataRouterContext } from 'react-router-dom';
// import About from './components/About';
// import Navbar from './components/Navbar'
// import Footer from './components/Footer';
// import Services from './components/Services';
// import HomePage from './components/HomePage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Services from './components/Service/Services';
import HomePage from './Home/HomePage';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import AboutRoute from './components/AboutRoute/AboutRoute';

const name = () => {
  return new Promise((resolve ,reject) => {
    
  })
}
function App() {
  

2
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutRoute/>} />
          <Route path='/contact' element = {<Contact/>} />
          <Route path = '/services' element = {<Services/>}/>
     
          
        </Routes>
       
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;


