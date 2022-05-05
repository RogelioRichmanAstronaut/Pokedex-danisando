<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <RouterLink :to="{ name: 'about', params: { id:id } }">
      <div className="PokeCard" 
      :key="nombre" 
      :style="{ background: bg }">
          <img className="pokeIcon" src="@/assets/pokeball_icon.svg" />
        <div className="pcLeft">
          <h2 className="pokeName">{{nombre}}</h2>
          <MiniCardSM v-for="tipo in tipos" :key="tipo" 
          :tipo="tipo"/>
        </div>
        <div className="pcRight">
          <h3 className="pokeID">N°{{id}}</h3>
          <img className="pokeImg" :src="img" />
        </div>
      </div>
    </RouterLink>
</template>

<script>
import MiniCardSM from "./MiniCardSM.vue";
 export default {
    name: "PokeCards",
    props: ["nombre", "bg", "id", "img", "tipos", ],
    components: { MiniCardSM }
}
</script>

<style>
.PokeCard{
  cursor:pointer;
  position: relative;
  z-index: 1;
  width: 178px;
  height: 104px;
  margin-bottom: 5%;
  background: transparent linear-gradient(59deg, #48D0B0 0%, #33CBA7 78%, #00BE91 100%) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 8px;
  display: flex;
  justify-content:space-between;
}
.pcLeft{
  margin-left: 5px;
  color:white;
}
.pokeID{
  margin-top:5px;
  margin-right:6px;
  text-align:end;
}
.pokeName{
  margin-top:5px;
}
.pcRight{
  position:relative;
  padding-right: 4px;
  color:white;
}
.pokeImg{
  z-index:3;
  position:relative;
  height:75%;
}
.pokeIcon{
  position:absolute;
  right:4px;
  bottom:10px;
  opacity:0.3;
}
</style>