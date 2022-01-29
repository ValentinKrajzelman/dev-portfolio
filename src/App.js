import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Navbar from "./components/navbar";
import Hero from "./components/hero"

function App() {
  return (
    <Router>
      <div className="h-screen bg-orange-200 md:grid grid-cols-6 grid-rows-6">
        <Navbar />
        <Hero />
      </div>
    </Router>
  );
}

export default App;