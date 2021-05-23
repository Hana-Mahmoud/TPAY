<template>
  <div>
    <Header
      @toggle-add-game="toggleAddgame"
      :showAddgame="showAddgame"
      @toggle-elipse="toggleElipse"
      :showElipsesV="showElipsesV"
      title="Menu"
    />
    <div v-for="game in filteringData" :key="game.id"> 
         <div >
             <img :src="game.thumbnail"/>
         </div>
         <div id="container">
              <p id="title">{{ game.title }}</p>
              <p id="genre">{{ game.genre }}</p>
               <p id="desc">{{ game.short_description }}</p>
         </div>
    </div>

    <div class="container">
      <Recommendations />
    </div>
  </div>
</template>

<script>
import Recommendations from "../components/Recommendations";
import Header from "../components/Header";
export default {
  name: "SingleGame",
  components: {
    Header,
    Recommendations,
  },
  computed: {
    filteringData() {
      return this.$store.state.games.filter(
        (game) => game.id == this.$route.params.id
      );
    },
  },
};
</script>

<style></style>
