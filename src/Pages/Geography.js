import React, { useEffect, useState } from 'react';
import '../Styles/Geography.css';

function Geography() {
  const [answer, setAnswer] = useState("Loading");
  const [audioFilePath, setAudioFilePath] = useState("");
  let audioPlayer = null;

  useEffect(() => {
    fetchData();
    const handleBeforeUnload = () => {
      stopAudio();
    };

    // Add the 'beforeunload' event listener
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Clean up function to remove the 'beforeunload' event listener
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      stopAudio();
    };
  }, []);

  const fetchData = () => {
    fetch("/api/answer/")
      .then(res => res.json())
      .then(data => {
        setAnswer(data.answer);
        setAudioFilePath(data.audio_file_path);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const playAudio = () => {
    if (audioFilePath) {
      const timestamp = new Date().getTime();
      const audioUrl = `http://localhost:5000/api/get-audio/?timestamp=${timestamp}`;
      audioPlayer = new Audio(audioUrl);
      audioPlayer.play();
      console.log('Playing audio:', audioFilePath);
    }
  };
  

  const stopAudio = () => {
    if (audioPlayer) {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
      console.log('Audio stopped');
    }
  };

  const handleNextClick = () => {
    fetch("/api/next-word/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ word: 'Asia' }),
    })
      .then(res => res.json())
      .then(data => {
        setAnswer(data.answer);
        setAudioFilePath(data.audio_file_path);
        stopAudio(); // Stop audio before playing the next one
      })
      .catch(error => {
        console.error('Error fetching next word data:', error);
      });
  };

  return (
    <div>
      <div className="box-form">
        <div className="left">
          <div className="overlay">
            <button type='submit' onClick={playAudio}>Listen </button>
            <button type='submit' onClick={stopAudio}>Stop </button>
          </div>
        </div>
        <div className="right">
          {answer}
        </div>
      </div>
      <button type='submit' onClick={handleNextClick}>Next </button>
    </div>
  );
}

export default Geography;
