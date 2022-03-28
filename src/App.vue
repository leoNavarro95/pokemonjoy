<template>
  <PockemonPage/>
</template>

<script>
import PockemonPage from './pages/PokemonPage.vue'

export default {
  name: 'App',
  components: {
    PockemonPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
