<template>
  <div className="MiniCardMD" :style="{ background: color }">
    <p className="mcType">{{tipo}}</p>
  </div>
</template>

<script>
 export default {
     name: 'MiniCardMD',
     props: ['tipo'],
     data(){
       return {
         color:""
       }
     },
     created(){
      const coloresTipoEs= {
      'Eléctrico': 'linear-gradient(71.11deg, rgba(255, 194, 30, 0.69) 4.19%, rgba(223, 163, 0, 0.63) 13.03%, #DFA300 57.76%, rgba(223, 163, 0, 0.9) 86.89%, rgba(223, 163, 0, 0.88) 94.41%)',
      'Normal' : '#B09398', 
      'Fuego' : 'linear-gradient(71.11deg, rgba(255, 39, 39, 0.69) 4.19%, rgba(255, 39, 39, 0.72) 13.03%, rgba(255, 39, 39, 0.85) 57.76%, rgba(255, 39, 39, 0.79) 86.89%, rgba(255, 39, 39, 0.88) 94.41%)',
      'Agua' : 'linear-gradient(71.11deg, rgba(0, 110, 209, 0.52) 4.19%, rgba(0, 110, 209, 0.54) 13.03%, rgba(0, 110, 209, 0.85) 57.76%, rgba(0, 110, 209, 0.79) 86.89%, rgba(0, 110, 209, 0.88) 94.41%)',
      'Hielo': 'linear-gradient(71.11deg, rgba(64, 224, 208, 0.82) 4.19%, rgba(0, 136, 255, 0.5) 13.11%, rgba(64, 224, 208, 0.98) 86.89%, #40E0D0 94.41%)',
      'Roca': 'linear-gradient(71.11deg, rgba(139, 140, 122, 0.69) 4.19%, rgba(139, 140, 122, 0.72) 13.03%, rgba(139, 140, 122, 0.85) 57.76%, rgba(139, 140, 122, 0.79) 86.89%, rgba(139, 140, 122, 0.88) 94.41%)',
      'Volador': 'linear-gradient(71.11deg, rgba(51, 60, 70, 0.69) 4.19%, rgba(51, 60, 70, 0.72) 13.03%, rgba(51, 60, 70, 0.85) 57.76%, rgba(51, 60, 70, 0.79) 86.89%, rgba(51, 60, 70, 0.88) 94.41%)',
      'Planta': 'transparent linear-gradient(59deg, #48D0B0 0%, #33CBA7 78%, #00BE91 100%) 0% 0% no-repeat padding-box',
      'Psíquico': 'linear-gradient(71.11deg, rgba(255, 0, 204, 0.69) 4.19%, rgba(255, 0, 204, 0.72) 13.03%, rgba(255, 0, 204, 0.85) 57.76%, rgba(255, 0, 204, 0.79) 86.89%, rgba(255, 0, 204, 0.88) 94.41%)',
      'Fantasma': 'linear-gradient(71.11deg, rgba(86, 29, 37, 0.69) 4.19%, rgba(86, 29, 37, 0.72) 13.03%, rgba(86, 29, 37, 0.85) 57.76%, rgba(86, 29, 37, 0.79) 86.89%, rgba(86, 29, 37, 0.88) 94.41%)',
      'Insecto': 'linear-gradient(71.11deg, rgba(42, 156, 43, 0.69) 4.19%, rgba(42, 156, 43, 0.72) 13.03%, rgba(42, 156, 43, 0.85) 57.76%, rgba(42, 156, 43, 0.79) 86.89%, rgba(42, 156, 43, 0.88) 94.41%)',
      'Veneno': 'linear-gradient(71.11deg, rgba(104, 109, 255, 0.69) 4.19%, rgba(104, 109, 255, 0.72) 13.03%, rgba(104, 109, 255, 0.85) 57.76%, rgba(104, 109, 255, 0.79) 86.89%, rgba(104, 109, 255, 0.88) 94.41%)',
      'Tierra': 'linear-gradient(71.11deg, rgba(116, 89, 41, 0.69) 4.19%, rgba(116, 89, 41, 0.72) 13.03%, rgba(116, 89, 41, 0.85) 57.76%, rgba(116, 89, 41, 0.79) 86.89%, rgba(116, 89, 41, 0.88) 94.41%)',
      'Dragon': 'linear-gradient(71.11deg, rgba(218, 98, 125, 0.69) 4.19%, rgba(218, 98, 125, 0.72) 13.03%, rgba(218, 98, 125, 0.85) 57.76%, rgba(218, 98, 125, 0.79) 86.89%, rgba(218, 98, 125, 0.88) 94.41%)',
      'Acero': 'linear-gradient(71.11deg, rgba(29, 138, 153, 0.69) 4.19%, rgba(29, 138, 153, 0.72) 13.03%, rgba(29, 138, 153, 0.85) 57.76%, rgba(29, 138, 153, 0.79) 86.89%, rgba(29, 138, 153, 0.88) 94.41%)',
      'Luchador': 'linear-gradient(71.11deg, rgba(47, 47, 47, 0.69) 4.19%, rgba(47, 47, 47, 0.72) 13.03%, rgba(47, 47, 47, 0.85) 57.76%, rgba(47, 47, 47, 0.79) 86.89%, rgba(47, 47, 47, 0.88) 94.41%)',
      }
       this.color = coloresTipoEs[this.tipo]
     }
 }
</script>

<style>
.MiniCardMD{
  width: 119px;
  height: 24px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:10px;
  margin-right:5px;
}
.mcType{
  color:white;
}
</style>