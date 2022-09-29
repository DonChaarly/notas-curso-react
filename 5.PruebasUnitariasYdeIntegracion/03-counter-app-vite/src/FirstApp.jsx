import PropTypes from 'prop-types'

const newMessage = {
    message: "Hola Mundo",
    title: "Fernando"
};
const getMessages = () => "hola mundo";

 

const FirstApp = ({title, subTitle}) => (
    <>
        {/*21. La propiedad data-testid nos sirve para colocar un identificador y poder recuperar el elemento en las pruebas -> FirstApp.test.jsx  */}
        <h3 data-testid="test-tittle">{ title }</h3>
        <p>{ subTitle + 1 }</p>
    </>
)

export default FirstApp;

FirstApp.propTypes ={
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired, 


}

FirstApp.defaultProps ={
    title: "No hay titulo",
    subTitle: 1234,

}