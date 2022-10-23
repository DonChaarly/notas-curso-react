import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';


const heavyStuff = ( iterationNumber = 100 ) => {
    for( let i = 0; i < iterationNumber; i++ ) {
        console.log('Ahí vamos...');
    }

    return `${ iterationNumber } iteraciones realizadas`;
}



export const MemoHook = () => {

    const { counter, increment } = useCounter( 4000 );
    const [ show, setShow ] = useState(true);

    /* 36. El hook useMemo sirve para evitar que ciertas funciones se ejecuten -> CallBackHook.jsx
            cada vez que el componente se vuelva a renderizar\
            Es muy parecido al useEffect, sin embargo este hook nos retorna lo que retorne la funcion especificada\
            Como primer argumento se pasa el callBack, y como segundo argumento se pasa la lista de dependencias\
            Cuando una dependencia cambie se ejecutara nuevamente el callBack
     */
    const memorizedValue = useMemo( () => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter: <small>{ counter }</small>  </h1>
            <hr />

            <h4>{ memorizedValue }</h4>


            <button
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={ () => setShow( !show )  }
            >
                Show/Hide { JSON.stringify(show) } 
            </button>
        
        </>
    )
}
