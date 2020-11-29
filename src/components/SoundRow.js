import React from 'react';
import Beat from './Beat';
import '../App.css';

const SoundRow = (props) => {
    let increment = 1000
    const getIncrement = (num) => {
       return increment * num;
    }

    return ( 
        <div className='Sound-row'>
            <Beat sound={props.sound} playing={props.playing} time={getIncrement(0)}/>
            <Beat sound={props.sound} playing={props.playing} time={getIncrement(1)}/>
            <Beat sound={props.sound} playing={props.playing} time={getIncrement(2)}/>
            <Beat sound={props.sound} playing={props.playing} time={getIncrement(3)}/>
            <Beat sound={props.sound} playing={props.playing} time={getIncrement(4)}/>
            <Beat sound={props.sound} playing={props.playing} time={getIncrement(5)}/>
            <Beat sound={props.sound} playing={props.playing} time={getIncrement(6)}/>
            <Beat sound={props.sound} playing={props.playing} time={getIncrement(7)}/>
            <Beat sound={props.sound} playing={props.playing} time={getIncrement(8)}/>
            <Beat sound={props.sound} playing={props.playing} time={getIncrement(9)}/>
            <Beat sound={props.sound} playing={props.playing} time={getIncrement(10)}/>
            <Beat sound={props.sound} playing={props.playing} time={getIncrement(11)}/>
            <Beat sound={props.sound} playing={props.playing} time={getIncrement(12)}/>
            <Beat sound={props.sound} playing={props.playing} time={getIncrement(13)}/>
            <Beat sound={props.sound} playing={props.playing} time={getIncrement(14)}/>
            <Beat sound={props.sound} playing={props.playing} time={getIncrement(15)}/>
        </div>
     );
}
 
export default SoundRow;