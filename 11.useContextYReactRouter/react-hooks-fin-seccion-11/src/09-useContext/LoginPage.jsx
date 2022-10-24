import { useContext } from 'react';
import { UserContext } from './context/UserContext';


export const LoginPage = () => {

    /*13. El hook useContext nos regresara la informacion del contexto que especifiquemos, -> context/UserProvider.jsx
          asi como las funciones que pueda regresar
    */
    const { user, setUser } = useContext( UserContext );
    
    return (
      <>
          <h1>LoginPage</h1>
          <hr />

          <pre>
            { JSON.stringify( user, null, 3 ) }
          </pre>


          <button 
            className="btn btn-primary"
            onClick={ () => setUser({ id: 123, name: 'Juan', email: 'juan@google.com' })  }
          >
            Establecer usuario
          </button>

      </>
    )
  }
  