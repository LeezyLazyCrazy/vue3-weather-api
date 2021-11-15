<template>
  <div id="wrap">
     <NavBar />
    <main>
     <WeatherParent />
    </main>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import WeatherParent from "../components/WeatherParent.vue";

export default {
    components: { NavBar, WeatherParent },
    Data(){
        return {};
    },
};
</script>

<style lang="scss" scoped>
#wrap {
 position: absolute;
 right:12.4%;
 top:50%;
 transform: translateX(50%);
 transform: translateY(-50%);
 width:75%;
 height:85vh;
 background-color:whitesmoke;
 box-shadow: 5px 5px 5px gray;
 margin:auto;
 border-radius: 15px;
 border: 1px solid rgb(226, 226, 226);
 display: flex;

 main{
     width:calc(100% - 100px);
     height:100%;
 }
}

</style>