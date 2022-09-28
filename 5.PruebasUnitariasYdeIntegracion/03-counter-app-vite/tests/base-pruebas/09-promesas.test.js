import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";


describe('Pruebas en 09-promesas', () => {

    /*11. Para evaluar funcinoes asincronas -> 11-async-await.test.js
          Los bloques test pueden recibir especificar un atributo done el cual es una 
          funcion la cual se llama para que la prueba sepa cuando termino*/
    test('getHeroesByIsAsync debe de retornar un heroe', (done) => {

        const id = 1;

        getHeroeByIdAsync(1)
            .then( hero =>{
                expect(hero).toEqual({
                    id:1,
                    name: "Batman",
                    owner: "DC"
                });
                done();
            });

    })

    test('getHeroesByIsAsync debe de retornar un error si heroe no existe', (done) => {

        const id = 100;

        getHeroeByIdAsync(id)
            .then( hero =>{
                expect(hero).toBeFalsy();
                done();
            })
            .catch( error => {
                expect( error ).toBe(`No se pudo encontrar el héroe ${id}`);
                done(); 
            });

    })
});