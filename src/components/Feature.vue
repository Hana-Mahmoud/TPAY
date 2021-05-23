<template>
  <div>
   
    <div :key="game.id" v-for="game in oneData">
      <img id="image" :src="game.thumbnail" :alt="game.id" />
<div  id="r">
      <p id="title">{{ game.title }}</p>
<p id="genre">{{ game.genre }}</p>
<p id="desc">{{ game.short_description }}</p>
      <ButtonGame :id="game.id"/>
</div>
    </div>
  </div>
</template>

<script>
import ButtonGame from './ButtonGame'
export default {
  name: "Feature",
components:{
    ButtonGame
  },
  computed: {
   oneData() {
       return this.$store.state.games.filter(
          (game) => game.id===65
        );
   }
  }
        };
</script>
<style scoped>
#image{
  width: 559px;
  height: 209px;
  border-radius: 0px;
  margin: 0 29px 0 0;
}
#title{
  width: 130px;
  height: 18px;
  margin: 11px 29px 22px 30px;
  font-family: Tajawal;
  font-size: 19px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.05;
  letter-spacing: 0.2px;
  text-align: left;
  color: #3c3c3d;
}
#r{
  display: inline;

}
#genre{
  font-family: Tajawal;
  font-size: 14.4px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  margin: 34px 77px 5px 30px;
  line-height: 1.32;
  letter-spacing: normal;
  text-align: left;
  color: #444242;
}
#desc{width: 150px;
  height: 57px;
  margin: 5px 0 5px 30px;
  font-family: Tajawal;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: left;
  color: #444242;
  overflow: hidden;
}
.btn{
    width: 160px;
  height: 33px;
  padding: 9.6px 46.9px 4.4px 35.1px;
  margin-right: 5px;
  text-align: left;
 
}
</style>
