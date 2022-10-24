import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: 123,
//     name: 'Fernando Herrera',
//     email: 'fernando@google.com'
// }


//9. Tambien es necesario crear un Provider el cual sera un HOC (High Order Componente)
//10. al ser un HOC componente este tendra hijos dentro, por ello se especifica la propiedad children
export const UserProvider = ({ children }) => {

    /*14. Al ser un functionalComponet se puede utilizar otros hook dentro asi como establecer funciones etc 
          y todo esto enviarlo dentro de la inforamcion del provider
    */
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
