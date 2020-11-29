import React from 'react';
import Beat from './Beat';
import '../App.css';

const SoundRow = (props) => {
    return ( 
        <div className='Sound-row'>
            <Beat sound={props.sound} id='1'/>
            <Beat sound={props.sound} id='2'/>
            <Beat sound={props.sound} id='3'/>
            <Beat sound={props.sound} id='4'/>
            <Beat sound={props.sound} id='5'/>
            <Beat sound={props.sound} id='6'/>
            <Beat sound={props.sound} id='7'/>
            <Beat sound={props.sound} id='8'/>
            <Beat sound={props.sound} id='9'/>
            <Beat sound={props.sound} id='10'/>
            <Beat sound={props.sound} id='11'/>
            <Beat sound={props.sound} id='12'/>
            <Beat sound={props.sound} id='13'/>
            <Beat sound={props.sound} id='14'/>
            <Beat sound={props.sound} id='15'/>
            <Beat sound={props.sound} id='16'/>
        </div>
     );
}
 
export default SoundRow;