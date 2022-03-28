<template>
  <div class="options-container">
    <ul :class="(disabled) ? 'notClickeable' : null ">
      
          <!-- se espera por el evento click, luego se emite otro evento llamado selection, con el valor del id del pokemon -->
      <li v-for="pokemon in pokemons" 
          :key="pokemon.id "
          @click=" $emit('selection', pokemon.id) "  >
        {{pokemon.name}}
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
    props:{
      pokemons:{
        type: Array,
        required: true
      },
    disabled:{
      type: Boolean,
      default: false
    },
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    /* display: flex; */
    justify-content: center;
    padding-left: 0px;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 2px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.500);
    color: #fff;
}

.options-container {
    display: flex;
    justify-content: center;
}

.notClickeable{
  /* se desabilita que se pueda clickear */
  pointer-events: none; 
}
</style>