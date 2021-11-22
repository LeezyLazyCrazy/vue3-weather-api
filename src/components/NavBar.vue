<template>
  <div id="container">
    <div class="logo">
      <img src="~/assets/weatherLogo.png" alt="MainLogo" />
    </div>
    <ul>
      <li 
      v-for="navicon in navicons" 
      :key="navicon" 
      v-html="navicon.iconHtml"></li>
    </ul>
    <button class="backBtn">
      <i class="fas fa-sign-out-alt"></i>
    </button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      //[배열 index 0,1,2,3,4,5,6],{객체}
      navicons:[
        { iconHtml: "<i class='fas fa-home'></i>" },
        { iconHtml: "<i class='fas fa-th-large'></i>" },
        { iconHtml: "<i class='fas fa-cogs'></i>" }
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";

#container {
  width: 100px;
  height: 100%;
  background-color: white;
  box-shadow: 2px 1px 5px rgba(105, 105, 105, 0.2);
  border-radius: 15px 0 0 15px;

  .logo {
    @include center;
    width: 100%;
    height: 20%;

    img {
      width: 60%;
    }
  }
  ul {
    @include c-center-se;
    width: 100%;
    height: 60%;

    li {
      color: rgb(70, 70, 70);
      font-size: 2rem;
      cursor: pointer;
    }
  }
  button {
    width: 100%;
    height: 20%;
    background: none;
    outline: none;
    border: 0;
    cursor: pointer;

    i {
      font-size: 2rem;
      color: rgb(70, 70, 70);
    }
  }
}
</style>