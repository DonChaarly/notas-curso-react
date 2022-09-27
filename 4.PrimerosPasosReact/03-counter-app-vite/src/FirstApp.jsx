import PropTypes from 'prop-types'

const newMessage = {
    message: "Hola Mundo",
    title: "Fernando"
};
const getMessages = () => "hola mundo";

 

//7.Se coloca {} dentro de una etiquta para imprimir una variable -> main.jsx
/* 9. Para recibir argumentos desde el componente padre, se coloca una propiedad al functional Component -> main.jsx
      Normalmente a este argumento se le llama props
      pero tambien este se puede desestrucutrar y manejar cada propiedad por separado
*/
const FirstApp = ({title, subTitle}) => (
    <>
        <h3>{ title }</h3>
        <p>{ subTitle + 1 }</p>
    </>
)

export default FirstApp;

//11. Las propTypes nos ayudan a especificar condiciones que las propiedades deben cumplir
FirstApp.propTypes ={
    //12. La propiedad debe ser string y debe ser obligatoria
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired, 


}

/*13. Para establecer valores por defecto a las propiedades se puede crear el -> CounterApp.jsx
      siguiente objeto y establecer dentro los valores por defecto

*/
FirstApp.defaultProps ={
    title: "No hay titulo",
    subTitle: 1234,

}