import pokemonApi from '@/api/pokemonApi'

export const getPokemons = () => {

    // se crea un arreglo con 650 lugares undefined
    const pokemonArr = Array.from( Array( 650 ) ) 
    //se llena el arreglo con numeros 1,2,3...650
    return pokemonArr.map( (_, index) => index + 1 )

}

const getPokemonOptions = async () => {

    //se mezclan los numeros de los pokemos
    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
    //se cortan los primero cuatro numeros del arreglo de 650
    const pokemons = await getPokemonNames( mixedPokemons.splice( 0, 4 ) )

    // console.table(pokemons);
    return pokemons

}

export const getPokemonNames = async ( [pokemoA, pokemoB, pokemoC, pokemoD ] = [] ) => {
    
    // const resp = await pokemonApi.get('/1')
    
    //se define un arreglo de promesas para luego llamarla
    const promiseArr = [
        pokemonApi.get(`/${pokemoA}`),
        pokemonApi.get(`/${pokemoB}`),
        pokemonApi.get(`/${pokemoC}`),
        pokemonApi.get(`/${pokemoD}`),
    ]

    const [p1, p2, p3, p4] = await Promise.all( promiseArr )

    return [
        {name: p1.data.name, id: p1.data.id},
        {name: p2.data.name, id: p2.data.id},
        {name: p3.data.name, id: p3.data.id},
        {name: p4.data.name, id: p4.data.id}
    ]
}


export default getPokemonOptions