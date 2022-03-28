import {shallowMount} from '@vue/test-utils';
import PokemonOptions from '@/components/PokemonOptions';

import {mockPockemons} from '../mocks/pokemons.mock';

describe( ' PokemonOptions components ', () => {

    let wrapper

    beforeEach(()=>{
        wrapper = shallowMount(PokemonOptions,{
            props:{
                pokemons: mockPockemons
            }
        })
    })

    test( ' debe hacer match con el snapshot ', () => {
        console.log(wrapper.html)

        expect(wrapper.html).toMatchSnapshot()
    })

    test( 'Debe mostrar los 4 pokemons correctamente', () => {

        // q existan 4 li; cada uno con su respectivo pokemon
        const liTags = wrapper.findAll('li')
        expect( liTags.length ).toBe(4)

        expect(liTags[0].text()).toBe( 'bulbasaur' )
        expect(liTags[1].text()).toBe( 'ivysaur' )
        expect(liTags[2].text()).toBe( 'venusaur' )
        expect(liTags[3].text()).toBe( 'charmander' )  
    })

    test( 'debe de emitir "selection" con sus respectivos parametros al hacer click en cada li', () => {
        
        const [li1, li2, li3, li4] = wrapper.findAll( 'li' )

        //se hace el estímulo sobre los objetos de prueba, en este caso sse dispara el evento click sobre cada uno de los li
        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')

        // assertion, se comprueba los resultados esperados ante el estimulo
        //wrapper.emitted('nombreEventoEmitido')
        expect( wrapper.emitted('selection').length).toBe(4)//se espera que se emita el evento 'selection' cuatro veces, dado los estimulos
        
        //se comprueba que cada uno de los eventos emita el valor correcto segun los valores en pokemons.mock.js
        expect( wrapper.emitted('selection')[0] ).toEqual([1])
        expect( wrapper.emitted('selection')[1] ).toEqual([2])
        expect( wrapper.emitted('selection')[2] ).toEqual([3])
        expect( wrapper.emitted('selection')[3] ).toEqual([4])

    })
})