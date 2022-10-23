import { useEffect, useState } from "react"

export const Message = () => {
    
    const [coords, setCoords] = useState({ x: 0, y: 0});

    /*10. El hook useEffect  se utiliza para ejecutar codigo cada que se renderice el componente o cambie un estado especifico */
    useEffect(() => {
        
      //11. El codigo dentro del cuerpo de la funcion es el que se ejcutara
        const onMouseMove = ({ x, y }) => {
            // const coords = { x, y };
            setCoords({ x, y })
        }

        window.addEventListener( 'mousemove', onMouseMove );
        
      //12. Dentro del return se coloca codigo que queremos que se ejecute cuando el functionalComponent se desmonte
      return () => {
        /*17. Cuando se cree un listener, una suscripcion, un evento, -> useForm.js 
              etc siempre remover dicha suscripcion en el return \
              para evitar que se cree nuevamente al montar el componente*/
        window.removeEventListener( 'mousemove', onMouseMove );
      }
      /*13. Como segundo parametro del useEffect se establece un array con los nombres de los estados - SimpleForm.jsx
            Cada que cambie uno de estos estados es cuando se ejcutara el codigo dentro
            si no se establece ningun estado, el codigo se ejecutara cada que se renderice nuevamente el componente 
      */
    }, []);
    


  return (
    <>
        <h3>Usuario ya existe</h3>
        { JSON.stringify( coords ) }
    </>
  )
}
