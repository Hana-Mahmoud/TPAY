<template>
 <router-view/>
</template>

<script>

export default {
  name: "App",
  components: {
   
  },
  mounted() {
    this.$store.dispatch("a");
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Tajawal:wght@200;400;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
#container {
  /* width: 777px; */
  height: 305px;
  margin: auto;
  margin-bottom: 30px;
  padding-top: 15px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
  overflow: hidden;
}
.Fcon{
  height: 209px; 
  padding-top: 0px;
  padding-left: 0px;
}
.btn {
  width: 133px;
  height: 33px;
  margin: 4px 0 0 1px;
  padding: 9.6px 31.4px 4.4px 23.6px;
  border: hidden;
  border-radius: 2px;
  background-color: #572589;
  font-family: "Tajawal", sans-serif;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.4px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
}
.mybttn:focus {
  outline: none;
}
.mybttn:active {
  transform: scale(0.98);
}
.mybttn-block {
  display: block;
  width: 100%;
}
#searchtext {
  width: 350px;
  height: 40px;
  border: none;
  box-shadow: 0px 1px 3px rgba(66, 66, 66, 0.452);
  position: absolute;
  top: 1.4%;
  left: 51%;
  z-index: 3;
}
#droppanel {
  width: 320px;
  height: 300px;
  box-shadow: 0px 1px 3px rgba(66, 66, 66, 0.452);
  border-radius: 10px;
  background-color: white;
  position: absolute;
  top: 7%;
  left: 57.2%;
  z-index: 3;
}
#panel1 {
  font-size: 14px;
  padding: 8px;
  color: rgba(141, 141, 141, 0.527);
}
.label {
  font-size: 10px;
  padding: 8px;
}
input {
  padding-right: 75px;
  font-size: 18px;
  border: none;
  border-bottom: 2px solid black;
  margin-left: 8px;
}
input::placeholder {
  color: #000;
}
#forgot {
  float: right;
  color: rgb(54, 13, 54);
  margin: 15px;
  font-size: 14px;
}
#mybttnlogin {
  display: block;
  width: 280px;
  text-align: center;
}
#signup {
  color: rgb(54, 13, 54);
  text-align: center;
  font-size: 14px;
}
#eye {
  position: absolute;
  right: 10%;
}
#card {
  margin: 7px;
  /* width: auto; */
  height: auto;
  display: inline-block;
  text-align: center;
  margin-top: 14px;
 padding-bottom: 15px; 
}

img {
  width: 134px;
  height: 134px;
  border-radius: 12px;
}
#title {
  width: 133px;
  height: 39px;
  font-family: Tajawal;
  font-size: 14.4px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.32;
  letter-spacing: normal;
  text-align: left;
  color: #444242;
  overflow: hidden;
}

#left {
  float: left;
  display: inline;
  font-size: 17px;
  margin-left: 22px;
  width: 176px;
  height: 22px;
  font-family: Tajawal;
  font-size: 17px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: -0.2px;
  text-align: left;
  color: #232222;
}
#right {
  float: right;
  display: inline;
  font-size: 16px;
  width: 100px;
  height: 21px;
  margin-right: 44px;
  font-family: Tajawal;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: right;
  color: #572589;
}

#icon {
  width: 7.4px;
  height: 12px;
  color: #572589;
}
#App{
  text-align: center;
}
</style>
