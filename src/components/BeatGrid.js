import React from 'react';
import SoundRow from './SoundRow';
import '../App.css';

const BeatGrid = (props) => {
    return ( 
       <div className='Beat-grid'>
        {props.sounds.map((sound, idx) => {
            return <SoundRow sound={sound} id={idx} />
        })}
       </div>
     );
}
 
export default BeatGrid;