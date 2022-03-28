import pokemonApi from "@/api/pokemonApi";

describe( 'pokemonApi', () => {
    test( ' axios debe de estar configurado el api de pokemons ', () => {
        
        // console.log(pokemonApi);
        expect( pokemonApi.defaults.baseURL )
        .toBe( 'https://pokeapi.co/api/v2/pokemon' )

    })
})