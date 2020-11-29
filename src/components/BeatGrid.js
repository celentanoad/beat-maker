import React from 'react';
import SoundRow from './SoundRow';
import '../App.css';

const BeatGrid = (props) => {
    return ( 
       <div className='Beat-grid'>
        {props.sounds.map((sound) => {
            return <SoundRow sound={sound} id={sound.id} playing={props.playing}/>
        })}
       </div>
     );
}
 
export default BeatGrid;