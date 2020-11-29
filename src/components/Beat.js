import React from 'react';
import '../App.css';

const colors = ['blue', 'red', 'orange', 'purple', 'black', 'yellow']

const Beat = (props) => {
    return ( 
        <div className='Beat'>
            <p>{props.sound.idx}</p>
        </div>
     );
}
 
export default Beat;