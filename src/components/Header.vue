<template>
<div  id="nav" class="row bg-light">
  <router-link to="/" id="l" class="col-3 offset-2"><img :src="require('../assets/lg.png')" /></router-link>
  <div id="r" class="col-3 offset-2"><Search class="pt-3" @toggle-add-game="$emit('toggle-add-game')" @toggle-elipse="$emit('toggle-elipse')"/></div>
  </div>
</template>

<script>
import Search from './Search'


export default {
name:'Header'
,

components:{
    Search
}

}
</script>

<style  scoped>
#nav{
    width: auto;
    height: 80px;
    margin-bottom: 20px;
    background-color: rgba(252, 249, 238, 0.555);
}


img{
    width: 259px;
    height: 65px;
   
}
</style>