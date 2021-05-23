<template>
  <div class="mycontainer col-lg-7 col-md-8 col-sm-10">
    
      <div class="row" :key="game.id" v-for="game in oneData">
        <img class="col-lg-9 col-md-6 col-sm-6" :src="game.thumbnail" :alt="game.id" />
        <div class="col-lg-3 col-md-6 col-sm-6">
          <p id="title">{{ game.title }}</p>
          <p  id="genre">{{ game.genre }}</p>
          <p id="desc">{{ game.short_description }}</p>
           <p id="pu">{{ game.publisher }}</p>
          <ButtonGame :id="game.id" />
        </div>
      </div>
    
  </div>

</template>

<script>
import ButtonGame from "./ButtonGame";
export default {
  name: "Feature",
  components: {
    ButtonGame,
  },
  computed: {
    oneData() {
      return this.$store.state.games.filter((game) => game.id === 65);
    },
  },
};
</script>
<style scoped>
.mycontainer {
  height: 209px;
  padding-top: 0px;
  padding-left: 0px;
  margin-top: 45px;
}
img{
  width: 559px;
  height: 209px;
}
#title{

  margin: 11px 0px 0px 0px;
  padding-bottom: 0px;
  font-size: 19px;
  color: #3c3c3d;
}
#pu{
  margin-top: 4px;
  margin-bottom:4px ;
  font-family: Tajawal;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: normal;
  color: #a19c9c;
  overflow: hidden;
}
</style>
