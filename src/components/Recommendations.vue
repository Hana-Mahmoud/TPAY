<template>
  <div id="container" class="row">
     <div class="col-8 offset-1  mb-3">
    <p id="left" >Most Recommended</p>
    <p id="right">SEE ALL <i id="icon" class="fas fa-chevron-right"></i></p>
     </div>
    
    <div id="card" class="row" :key="game.id" v-for="game in this.$store.state.games">
      <img class="col-2" :src="game.thumbnail" :alt="game.id" />

      <h3 id="title" class="col-2">{{ game.title }}</h3>

      <ButtonGame :id="game.id"/>
    </div>
  </div>
</template>

<script>
import ButtonGame from './ButtonGame'
export default {
  name: "Recommendations",
  components:{
    ButtonGame
  },
  data() {
    return {
      games:[]
   
    };
  },
 
};
</script>

