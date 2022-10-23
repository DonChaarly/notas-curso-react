import { useEffect, useState } from 'react';
import { Message } from './Message';


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'fernando@google.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }


    //14. Cuando Se especifica un arreglo vacio el useEffect se ejcuta cada que se renderiza el componente
    useEffect( () => {
        // console.log('useEffect called!');
    }, []);
    
    //15. Cuando se especifican estados, el useEffect se ejecuta cada que cambian los estados espedificados
    useEffect( () => {
        // console.log('formState changed!');
    }, [formState]);

    //16. Se pueden indicar valores de un estado especifico, como el email del estado formState -> Message.jsx
    useEffect( () => {
        // console.log('email changed!');
    }, [ email ]);

    

    return (
        <>
            <h1>Formulario Simple</h1> 
            <hr />

            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="fernando@google.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />


            {
                (username === 'strider2' ) && <Message />
            }

        </>
    )
}
