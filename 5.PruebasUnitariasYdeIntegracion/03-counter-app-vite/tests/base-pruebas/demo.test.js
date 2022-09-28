
//1. Se coloca un bloque describe para agrupar todas las pruebas del archivo
describe('Pruebas en <DemoComponent/>', () => {

    //2. Para hacer una prueba se coloca el comando test, el nombre de la prueba y el codigo a ejecutar
    test('Esta prueba no debe fallar', () =>{

        //3. Se siguen los pasos AAA
        //3.1 Inicializacion
        const message = 'Hola mundo';

        //3.2 Estimulo
        const message2 = message.trim();

        //3.3 Observar el comportamiento esperado -> 02.template-string.test.js
        expect( message ).toBe( message2);


    })

})

