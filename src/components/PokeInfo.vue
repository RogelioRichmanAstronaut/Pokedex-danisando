<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <main className="pokeInfo" :style="{ background: pokemon.color }">
        <div className="top-section">
            <div className="header2">
                <RouterLink :to="{ name: 'home' }">
                    <img className="backIcon" src="@/assets/back.svg"/>
                </RouterLink>
                <img @click="copy" className="shareIcon" src="@/assets/share.svg"/>
            </div>
            <div className="piUpText">
                <h1 className="upPokeName">{{pokemon.nombre}}</h1>
                <p clasName="upPokeId">N°{{pokemon.id}}</p>
            </div>
            <img className="piPokeIcon" src="@/assets/pokeball_icon.svg" width="209" height="209" />
            <div className="piPokeDesc">
                <p className="desc">{{pokemon.desc}}</p>
            </div>
            <img className="piPokeImg" :src="pokemon.img" />
        </div>
        <div v-bind:class="{ loadingBottom: preloading, 'bottom-section': !preloading }">
            <div v-bind:class="{ preloading: preloading, 'pokeData': !loading, 'loadingData': loading }">
                <img v-bind:class="{ loadingPoke: loading, 'loadingPokeF': !loading }" src="@/assets/pokeball_loader.svg" width="100" height="100" />

                <div v-bind:class="{ preloadingInfo: loading, 'pdDataLinks': !loading }">
                    <p @click="showPokeInfo" v-bind:class="{ active: !evo, 'dlBasic': '10px' }">Pokemón</p>
                    <p @click="showEvoInfo" v-bind:class="{ active: evo, 'dlEvo': '10px' }">Evolución</p>
                </div>
                <Transition>
                <div v-if="!evo" v-bind:class="{ preloadingInfo: loading, 'pdDataMon': !loading }">
                    <PokeInfoBasic 
                    :categoria="pokemon.categoria"
                    :altura="pokemon.altura"
                    :peso="pokemon.peso"
                    :habilidad="pokemon.habilidad"
                    :tipos="pokemon.tipos"
                    :debilidades="pokemon.debilidades"
                    />
                </div>
                
                <div v-else className="pdDataEvo">
                    <PokeEvoBasic 
                    :evoIMG="pokemon.evoIMG"
                    :evoTipo="pokemon.evoTipo"
                    :evoName="pokemon.evoName"
                    :evoID="pokemon.evoID"
                    />
                </div>
            </Transition>
            </div>
        </div>
    </main>
</template>

<script>
import PokeInfoBasic from "./PokeInfoBasic.vue";
import PokeEvoBasic from "./PokeEvoBasic.vue";
    export default {
    name: "Pokeinfo",
    props: ["pokemon"],
    data() {
        return {
            evo: false,
            preloading: true,
            loading: true,
        };
    },
    methods: {
        showEvoInfo() {
            this.evo = true;
        },
        showPokeInfo() {
            this.evo = false;
        },
        copy(){
            var send =""
            send =  "Nombre: "+ this.pokemon.nombre + ", ID: "+ this.pokemon.id +", Tipo: "+ this.pokemon.tipos + ", Categoria: "+ this.pokemon.categoria + ", Altura: "+ this.pokemon.altura + " m, Peso: "+ this.pokemon.peso + " kg, Debilidades: "+ this.pokemon.debilidades + ", Nombre Evolución: "+ this.pokemon.evoName + ", ID Evolución: "+ this.pokemon.evoID + ", Tipo Evolución: "+ this.pokemon.evoTipo
            // console.log(str)
            this.copyURL(send)
        },
        async copyURL(mytext) {
        try {
            await navigator.clipboard.writeText(mytext);
            alert('Copied');
            } catch($e) {
            alert('Cannot copy');
            }
        }
    },
    created(){
        setTimeout(() => {
            this.preloading = false
        }, 1000);
        setTimeout(() => {
            this.loading = false
        }, 4000);
    },
    components: { PokeInfoBasic, PokeEvoBasic }
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  display:none;
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  display:none;
  opacity: 0;
}
.pokeInfo{
  position:relative;
  /* max-width:1000px; */
  /* max-height:926px; */
  width:100vw;
  height:100vh;
  /* display:flex-end; */
  background-color: #fff;
  overflow-x:hidden;
  display: block;
}
.top-section{
    height:38%;
    min-height:340px;
}
.bottom-section{
    height:62%;
    min-height:5px;
}
.header2{
    position:relative;
    width:90%;
    min-height:65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin:0 auto;
}
.backIcon{
    cursor:pointer;
    height:20px;
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.25));
}
.shareIcon{
    cursor:pointer;
    height:26px;
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.25));
}
.piUpText{
    text-shadow: 0px 3px 6px #00000029;
    color:white;
    display: flex;
    width:90%;
    align-items:center;
    justify-content:space-between;
    margin:0 auto;
}
.piPokeDesc{
    color:white;
    width:90%;
    margin:0 auto;
}
.desc{
    width:90%;
}
@media (max-width: 310px) {
    .desc{
        width:100%;
    }
}
/* .pokeIcon{
    position:relative;
    display: flex;
    justify-content: end;
} */
.piPokeIcon{
    position:absolute;
    opacity:0.3;
    right:0px;
}
.piPokeImg{
    position: relative;
    display: flex;
    margin: 0 auto;
    height:197px;
    transform: translateY(-5%);
    z-index:1;
}
.pokeData{
    position: relative;
    display: block;
    background-color: #fff;
    width:100%;
    height:100%;
    min-height:500px;
    /* height:60%; */
    border-radius: 24px 24px 0px 0px;
    /* transform: translateY(-8%); */
    /* bottom:-95%; */
    /* overflow-y: auto; */
}
.pdDataEvo{
    margin:0 auto;
    width:90%;
    display: block;
    align-items: center;
    justify-content: center;
    margin-top:30px;
}
.loadingData{
    position: relative;
    display: flex;
    background-color: #fff;
    width:100%;
    height:100%;
    /* height:60%; */
    border-radius: 24px 24px 0px 0px;
    transition: 0.3s ease-out;
    align-items: center;
    justify-content:center
}
.pdDataLinks{
    display: flex;
    height:20%;
    width:90%;
    margin:0 auto;
    align-items: flex-end;
    transition: 0.3s ease-in-out;
}
.dlBasic{
    cursor:pointer;
    margin-right:15px;
    padding-bottom:10px;
    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );
}
.dlEvo{
    cursor:pointer;
    padding-bottom:10px;
    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );
}
.active{
    border-bottom: 2px solid #6C79DB;
}

.preloading{
    transform: translateY(95%);
    height:100%;
    border-radius: 24px 24px 0px 0px;
    background-color: white;
    transition: 5.5s ease;
    /* animation: rotating 2s 0.25s linear infinite; */
    overflow-y:hidden;
}
.preloadingInfo{
    display:none;
}

.loadingBottom{
    overflow-y:hidden;
    height:62%;
    min-height:5px;
}
.loadingPoke{
    display: flex;
    align-items:center;
    justify-content:center;
    margin:0 auto;
    animation: rotating 1.1s 0.25s linear infinite;
}
.loadingPokeF{
    display:none;
}
/* .rotate{
    animation: rotating 2s 0.25s linear infinite;
} */
@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>