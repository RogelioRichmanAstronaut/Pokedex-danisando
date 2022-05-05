<script setup>
import Pokedex from "../components/Pokedex.vue"
import { store } from '../store/store'
</script>
<template>
  <main>
    <Pokedex :dataPokemones="store.dataPokemones"/>
  </main>

</template>

<style>
.cargando{
  display: flex;
  color: white;
}
body{
  margin:0px;
  display: flex;
  justify-content: center;
  /* background-color: #f7f7f7; */
  background-color: black;
}
</style>
<script>
export default {
  data() {
    return {
      store,
    }
  },

}
</script>