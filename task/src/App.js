import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Carrer from './components/Carrer';
import ContactUs from './components/ContactUs';
import AboutUs from './components/About';
import Footer from './components/Footer';
import Check from './components/Check';

import Register from './components/Register';
import Login from './components/Login';
import axios from 'axios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const check=()=>{
    var token=localStorage.getItem("accessToken")
    console.log(token);
   
    axios.get('https://localhost:7278/api/Authenicate/ValidateToken', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  .then(response => {
      console.log(response.data);
      setIsLoggedIn(true);
  })
  .catch(error => {
      console.error('Error:', error.response ? error.response.data : error.message);
  });
  }

  useEffect(() => {
    if (localStorage.getItem("accessToken") !== null) {
         check();
      console.log("true")
    }
  
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/Register" element={<Register />} />
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Carrer" element={<Carrer />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/Check" element={<Check />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
            <Route path="*" element={<Footer />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
