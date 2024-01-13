import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

import Alphabets from "./Pages/Alphabets";
import Home from "./Pages/Home";
import Header from "./Components/Header";

const App = () => {
  return (
    <Router>
    <div className="App">
    {<Header />}
    <Routes>
    <Route exact path="/" element={<Home />}> </Route>
    <Route exact path="/learnenglish" element={<Alphabets />}> </Route>
    </Routes>
    </div>
    </Router>
  );
};

export default App;
