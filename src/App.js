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
      <div>
        <div className="h-screen w-screen bg-orange-200 m-0 p-0 " id='hero'>
          <Navbar />
          <Hero />
          <EasyNavbar />
        </div>
        <div className="h-screen w-screen ">
          <Projects />
        </div>
        <div className="h-screen w-screen ">
          <Skills />
        </div>
        <div className="h-screen w-screen ">
          <About />
        </div>
        <div className="h-screen w-screen ">
          <Contact />
        </div>
        <div className="h-screen w-screen ">
          <ContactForm />
        </div>
        <div className="h-screen w-screen ">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;