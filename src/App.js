import './App.css';
import React,{ useEffect, useState } from 'react';

function App() {

  const [answer, setAnswer] = useState(2);
  useEffect(() => {
    fetch("/api/answer/")
    .then(res => res.json())
    .then(data => {
      setAnswer(data.answer);
    });
    
  },[]);

  return (

      <div>
        <h1>{answer.letter}</h1>
        <p>Sound: {answer.sound}</p>
        <p>Explanation: {answer.explanation}</p>
        <p>Example: {answer.example}</p>
  
        <img src={answer.letterimage} alt="Letter" />
        <img src={answer.exampleimage} alt="Example" />
      </div>
    );
  
}

export default App;
