import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skills";
import About from "./components/about";
import Contact from "./components/contact";
import ContactForm from "./components/contactForm";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div className="h-screen w-screen bg-orange-200">
        <Navbar />
        <Hero />
      </div>
      <div className="h-screen w-screen">
        <Projects />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <ContactForm />
      </div>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;