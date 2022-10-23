import { useEffect, useState } from "react";


/*24. Este customHook se encarga de gestionar las peticiones fetch, 
      es muy util le indicamos que nos regrese la data, cuando esta cargando y si ha habido errores*/
export const useFetch = ( url ) => {

    //25. Inicializamos un state con el siguiente objeto
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    /*26. Al funcion getFetch es la que se encargara de realizar el fetch y establecer la data, 
          que acabo de cargar la peticion y los errores que ha habido en caso de tener errores
    */
    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        });

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null,
        });
    }

    //27. Con un useEffect ejecutamos el getFetch cada vez que tengamos un nuevo url
    useEffect(() => {
        getFetch();
    }, [url])

    //28. Retormamos la data, el isLoading y los errores -> useRef/FocusScreen.jsx
    return {
        data:      state.data,
        isLoading: state.isLoading,
        hasError:  state.hasError,
    };
}
