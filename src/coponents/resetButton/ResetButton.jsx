import React from 'react'
import './ResetButton.css';

function ResetButton({resetScreen}) {

    return (
        <div className='resetButton'>
            <button onClick={resetScreen}>C</button>
        </div>
    )
}

export default ResetButton;


