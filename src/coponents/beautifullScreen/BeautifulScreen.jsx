import React from 'react'
import './BeautifullScreen.css';
import ItSOverNineThousand from '../itSOverNineThousand/ItSOverNineThousand';

function BeautifulScreen({inputOperation, inputResult, operationChange, resultChange}) {

  return (
    <div className='beautifulScreen'>

      {/* Input affichage calcul */}
      <input type="text" disabled value={inputOperation} onChange={operationChange} />

      {/* Input affichage résultat  */}
      {inputResult > 9000 ? ( <ItSOverNineThousand />) : ( <input type="text" disabled value={inputResult} onChange={resultChange} />) }

    </div>
  )
}

export default BeautifulScreen;


