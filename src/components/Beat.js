import React, { useState } from 'react';
import '../App.css';
import { Howl, Howler } from 'howler';

const Beat = (props) => {

    const [color, setColor] = useState('white');
    const [active, setActive] = useState(false);

    const playBeat = new Howl({
        src: props.sound.src
    });

    const toggleBeat = () => {
        if (color === 'white') {
            setColor(props.sound.color);
            setActive(true);
        } else {
            setColor('white');
            setActive(false);
        }
    }

    if (active) playBeat.play();
    if (!props.playing) playBeat.stop();

    return ( 
        <div className='Beat' style={{backgroundColor: color}} onClick={toggleBeat}>
            <p>{props.sound.id}</p>
        </div>
     );
}
 
export default Beat;