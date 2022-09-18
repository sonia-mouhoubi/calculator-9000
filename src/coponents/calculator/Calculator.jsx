import React , {useState} from 'react';
import BeautifulScreen from '../beautifullScreen/BeautifulScreen';
import AmazingNumberButton from '../amazingNumberButton/AmazingNumberButton';
import GreatOperationButton from '../greatOperationButton/GreatOperationButton';
import MagnificientEqualButton from '../magnificientEqualButton/MagnificientEqualButton';
import ResetButton from '../resetButton/ResetButton';
import './Calculator.css';
import Save from '../save/Save';


export default function Calculator() {

    // STATE (état, donnée) //

    // Création d'une constante en destructuring afin de modifier la valeur gràce à sa fonction (setteur).
    // Création d'une variable pour stocker le calcul
    const [operation, setOperation] = useState(0); // Affichage du calcul(nbr+operateur) dans le BeautifullScreen.

    // Création d'une variable pour stocker le résultat.
    const [result, setResult] = useState(""); // Affichage du résultat dans le BeautifullScreen


    // COMPORTEMENTS // 

    // Au click, sur le chiffre ou sur l'opérateur on affiche sa valeur. 
    const handleClick = (e) => {
        // Si le chiffre est 0 on l'affiche une seule fois sinon on concatène afin d'afficher tous chiffre + operateur. 
        operation===0?setOperation(e.target.value):setOperation(operation+e.target.value)
        // setOperation(e.target.value);
    }

    // Calcul de l'operation. 
    const calcul = () => {
        // Eval permet de faire le calcul sur l'operation 
        const calculResult = eval(operation);
        // setOperation(calculResult);
        // Si l'operation est infarieur à 9000 en affiche le calcul sinon on affiche "It’s Over 9000 !!!".
        calculResult <= 9000 ? setResult(calculResult) : setResult("It’s Over 9000 !!!");  
    }

    const test = () => {
        console.log('test');
    }
 
    // AFFICHAGE (render)
    return (
        <div className='calculator'>
            <BeautifulScreen inputOperation={operation} inputResult={result} operationChange={(e)=>setOperation(e.target.value)} resultChange={(e)=>setResult(e.target.value)}/>
            <AmazingNumberButton numberClick={(e)=>handleClick(e)} />
            <GreatOperationButton operateClick={(e)=>handleClick(e)} />
            <div className='containerEqualReset'>
                <MagnificientEqualButton equalClick={()=>calcul()}/>
                <ResetButton resetScreen={()=>{setResult(0); setOperation(0)}}/>
            </div>
            <Save save={()=>{test()}}/>
        </div>
    )
}

