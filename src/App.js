import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

import Alphabets from "./Pages/Alphabets";

const App = () => {
  return (
    <Router>
    <div className="App">
    <ul className="App-header">
    <li><Link to="/learnenglish">Home</Link> </li>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/contact">Contact Us</Link></li>
    </ul>
    <Routes>
    <Route exact path="/learnenglish" element={<Alphabets />}> 
    </Route>
    </Routes>
    </div>
    </Router>
  );
};

export default App;
