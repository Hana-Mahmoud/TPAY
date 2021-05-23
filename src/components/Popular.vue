<template>
  <div class="mycontainer   col-lg-7 col-md-8 col-sm-10">
     <div class="row">
    <p id="left" class="col-lg-10 col-md-6 col-sm-6 " >Most Popular</p>
    <p id="right" class="col-lg-2 col-md-4 col-sm-4  offset-sm-2 offset-md-2 offset-lg-0">SEE ALL <i id="icon" class="fas fa-chevron-right"></i></p>
     </div>
    
    <div class="row">
    <div id="card" class="col-lg-2 col-md-3 col-sm-3 mx-sm-3 mx-lg-2" :key="game.id" v-for="game in filteringData">
      <img  :src="game.thumbnail" :alt="game.id" />

      <h3 id="title">{{ game.title }}</h3>

      <ButtonGame   :id="game.id"/>
    </div>
    </div>
  </div>
</template>

<script>
import ButtonGame from './ButtonGame'
export default {
  name: "Popular",
  components:{
    ButtonGame
  },
   computed: {
   filteringData() {
       return this.$store.state.games.filter(
          (game) => game.genre==="MMORPG"
        );
       
    },
  }, 
  
};
</script>
