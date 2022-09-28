import PropTypes from 'prop-types'

const newMessage = {
    message: "Hola Mundo",
    title: "Fernando"
};
const getMessages = () => "hola mundo";

 

const FirstApp = ({title, subTitle}) => (
    <>
        <h3>{ title }</h3>
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