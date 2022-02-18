import React from "react";
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import EasyNavbar from "./components/easyNavbar";
import Skills from "./components/skills";
import About from "./components/about";
import Contact from "./components/contact";
import ContactForm from "./components/contactForm";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#B6DEEA] m-0 p-0">
        <div className="h-screen w-screen" id='hero'>
          <Navbar />
          <Hero />
          <EasyNavbar />
        </div>
        <Projects />
        <Skills />
        <About />
        <Contact />
        <ContactForm />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;