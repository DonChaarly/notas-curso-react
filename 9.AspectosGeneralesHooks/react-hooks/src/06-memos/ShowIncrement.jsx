import React from 'react';

/*35. Cuando en un componente padre se tiene un componente hijo y el padre se renderiza, -> MemoHook.jsx
      esto hace que el componente hijo tambien se vuelva a renderizar a pesar de no haber cambiado ningun estado
      Para evitar esto se utiliza el metodo memo, sin embargo esto no es recomendable utilizarlo
      a menos que el componente hijo sea muy grande */
export const ShowIncrement = React.memo( ({ increment }) => {

    console.log(' Me volví a generar :( ');

    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                increment( 5 );
            }}
        >
            Incrementar
        </button>
    )
})
