<template>
<div>
<span>
  <i @click="onClick()" id="icon" class="fas fa-search"></i>
  <i @click="onClickelipse()" class="fas fa-ellipsis-v"></i>
</span>
</div>
</template>

<script>
export default {
name:'Search'
,
methods:{
    onClick(){
        this.$emit('toggle-add-game')
    },
    onClickelipse(){
        this.$emit('toggle-elipse')
    }
    }
}
</script>

<style scope>
span{
    position: relative;
    margin-left: 47%;
}
#icon{
    padding-right: 24px;
   
}

</style>