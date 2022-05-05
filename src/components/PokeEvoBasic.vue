<template>
    <img className="ddIconBg" src="@/assets/pokeball_icon.svg" width="342" height="342"/>
    <img className="ddEvoImg" :src="evoIMG"/>
    <div className="ddEvoData">
        <h5>{{evoName}}</h5>
        <h6>N°{{evoID}}</h6>
    </div>
    <div className="ddEvoTypes">
        <div className="dtType">
            <MiniCardMD v-for="tipo in evoTipo" :key="tipo" 
        :tipo="tipo"
        />
        </div>
    </div>
</template>
<script>
import MiniCardMD from "./MiniCardMD.vue";
    export default {
    name: "PokeEvoBasic",
    props: ["evoIMG", "evoTipo", "evoName","evoID"],
    components: { MiniCardMD }
}
</script>

<style>
.ddIconBg{
    position:absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    z-index:1;
    
}
.ddEvoImg{
    position:relative;
    display: flex;
    margin: 0 auto;

    width:257px;
    height:257px;
    z-index:2;
}
.ddEvoData{
    position:relative;
    z-index:2;
    display: flex;
    margin:0 auto;
    justify-content:center;
    align-items: center;
}
h6{
    margin-left:25px;
}
.ddEvoTypes{
    display: flex;
    margin: 0 auto;
}
.dtType{
    position:relative;
    z-index:2;
    display: flex;
    margin: 0 auto;
}
</style>