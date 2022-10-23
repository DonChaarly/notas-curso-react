import { useState } from 'react';

//18. Como siempre se trabaja con formularios es buena idea mantener este customHook en nuestros proyectos
export const useForm = ( initialForm = {} ) => {
  
    //19. Se inicializa en un state la estrucutra del objeto que se obtiene en las props
    const [ formState, setFormState ] = useState( initialForm );

    //20. Con la funcion onInputChange manejamos el cambio de estado de un input especifico del formulario
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        /*21. Se debe pasar los atributos del objeto que no cambiaron 
              y utilizando el name del input establecemos un nuevo valor a una propiedad especifica*/
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    //21. Con onResetForm reiniciamos el formulario a los valores iniciales
    const onResetForm = () => {
        setFormState( initialForm );
    }

    //22. Finalmente regresamos todo lo que nos interesa, las funciones y el propio objeto formState -> FormWithCustomHook.jsx
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
