import { getSaludo } from "../../src/base-pruebas/02-template-string";



describe('Pruebas en 02-template-string', () => {

    test('GetSaludo debe retornar "hola Carlos"', () => {

        const name = "Carlos";
        const message = getSaludo(name);

        //4. Con expect se especifica lo que se espera recibir
        //5. Con la siguiente funcion lo que se recibira, hay diferentes funciones para indicar lo que se espera recibir -> -05.Funciones.test.js
        expect(message).toBe(`Hola ${name}`)

    })
})