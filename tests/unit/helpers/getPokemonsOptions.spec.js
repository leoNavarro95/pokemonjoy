
import getPokemonOptions, { getPokemons, getPokemonNames } from "@/helpers/getPokemonsOptions";

describe( 'getPokemonsOptions helpers ', () => {
    
    test( 'debe regresar un arreglo de numeros', () => {
        
        const pokemonsIDsArr = getPokemons()
        
        // expect( pokemonsIDsArr.length ).toBe( 650 )
        // expect( pokemonsIDsArr[0] ).toBe(1)
        // expect( pokemonsIDsArr[1] ).toBe(2)
        // //...
        // expect( pokemonsIDsArr[649] ).toBe(650)
        
        for (let index = 0; index < pokemonsIDsArr.length; index++) {
            
            expect( pokemonsIDsArr[index] )
            .toBe(index+1)
            
        }
    })

    test( 'debe retornar un arreglo con 4 elementos que sean nombres de pokemons', async () => {
        const pokemons = await getPokemonNames([1,2,3,4])
        
        expect(pokemons).toStrictEqual([
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
          ])
    })

    test( 'getPockemonOptions debe de retornar un arreglo mezclado ', async() => {
        
        const pokemons = await getPokemonOptions()

        // se comprueba que tenga 4 pokemons
        expect(pokemons.length).toBe(4)

        // se comprueba que cada parametro id sea numero y que cada prametro name sea String
        expect(pokemons).toEqual(
            [
                { 
                    name: expect.any(String), 
                    id: expect.any(Number) 
                },
                { 
                    name: expect.any(String), 
                    id: expect.any(Number) 
                },
                { 
                    name: expect.any(String), 
                    id: expect.any(Number) 
                },
                { 
                    name: expect.any(String), 
                    id: expect.any(Number) 
                },
            ]          
        )
    })
})