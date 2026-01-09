import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home.jsx";
import About from "./pages/Services.jsx";
import Projects from "./pages/Projects.jsx";
import Products from "./pages/Products.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";




function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> 
      <Footer />
      
      </>
      

  );
}


export default App;
