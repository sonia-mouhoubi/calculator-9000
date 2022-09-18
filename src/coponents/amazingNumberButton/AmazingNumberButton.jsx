import React from 'react';
import './AmazingNumberButton.css';

function AmazingNumberButton({numberClick}) {

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];


  return (
    <div className='amazingNumberButton'>
        {numbers.map((i) => (
            <button key={i} value={i} onClick={numberClick}>{i}</button>
        ))}
    </div>
    )
}

export default AmazingNumberButton;
