import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Navbar from "./components/navbar";

function App() {
  return ( 
    <Router>
    <div className="bg-orange-200 h-screen md:grid grid-cols-6">
    <Navbar/>
    <div className="bg-green-200 h-screen col-span-4">wola</div>
    <div  className="bg-yellow-200 h-screen col-span-1">wola</div>
    </div> 
    </Router>
  );
}

export default App;