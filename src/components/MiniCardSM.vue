<template>
  <div className="miniCardSm">
    <h3 className="mcType">{{tipo}}</h3>
  </div>
</template>

<script>
 export default {
     name: 'MiniCardSM',
     props: ['tipo']    
 }
</script>

<style>
.miniCardSm{
  width:70px;
  height:15px;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  border-radius: 3px;
  justify-content: center;
  margin-bottom:5px;
}
</style>