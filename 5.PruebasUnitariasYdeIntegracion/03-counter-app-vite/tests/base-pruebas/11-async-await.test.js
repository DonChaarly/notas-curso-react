import { getImagen } from "../../src/base-pruebas/11-async-await";


describe('Pruebas en 02-template-string', () => {

    /*12. Otra forma un poco mejor de probar funciones asyncronas es 
          configurando las dependencias y archivos necesarios y
          colocando la palabra async en la defincion de la prueba y await en la funcion asyncrona */    
    test('getImagen debe de retornar un error si no tenemos api key', async () => {

        //13. Se coloca await en la funcion asyncrona -> FirstApp.test.jsx
        const url =  await getImagen();
        expect( typeof url ).toBe('string');

    });
})