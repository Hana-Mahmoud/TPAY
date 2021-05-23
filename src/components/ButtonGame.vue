<template>
<router-link :to="`/${id}`">
  <button class="btn">MORE INFO</button>
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