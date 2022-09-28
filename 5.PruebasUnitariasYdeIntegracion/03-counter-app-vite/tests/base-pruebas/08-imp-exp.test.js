
import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';


describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe de retornar un heroe por Id', () => { 

        const id = 1;
        const testHero = {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        }

        const hero = getHeroeById(id);

        expect(hero).toEqual(testHero);
        

    })

    test('getHeroeById debe de retonrar undifined si no existe el id', () => { 

        const id = 100;

        const hero = getHeroeById(id);

        //10. con .toBeFalsy se dice que se espera cualquier valor nulo, como null, undifined, false -> 09-promesas.test.js
        expect(hero).toBeFalsy();
        
    })

    test('getHeroesByOwner debe de retonrar un arreglo con los herores de DC', () => { 

        const heroesDC = heroes.filter( heroe => heroe.owner == "DC");

        const getHeroesByOwnerDC = getHeroesByOwner('DC');

        expect(getHeroesByOwnerDC).toEqual(heroesDC);
        expect(getHeroesByOwnerDC.length).toBe( 3 );
        
    })

    test('getHeroesByOwner debe de retonrar un arreglo con los herores de Marvel', () => { 

        const heroesMarvel = heroes.filter(heroe => heroe.owner == "Marvel");

        const getHeroesByOwnerMarvel = getHeroesByOwner('Marvel');


        expect(getHeroesByOwnerMarvel).toEqual(heroesMarvel);
        expect(getHeroesByOwnerMarvel.length).toBe( 2 );
        
    })
})