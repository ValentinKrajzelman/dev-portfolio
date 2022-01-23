import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <div className="bg-orange-200 md:grid grid-cols-6">
        <Navbar />
      </div>
    </Router>
  );
}

export default App;