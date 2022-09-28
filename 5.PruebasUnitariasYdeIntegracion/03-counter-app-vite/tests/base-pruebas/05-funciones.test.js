import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";


describe('Pruebas en 05-funciones', () => {


    test('getUser debe de retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser(); 

        //6. Para evaluar un objeto se debe utilizar la funcion toEqual -> 07-deses-arr.test.js
        expect(getUser()).toEqual(testUser);

    });

    test('getUsuarioActivo debe retornar un objeto', () => { 

        const name = "Carlos";

        const testUser = {
            uid: 'ABC567',
            username: name
        };
        const user = getUsuarioActivo();

        expect(getUsuarioActivo(name)).toEqual(testUser);

    });
})