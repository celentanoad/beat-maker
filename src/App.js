
import './App.css';
import BeatGrid from './components/BeatGrid';

const sounds = [
  {
    name: 'sound1',
    idx: '1'
  },
  {
    name: 'sound2',
    idx: '2'
  },
  {
    name: 'sound3',
    idx: '3'
  },
  {
    name: 'sound4',
    idx: '4'
  },
  {
    name: 'sound5',
    idx: '5'
  },
  {
    name: 'sound6',
    idx: '6'
  },
]

function App() {
  return (
    <div className="App">
      <BeatGrid sounds={sounds}/>
    </div>
  );
}

export default App;
