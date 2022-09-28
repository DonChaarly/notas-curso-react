import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";



describe('Pruebas en 07-deses-arr', () => { 
    test('debe retornar un strin y un numero', () => { 

        //7. Como la siguiente funcion retorna un arreglo, se puede desestrucutrar para obtener los valors en variables por separado
        const [letters, numbers] = retornaArreglo(); 
        
        //8. Evaluando el tipo de dato de los arcivos
        expect( typeof letters).toBe('string');
        expect( typeof numbers ).toBe('number');

        //9. Colcoar como valor a esperar cualquier string -> 08-imp-exp.test.js
        expect (letters).toEqual( expect.any(String));

    })
})