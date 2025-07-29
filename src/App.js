import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contacts from "./components/pages/Contact";
import Notfound from "./components/pages/NotFound";
import './App.css'

function App() {
  return (
    <>

<Navbar/>
<div className="container">
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/contact" element={<Contacts/>}/>
    <Route path="*" element={<Notfound/>}/>
  </Routes>
</div>

    </>
  );
}

export default App;
