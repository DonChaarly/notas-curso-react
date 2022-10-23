import { useState } from "react"


//4. Los customHooks no son mas que funciones que retornan algo, ya sea una variable o funciones
//5. Se puede indicar que el hook debe recibir algo y tambien se puede indicar un valor por defecto
export const useCounter = ( initialValue = 10 ) => {


    //6. Es abitual utilizar otros hooks dentro de estos customHOoks
    const [ counter, setCounter ] = useState( initialValue )

    //7. Este customHook puede tener dentro mas funciones la cuales pueden ser retornadas para que el usuario final las utilice
    const increment = ( value = 1 ) => {
        setCounter( counter + value );
    }

    const decrement = ( value = 1 ) => {
        // if ( counter === 0 ) return;

        setCounter( counter - value );
    }

    const reset = () => {
        setCounter( initialValue );
    }

    //8. En el return se coloca todo lo que el usuario final puede utilizar, como el variables o funciones -> CounterWhitCustomHOok.jsx
    return {
        counter,
        increment,
        decrement,
        reset,
    }

}

