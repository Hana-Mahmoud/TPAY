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
.mycontainer {
  height: 305px;
  
  margin: auto;
  margin-bottom: 30px;
  padding: 10px 12px 38px 38px;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(112, 112, 112, 0.459);
  background-color: #ffffff;
  overflow: hidden;
} 
img {
  width: 134px;
  height: 134px;
  border-radius: 12px;
}
#title {
  height: 39px;
  font-family: Tajawal;
  font-size: 14.4px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.32;
  letter-spacing: normal;
  text-align: left;
  color: #444242;
  overflow: hidden;
  margin-top:3px;
}
#card {
  margin: 7px;
  width: auto;
  height: auto;
  display: inline-block;
  text-align: center;
 padding-bottom: 15px; 
}
.mybutton {
  width: 133px;
  height: 33px;
  margin: 0px 0 0 1px;
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
.mybutton:focus {
  outline: none;
}
.mybutton:active {
  transform: scale(0.98);
}
.mybutton-block {
  display: block;
  width: 100%;
}
#left {
  font-size: 18px;
  font-family: Tajawal;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: -0.2px;
  color: #232222;
  width: auto;
}
#right {
  font-family: Tajawal;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: #572589;
  width: auto;
}
#searchtext {
  width: 20%;
  height: 6%;
  border: none;
  box-shadow: 0px 1px 3px rgba(66, 66, 66, 0.452);
  position: absolute;
  top: 1.4%;
  left: 35%;
  z-index: 3;
}
#droppanel {
  width: 40%;
  height: 45%;
  box-shadow: 0px 1px 3px rgba(66, 66, 66, 0.452);
  border-radius: 10px;
  background-color: white;
  position: absolute;
  top: 6%;
  left: 50%;
  z-index: 3;
  text-align: center;
}
#panel1 {
  font-size: 14px;
  padding-top: 20px;
  padding-left: 10px;
  color: rgba(141, 141, 141, 0.527);
  text-align: left;

}
.label {
  font-size: 11px;
  padding-left: 10px;
  text-align: left;
  margin-bottom: -1px;
}
input {
  width: 100%;
  padding-right: 35%;
  font-size: 18px;
  border: none;
  border-bottom: 2px solid black;
  padding-top: 5px;
  margin-bottom: 15px;
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
  width: 90%;
  text-align: center;
  margin: auto;
}
#signup {
  color: rgb(54, 13, 54);
  text-align: center;
  font-size: 14px;
  padding-top: 20px;
}
#eye {
  position: absolute;
  right: 8%;
  top:46%
}

#genre{
  font-family: Tajawal;
  font-size: 14.4px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.32;
  letter-spacing: normal;
  color: #444242;
   overflow: hidden;
   margin-top: -12px;
}
#desc{
  height: 57px;
  font-family: Tajawal;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: normal;
  color: #444242;
  overflow: hidden;
}

</style>
