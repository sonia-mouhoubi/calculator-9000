import React from 'react'
import './GreatOperationButton.css';

function GreatOperationButton({operateClick}) {

  var operation = ["+", "-", "*", "/"];

//   const handleClick = (op)=> {
//     props.handleClickParent(op);
//   }


  return (
    <div className='greatOperationButton'>
      
        {operation.map((op) => (
            <button key={op} value={op} onClick={operateClick}>{op}</button>

        ))}
        
    </div>
  )
}

export default GreatOperationButton;


