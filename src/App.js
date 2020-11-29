import './App.css';
import BeatGrid from './components/BeatGrid';
import sound1 from './sounds/AltSD5.wav';
import sound2 from './sounds/Hats4.wav';
import sound3 from './sounds/Kick-Hard3.wav';
import sound4 from './sounds/OH11.wav';
import sound5 from './sounds/SD-17.wav';
import sound6 from './sounds/Snare6.wav';

import React, { useState } from 'react';

const sounds = [
  {id: 'sound1', color: 'blue', src: sound1},
  {id: 'sound2', color: 'red', src: sound2},
  {id: 'sound3', color: 'orange', src: sound3},
  {id: 'sound4', color: 'purple', src: sound4},
  {id: 'sound5', color: 'black', src: sound5},
  {id: 'sound6', color: 'yellow', src: sound6}
]

function App() {

  const [playing, setPlaying] = useState(false);

  const handleClick = () => {
    if (playing) setPlaying(false);
    else setPlaying(true)
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Play</button>
      <BeatGrid sounds={sounds} playing={playing}/>
    </div>
  );
}

export default App;
