<template>
  <div>
     
    <p id="left">Most Popular</p>
    <p id="right">SEE ALL <i id="icon" class="fas fa-chevron-right"></i></p>
    <br />
    
    <div id="card" :key="game.id" v-for="game in filteringData">
      <img :src="game.thumbnail" :alt="game.id" />

      <h3 id="title">{{ game.title }}</h3>
    <ButtonGame :id="game.id"/>
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
