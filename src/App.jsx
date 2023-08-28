import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import PhrasesList from './components/PhrasesList';
import RandomButton from './components/RandomButton';
import phrasesData from './utils/phrases.json';

const backgrounds = [
  'fondo1.jpg',
  'fondo2.jpg',
  'fondo3.jpg',
  'fondo4.jpg'
];

function App() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  

  const changeRandomPhraseAndBackground = () => {
    const newPhraseIndex = Math.floor(Math.random() * phrasesData.length);
    const newBackgroundIndex = Math.floor(Math.random() * backgrounds.length);

    setCurrentPhraseIndex(newPhraseIndex);
    setCurrentBackgroundIndex(newBackgroundIndex);
  };

  const currentPhrase = phrasesData[currentPhraseIndex];
  const currentBackground = backgrounds[currentBackgroundIndex];

  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/${currentBackground})`,
  };

  return (
    <div className="App" style={backgroundStyle}>
      <Header  />
      <PhrasesList currentPhrase={currentPhrase} />
      <RandomButton onClick={changeRandomPhraseAndBackground} />
    </div>
  );
}

export default App;

