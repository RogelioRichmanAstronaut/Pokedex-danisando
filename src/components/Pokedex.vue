<template>
  <main className="pokedex">
    <div className="header">
      <img className="bars" src="@/assets/bars.svg"/>
      <img className="poke" src="@/assets/pokeball_icon.svg" width="342" height="342" />
    </div>
    <div className="Title">
      <h1>Pokedex</h1>
    </div>
    <div className="PokeCardsContainer">
      <PokeCards v-for="pokemon in dataPokemones" :key="pokemon.nombre" 
      :nombre="pokemon.nombre" 
      :id="pokemon.id" 
      :bg="pokemon.color"
      :img="pokemon.img"
      :tipos="pokemon.tipos"
      />
    </div>
  </main>
</template>

<script>
import PokeCards from "./PokeCards.vue";
 export default {
    name: "Pokedex",
    props: ["dataPokemones"],
    components: { PokeCards }
}
</script>

<style>
.pokedex{
  /* max-width:1000px; */
  /* max-height:926px; */
  width:100vw;
  height:100vh;
  /* display:flex-end; */
  background-color: #fff;
  overflow-x:hidden;
}
.header{
  position:relative;
  z-index:1;
  display:flex;
  width:90%;
  min-height:65px;
  align-items:end;
  justify-content:flex-end;

}
.bars{
  z-index:1;
   width:30px; 
   height:30px;
}
.poke{
  position: absolute;
  top:-121px;
  right:-157px;
  fill:black;
}
.Title{
  display:flex;
  color:#333C46;
  /* font-size: 40px; */
  padding-left:20px;
  margin-bottom:3vh;
}
.PokeCardsContainer{
  width:95%;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  margin: 0 auto;
}
  @media (max-width: 374px) {
    .PokeCardsContainer{
      justify-content:center;
    }
  }
</style>