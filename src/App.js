import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './Components/Header';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <main className="text-gray-400 bg-gray-900 body-font">
        <Header />
        <Navbar />
        <About />
        <Resume />
        <Contact />
        <Portfolio />
        <Footer />
    </main>
    </Router>
  );
}

export default App;