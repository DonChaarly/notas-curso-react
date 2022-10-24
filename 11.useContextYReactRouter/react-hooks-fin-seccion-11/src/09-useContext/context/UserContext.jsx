import { createContext } from 'react';

/*8. Para utilizar el useContext es necesario primero crear un contexto, -> UserProvider.jsx
     este normalmente se crea en un archivo aparte dentro de una carpeta llamada context
     Se puede tener varios contextos diferentes para manejar diferentes datos
     Al createContext se le puede definir el estado incial que queremos que tenga pero es bueno dejarlo vacio
*/
export const UserContext = createContext();