import React,{ useEffect, useState } from 'react';
import '../Styles/Alphabets.css';

function Alphabet() {

  const [answer, setAnswer] = useState(2);
  const [text, setText] = useState(2);
  useEffect(() => {
    fetch("/api/answer/")
    .then(res => res.json())
    .then(data => {
      setAnswer(data.answer);
      setText(data.answer.toString().replace(/\*/g, ''));
    })
  },[]);
  let utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  utterance.voice = window.speechSynthesis.getVoices()[0];
  window.speechSynthesis.speak(utterance);
  
  return (

      <div>
        <h1>answer: {answer}</h1>
      </div>
    );
  
}

export default Alphabet;
