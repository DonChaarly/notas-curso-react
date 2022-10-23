import { useState } from 'react';

export const CounterApp = () => {

    /*1. El hook useState, nos sirve para manejar el estado de nuestras constantes
         este hook regresa el valor de la constante y una funcion que nos sirve para modificar la constante
         Cuando se cambia el valor de la constante el functionalComponent se renderiza nuevamente con el 
         valor actualizado
         Como argumento se le pasa el valor inicial que tendra la constante
    */
    const [ counters, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });


    /*2. Cuando se tiene un objeto o arreglo como estado, este a su vez se puede desestructurar en otras
         constantes para su mejor manejo */
    const { counter1, counter2, counter3 } = counters;

  return (
    <>
        <h1>Counter1: { counter1 }</h1>
        <h1>Counter2: { counter2 }</h1>
        <h1>Counter3: { counter3 }</h1>

        <hr />

        {/*3. Si se quiere modificar el valor de un solo valor del arreglo o objeto, -> hooks/useCounter.js
              se tiene que pasar los valores actuale de todos los elemento (con un spred es mejor)
              y luego especificar el nuevo valor de la propiedad en especifico del arreglo/objeto   */}
        <button 
            className="btn" 
            onClick={ 
                () => setCounter({
                    ...counters,
                    counter1: counter1 + 1,
                })
            }>+1</button>
    
    </>
  )
}
