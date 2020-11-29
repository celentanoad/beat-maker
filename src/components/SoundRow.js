import React from 'react';
import Beat from './Beat';
import '../App.css';

const SoundRow = (props) => {
    return ( 
        <div className='Sound-row'>
            <Beat sound={props.sound} playing={props.playing}/>
            <Beat sound={props.sound} playing={props.playing}/>
            <Beat sound={props.sound} playing={props.playing}/>
            <Beat sound={props.sound} playing={props.playing}/>
            <Beat sound={props.sound} playing={props.playing}/>
            <Beat sound={props.sound} playing={props.playing}/>
            <Beat sound={props.sound} playing={props.playing}/>
            <Beat sound={props.sound} playing={props.playing}/>
            <Beat sound={props.sound} playing={props.playing}/>
            <Beat sound={props.sound} playing={props.playing}/>
            <Beat sound={props.sound} playing={props.playing}/>
            <Beat sound={props.sound} playing={props.playing}/>
            <Beat sound={props.sound} playing={props.playing}/>
            <Beat sound={props.sound} playing={props.playing}/>
            <Beat sound={props.sound} playing={props.playing}/>
            <Beat sound={props.sound} playing={props.playing}/>
        </div>
     );
}
 
export default SoundRow;