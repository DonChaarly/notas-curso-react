import { useRef } from 'react';

/*33. El inputRef es muy util al querer tener la refencia de un elemento html, ya que por ejemplo, -> useref/Quote.jsx
      cuando se tiene muchos elemento repetidos, con un querySelector o un getElementById, esto no nos asegura hacer referencia a varios elementos html
      En cambio el useRef nunca se va a confundir
      Nota: Si se hace un map y se repite varias veces un elemento, se puede crear un Componente para aprovechar al maximo el useRef 
*/
export const FocusScreen = () => {


    //29. El Hook useRef es como un useState que no dispara renderizaciones de nuevo cuando cambia
    //30. Nomrlamente se utiliza para hacer referencia a un elemento html el cual tendra todos los atributos de este
    const inputRef = useRef();

    const onClick = () => {
        // document.querySelector('input').select();
        // console.log(inputRef);

        //32. Ahora con la constante inputRef se puede acceder a todos los atributos del elemento html referenciado
        inputRef.current.select();
    }


  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
            //31. Para establecer como referencia un elemento se utiliza la propiedad ref 
            ref={ inputRef }
            type="text" 
            placeholder="Ingrese su nombre"
            className="form-control"
        />

        <button 
            className="btn btn-primary mt-2"
            onClick={ onClick }
        >
            Set focus
        </button>

    </>
  )
}
