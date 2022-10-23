import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';


export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    /*37. Cuando se pasa como una funcion a las props de un componente hijo, 
          cuando se renderiza el componente padre la posicion en memoria de la funcion cambia,
          por ende aunque coloquemos un React.memo en el componente hijo, este al tener siempre una funcion diferente
          nuestro memo no funcionara,
          Por esto se utiliza el useCallback para memorizar funciones y evitar este comportamiento,
          El cuerpo del hook es muy parecido al del useMemo, nos retorna la funcion ya memorizada */
    const incrementFather = useCallback(
      (value) => {
        //38. Si se utiliza una funcion set es mejor pasar el valor del estado como se muestra porque este valor tambien se memoriza
        setCounter( (c) => c + value );
      },
      [],
    );

    useEffect(() => {
      // incrementFather();
    }, [incrementFather])
    
    
    // const incrementFather = () => {
    //     setCounter( counter + 1);
    // }


    return (
        <>
            <h1>useCallback Hook: { counter } </h1>
            <hr />

            <ShowIncrement increment={ incrementFather } />
        </>
    )
}
