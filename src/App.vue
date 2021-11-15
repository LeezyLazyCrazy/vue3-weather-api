<template>
  <div id="wrapper">
    <RouterView />
  </div>

</template>


<script>
export default {
  data(){
    return{};
  },
};
</script>


<style lang="scss" scoped>
  #wrapper{
    position: relative;
    width: 100%;
    height: 100vh;
    background-color:rgb(201, 201, 201);
  }
</style>