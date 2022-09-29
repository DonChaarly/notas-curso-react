//14. Para hacer pruebas del dom se utiliza react-testing-library

import { render, screen } from "@testing-library/react"
import FirstApp from "../src/FirstApp"

describe('Pruebas en <FirstApp />', () => { 
    test('debe de hacer match con el snapshot', () => {  
        
        const title = "Hola, soy Vegeta";
        const subTitle = 123
        //15. Con react-testing-library tenemos la funcion render
        //16. Esta funcion regresa muchos atributos entre estos el container, el cual contiene toda la informacino de los nodos del componente
        const {containter} = render(<FirstApp title={title} subTitle={subTitle}/>); 

        //17 La funcion toMatchSnapshot toma una fotografia la primera vez que se ejecuta y la guarda en la carpeta __snapshots__
        //18. Si el componente cambia, esta prueba no pasara a menos que se actualice el snapshot
        expect(containter).toMatchSnapshot();
    })

    test('debe de mostrar el titulo en un h1', () => {  
        const title = "Hola, soy Vegeta";
        const subTitle = 123

        //19. A aprte del container se tiene varias funciones como el getByText que recupera un nodo que contiene el texto especificado
        const {container, getByText, getByTestId } = render(<FirstApp title={title} subTitle={subTitle}/>); 

        //20. Para recuperar un elemento del DOM se puede utilizar el container el cual tiene varios metodos como si fuera un docuemnt. -> FirstApp.jsx
        const h3 = container.querySelector('h3');

        expect(h3.innerHTML).toContain(title);
        expect(getByText(title)).toBeTruthy();

        //22. La funcion getByTestId proporcionada por render tambien nos sirve para recuperar elementos del DOM, pero estos deben tener la propiedad data-testid
        expect( getByTestId('test-tittle').innerHTML).toContain(title);
    })

    test('debe de mostrar el subtitulo mostrado por props', () => {  
        const title = "Hola, soy Vegeta";
        const subTitle = 123
        
        const { getAllByText } = render(
            <FirstApp 
                title={title} 
                subTitle={subTitle}
            />
        ); 

        //23. La funcion getAllByText de render regresa un arreglo de todos los elementos que tiene el texto especificado
        expect(getAllByText(subTitle + 1).length).toBe(1);
    })

    test('debe de mostrar el mensaje hola, soy goku', () => {  
        const title = "hola, soy goku";
        const subTitle = 123
        
        //24. El objeto screen junto con render nos da acceso al DOM como el container, ademas esta tiene todos los metodos que regresa el render
        render( <FirstApp title={title} subTitle={subTitle}/>)
        expect( screen.getByText(title)).toBeTruthy();
    })
})