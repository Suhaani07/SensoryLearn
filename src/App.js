import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/Components/Header.js';
import Landing from './Landing.js';
import Footer from '../src/Components/Footer.js';
import Home from '../src/Pages/Home.js';
import Doubts from './Doubts.js';
import Subjects from './Subjects.js';
import Geography from './Pages/Geography.js';
import SignIn from './SignIn/signin.js';



const App = () => {
  return (
    <div className="App">
     
      <Router>
      {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/ask-doubts' element={<Doubts />} />
          <Route path='/subjects' element={<Subjects />} />
          <Route path='/geography' element={<Geography />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>
      
      
      </Router>
    </div>
  );
};

export default App;
