import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import PcNavbar from "./components/PcNavbar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import EasyNavbar from "./components/easyNavbar";
import Skills from "./components/skills";
import About from "./components/about";
import Contact from "./components/contact";
import ContactForm from "./components/contactForm";
import Footer from "./components/footer";
import PcHero from "./components/PcHero";

const conditionalRender = () => {
  if (window.innerWidth < 1000) { return <div className="h-screen mb-20" id='hero'> <Navbar /> <Hero /> <EasyNavbar /> </div> }
  else { return <div className="h-screen w-screen mb-20" id='hero'><PcNavbar /> <PcHero /></div> }
}

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#0A192F] font-['Oswald'] text-[#FFF7D6] ">
        <div className="h-screen w-screen mb-20" id='hero'>
          {conditionalRender()}
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