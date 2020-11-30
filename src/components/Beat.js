import React, { useEffect, useState } from 'react';
import '../App.css';
import { Howl, Howler } from 'howler';

const Beat = (props) => {

    const [color, setColor] = useState('white');
    const [active, setActive] = useState(false);

    const curentSound = new Howl({
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

    const playBeat = () => {
        curentSound.play()
    }
    
    if (active) setTimeout(function() {
        playBeat();
    }, props.time)

    if (!props.playing) curentSound.stop();

    return ( 
        <div className='Beat' style={{backgroundColor: color}} onClick={toggleBeat}>
            <p>{props.sound.id}</p>
        </div>
     );
}
 
export default Beat;