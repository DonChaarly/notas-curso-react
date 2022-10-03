import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    //4. Esta funcion recibirar el atributo event, el cual se puede desestructurar para separa solo lo que se requiere
    const onInputChange = ({ target }) => {
        //5. Y con la funcion set se puede modificar el valor del input
        setInputValue( target.value );
    }

    //7. Se acostumbra colocar event.preventDefault() dentro de la funcion para evitar que se refresque la pagina cuando se hace submit
    const onSubmit = ( event ) => {
        event.preventDefault();
        //8. En esta funcion se hace lo que se requiera que haga el submit del formulario -> GifExpertApp.jsx
        if( inputValue.trim().length <= 1) return;
        setInputValue('');
        //10. Se puede hacer uso de las funciones recibidas, lo cual se ejecutar en el componente padre -> useFetchGifs.js
        onNewCategory( inputValue.trim() );
    }

    return (
        //6. Como en javascript se puede colocar el evento onSubmit para manejar el submit del formulario mediante una funcion
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                /*3. Si se coloca como valor un estado a un input se tiene colocar el evento onChange 
                     para poder manejar el cambio del valor del input mediante una funcion
                */
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
