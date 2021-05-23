<template>
<router-link :to="`/${id}`">
  <button class="mybutton">MORE INFO</button>
</router-link>
</template>

<script>
export default {
name:'ButtonGame',
props:{
    id:Number
}
}
</script>

<style>

</style>