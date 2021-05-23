<template>
   <div>
    <Header
      @toggle-add-game="toggleAddgame"
      :showAddgame="showAddgame"
      @toggle-elipse="toggleElipse"
      :showElipsesV="showElipsesV"
      title="Menu"
    />
<Filter/>
    <input id="searchtext" v-show="showAddgame" type="text" name="searchText" />
    <div id="droppanel" v-show="showElipsesV">
      <p id="panel1">Please add your accout details</p>
      <p class="label">Username / Email</p>
      <input type="text" placeholder="Type your username here" />
      <p class="label">Password</p>
      <input type="text" placeholder="Type your password " /><i
        id="eye"
        class="fas fa-eye-slash"
      ></i>
      <p id="forgot">Forgot Password?</p>
      <button id="mybttnlogin" class="btn">LOGIN</button>
      <p id="signup">Dont have an account? Sign up!</p>
    </div>

     
      <Feature  />
      <Recommendations />   
      <Popular />

  </div>
</template>

<script>
import Recommendations from '../components/Recommendations';
import Popular from "../components/Popular";
import Feature from "../components/Feature";
import Header from "../components/Header";
import Filter from "../components/Filter";

export default {
name:"Home",
components:{
     Recommendations,
    Header,
    Popular,
    Feature,
    Filter
},
  data() {
    return {
      
      showAddgame: false,
      showElipsesV: false,
    };
  },
  methods: {
    toggleAddgame() {
      this.showAddgame = !this.showAddgame;
    },
    toggleElipse() {
      this.showElipsesV = !this.showElipsesV;
    },
  },
}
</script>

<style>

</style>