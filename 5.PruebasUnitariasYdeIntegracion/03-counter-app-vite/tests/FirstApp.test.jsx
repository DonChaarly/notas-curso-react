//14. Para hacer pruebas del dom se utiliza react-testing-library

import { render } from "@testing-library/react"
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
        const {container, getByText } = render(<FirstApp title={title} subTitle={subTitle}/>); 

        const h3 = container.querySelector('h3');

        expect(h3.innerHTML).toContain(title);
        expect(getByText(title)).toBeTruthy();
    })
})