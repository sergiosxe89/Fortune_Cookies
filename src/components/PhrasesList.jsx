import React from 'react';
import './PhrasesList.css';

function PhrasesList({ currentPhrase }) {
  return (
    <div className="phrase">
      <p>{currentPhrase.phrase}</p>
      <p>Autor: {currentPhrase.author}</p>
    </div>
  );
}

export default PhrasesList;
