import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Dashboard from './components/DataDashboard.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<div>Page Not Found</div>} /> {/* Fallback route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
