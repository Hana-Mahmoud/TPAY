<template>
<div id="gnr">
  <input  type="button"  :key="game.id"   :value="game.genre" v-for="game in filteringData"/>
</div>
</template>

<script>
export default {
  name: "Filter",
  
   computed: {
   filteringData() {
        return this.$store.state.games.filter(
          (game) => game.genre!=null )
    
    },
    
  },
  
};
</script>
<style scoped>
input{
  border: 1px solid rgb(182, 182, 182);
  border-radius:15px;
  padding: 2px 10px;
  margin:2px 4px;
  background-color: white;
  color: grey;
}
#gnr{
display: inline-flex;
width: 100%;
flex-shrink:0;
background-color: white;
overflow: scroll;
}
::-webkit-scrollbar{
    width: 10px;
}
::-webkit-scrollbar-track{
    background-color: transparent;
}
</style>