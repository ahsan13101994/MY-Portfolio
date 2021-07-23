import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './Components/Navbar';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';

function App() {
  return (

      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <About />
        <Resume />
        <Contact />
        <Portfolio />
        <Footer />
    </main>
  
  );
}

export default App;