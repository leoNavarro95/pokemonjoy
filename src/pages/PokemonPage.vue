<template>

    <h1 v-if="!pokemon" >Obteniendo datos...</h1>
    <div v-else >
        <h1> ¿Qué pokémon es este?</h1>
        
        <pokemon-picture 
            :pokemon-id="pokemon.id" 
            :show-pokemon="showPokemon"  
        />

        <pokemon-options 
            :pokemons="pokemonArr"
            :disabled="showAnswer" 
            @selection = "checkAnswer($event)" 
        />

        <template v-if="showAnswer">
            <h2 class="fade-in">{{message}}</h2>
            <button class="btn nice-btn" @click="newGame">siguiente pregunta</button>
        </template>

    </div>

    
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'
import getPokemonOptions from '@/helpers/getPokemonsOptions.js'


export default {

    components:{
        PokemonPicture,
        PokemonOptions
    },

    data(){
        return{
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },

    methods:{
        
        async mixPokemonArray(){
            this.pokemonArr = await getPokemonOptions()
            
            const rndInt = Math.floor( Math.random() * 4 ) //se genera un numero aleatorio entre 0 y 3
            //con el indice aleatorio generado entre 0 y 3 se selecciona un pokemon del arreglo
            this.pokemon = this.pokemonArr[ rndInt ]
        },

        checkAnswer( selectedID ){
            // this.showPokemon = (selectedID === this.pokemon.id) ? true : false
            this.showPokemon = true;
            this.showAnswer = true;

            if( selectedID === this.pokemon.id ){
                this.message = `Respuesta correcta: ${this.pokemon.name}`
            } else{
                this.message = `Nop :(  La respuesta es: ${this.pokemon.name}`
            }
        },

        newGame(){
            this.pokemon = null
            this.showPokemon = false
            this.showAnswer = false
            this.mixPokemonArray()
        }
    },

    // mounted es un hook del ciclo de vida de Vue, se ejecuta cuando toda la web se ha renderizado
    mounted(){
        this.mixPokemonArray()
    }

}
</script>

<style scoped>
.btn {
  box-sizing: border-box;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: transparent;
  border: 2px solid #e74c3c;
  border-radius: 0.6em;
  color: #e74c3c;
  cursor: pointer;
  justify-content: center;
  -webkit-align-self: center;
      -ms-flex-item-align: center;
          align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}
.btn:hover, .btn:focus {
  color: #fff;
  outline: 0;
}

.nice-btn {
  border-color: #3498db;
  color: #fff;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
}
.nice-btn:hover {
  box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
}

</style>
