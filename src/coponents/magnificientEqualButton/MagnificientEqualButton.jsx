import React from 'react'
import './MagnificientEqualButton.css';

function MagnificientEqualButton({equalClick}) {


    return (
        <div className='magnificientEqualButton'>
            <button onClick={equalClick}>=</button>
        </div>
    )
}

export default MagnificientEqualButton;


