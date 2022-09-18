import React from 'react'
import './Save.css';

function Save({save}) {

    return (
        <div className='save'>
            <button onClick={save}>SAVE</button>
        </div>
    )
}

export default Save;


