import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({ value }) =>{

    const [ counter, setCounter ] = useState( value );


    const handledAdd = (event, newValue) =>{
        console.log(newValue);
        setCounter(counter + 1);
    }
    const handledAdd1 = (event) =>{
        console.log(event);
        setCounter(counter - 1);
    }
    const handledAdd2 = () =>{
        setCounter(value);
    }

    return (
        <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button onClick={ (event) => handledAdd(event, "hola")}>
            +1
        </button>

        <button onClick={ handledAdd1 }>
            -1
        </button>
        <button onClick={ handledAdd2 }>
            Reset
        </button>

        
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}
