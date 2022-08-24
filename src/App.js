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

//this is done pretty badly but it works i didnt knew how to do it better at the time

const conditionalRender = () => {
  if (window.innerWidth < 1000) { return <div className="h-screen mb-20" id='hero'> <Navbar /> <Hero /> <EasyNavbar /> </div> }
  else { return <div className="h-screen mb-20" id='hero'> <PcHero /></div> }
}


function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#0A192F] font-['Oswald'] text-[#FFF7D6] overflow-y-hidden">
        <div className="w-max-screen" id='hero'>
          {conditionalRender()}
        </div>
        {/* <Projects /> */}
        <Skills />
        <About />
        <div className="flex flex-col md:flex-row md:place-content-between ">

          <Contact />
          <ContactForm />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;