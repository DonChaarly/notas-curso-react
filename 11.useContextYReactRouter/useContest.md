# useContext

Cuando se establece **informacion en un componente padre** que pudiera ser\
**utilizada en el componente hijo**, nieto, bisnieto, etc\
Es buena idea establecer un ***useContext*** ya que este nos\
**ayudara a compartir informacion a componentes hijos** sin necesidad de mandarla por medio de las props\

## Crear un nuevo contexto

### Context
Para utilizar el ***useContext*** es necesario **primero crear un contexto**,\ 
este normalmente se crea en un **archivo aparte dentro de una carpeta llamada context**\
Se puede tener varios contextos diferentes para manejar diferentes datos\
Al createContext se le puede definir el estado incial que queremos que tenga pero es bueno dejarlo vacio

    export const UserContext = createContext();

### Provider
Tambien es necesario crear un ***Provider*** el cual sera un HOC (High Order Componente)\
al ser un HOC componente este tendra hijos dentro, por ello se especifica la propiedad children

    export const UserProvider = ({ children }) => {

        const [user, setUser] = useState();

        return (
            /* 11. en el return de este provider se tendran las etiquetas de nuestro comopnente context -> MainApp.jsx
                pero para que sea un provider se necesita colocar .provider
                en la propiedad value, se puede indicar la informacion incial a la que pueden acceder los componentes que utlicen este provider
                Dentro se coloca la propiedad childrens
            */
            <UserContext.Provider value={{ user, setUser }}>
                { children }
            </UserContext.Provider>
        )
    }

En nuestro **componente principal** colocaremos las **etiquetas de nuestro provider** y\ 
ahora todos los componentes dentro podran utilizar la informacion del provider

    <UserProvider>
        <MainApp/>
    </UserProvider>

## useContext - Hook

El hook ***useContext*** nos **regresara la informacion del contexto** que especifiquemos, 
asi como las funciones que pueda regresar
    
    const { user, setUser } = useContext( UserContext );

