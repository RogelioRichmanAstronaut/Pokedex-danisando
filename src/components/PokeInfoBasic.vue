<template>
    <div className="dmStats">
        <div className="msNames">
            <h4>Categoría</h4>
            <h4>Altura</h4>
            <h4>Peso</h4>
            <!-- <h4>Habilidad</h4> -->
        </div>
        <div className="msPokeName">
            <p className="pokeP">{{categoria}}</p>
            <p className="pokeP">{{altura}} m</p>
            <p className="pokeP">{{peso}} kg</p>
            <!-- <p>{{habilidad}}</p> -->
        </div>
    </div>
    <div className="dmType">
        <p className="mtTitle">Tipo</p>
        <div className="mtTypes">
            <MiniCardMD v-for="tipo in tipos" :key="tipo" 
          :tipo="tipo"
          />
        </div>
    </div>
    <div className="dmType">
        <p className="mtTitle">Debilidad</p>
        <div className="mtTypes">
            <MiniCardMD v-for="tipo in debilidades" :key="tipo" 
          :tipo="tipo"
          />
        </div>
    </div>
</template>
<script>
import MiniCardMD from "./MiniCardMD.vue";
    export default {
    name: "PokeInfoBasic",
    props: ["categoria", "altura", "peso", "habilidad", "tipos", "debilidades"],
    components: { MiniCardMD }
}
</script>

<style>
.dmStats{
    display: flex;
    width:90%;
    margin:0 auto;
    margin-top:40px;
    padding-bottom:25px;
}
.msNames{
    display: grid;
    align-content: space-between;
}
h4{
    color: #333C4687;
    font-size: 15px;
    padding-bottom:5px;
}
.pokeP{
    padding-bottom:5px;
    color: #333C46;
}
.msPokeName{
    display: grid;
    align-content: space-between;
    margin-left:10%;
}
.dmType{
    display: block;
    width:90%;
    margin:0 auto;
    margin-bottom:20px;
}
.mtTypes{
    display: flex;
    flex-wrap: wrap;
}
</style>