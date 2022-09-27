import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({ value }) =>{

    //16. El hook useState nos sirve para modificar el estado del componente
    //17. Se puede desestrucutrar en dos variables el retorno del hook
    const [ counter, setCounter ] = useState( value );


    const handledAdd = (event, newValue) =>{
        console.log(newValue);
        //19. La segunda variable es una funcion que nos permite modificar el estado
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
        {/* 18. La primera variable sera el valor del estado */}
        <h2> { counter } </h2>
        {/* 14. Los eventos se parecen mucho a los tipicos de javascript (estos tambien sirven) 
                Por defecto el evento puede mandar un atributo llamado event el cual contiene toda la informacion del evento        
        */}
        <button onClick={ (event) => handledAdd(event, "hola")}>
            +1
        </button>

        {/* 15. Si solo se recibe el atributo event, se puede simplificar el llamado de la funcion de la siguiente manera */}
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
