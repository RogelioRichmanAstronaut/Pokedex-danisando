<script setup>
import { store } from '../store/store'
import { useRoute } from "vue-router";
import PokeInfo from "../components/PokeInfo.vue";

</script>
<template>
  <main>
    <PokeInfo :pokemon="pokemon"/>
  </main>
</template>

<script>
export default {
  data() {
    return {
      store,
      id: 0,
      pokemon:{}
    }
  },
  created(){
    const route = useRoute();
    this.id = route.params.id
    this.pokemon = store.dataPokemones.find((p) => p.id === this.id)
  }
}
</script>

<style>
.about{
  width:100vw;
  height:100vh;
  background-color: #fff;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
