import React from 'react';
import SoundRow from './SoundRow';
import '../App.css';

const BeatGrid = (props) => {
    return ( 
       <div className='Beat-grid'>
        {props.sounds.map((sound) => {
            return <SoundRow time={props.time} sound={sound} id={sound.id} playing={props.playing}/>
        })}
       </div>
     );
}
 
export default BeatGrid;