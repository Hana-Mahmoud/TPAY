<template>
<div  id="nav" class="row">
  <router-link to="/" id="l" class="col-3 offset-md-2 offset-sm-0"><img :src="require('../assets/lg.png')" /></router-link>
  <div id="r" class="col-3 offset-md-2 offset-sm-4"><Search class="pt-3" @toggle-add-game="$emit('toggle-add-game')" @toggle-elipse="$emit('toggle-elipse')"/></div>
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
    height: 70px;   
      box-shadow: 0px 1px 3px rgba(66, 66, 66, 0.452);
}
img{
    margin-left: 25%;
    width: 259px;
    height: 65px;  
}

</style>