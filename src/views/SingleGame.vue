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
         <div id="mycon" class="mycontainer col-lg-7 col-md-8 col-sm-10">
             <img :src="game.thumbnail"/>
         </div>
         <div id="mycoon" class="mycontainer col-lg-7 col-md-8 col-sm-10">
              <p id="title">{{ game.title }}</p>
              <p id="genre">{{ game.genre }}</p>
               <p id="desc">{{ game.short_description }}</p>
                <p id="desc">{{ game.developer }}</p>
                 <p id="desc">{{ game.publisher }}</p>
                 <p id="read">Read more</p>
         </div>
    </div>

    
      <Recommendations />
    
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

<style scoped>
#mycon {
  height: 209px;
  padding:0%;
  margin: auto;
  margin-bottom: 30px;
  margin-top: 20px;
}
img{
  width: 100%;
  height: 100%;
   border-radius: 0%;
}
#title{
font-size: 24px;
font-weight: normal;
}
#desc{
    font-size: 20px;
   
    height: 25px;
}
#mycoon {
  height: 249px;
}
#read{
    color:rgb(54, 13, 54); ;
}
</style>
