<template>
  <div id="todayWeather">
    <div class="date">
      <p>실시간 일기예보</p>
      <p>{{ today }}</p>
    </div>
    <div class="weather" v-bind:style="cityBg.backgroundImage">
      <p class="cityName">{{ weather.name }}</p>
      <p class="countryName"> {{ country.country }}</p>
      <p class="currentTemp">{{ Math.round(temp.temp) }}🌡</p> 
      <!-- <img src="~/assets/tempdegree.png" alt=""> -->
      <div class="etcData">
        <p class="highTemp">최고온도 : {{ Math.round(temp.temp_max) }}℃</p>
        <p class="lowTemp">최저온도 : {{ Math.round(temp.temp_min) }}℃</p>
        <p class="humidity">현재습도 : {{ Math.round(temp.humidity) }} %</p>
      </div>
      <div class="icon-box">
        <img v-bind:src="imgUrl" alt="">
      </div>
    </div>    
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
import 'dayjs/locale/ko'
dayjs.locale('ko') // global로 한국어 locale 사용

export default {
  component: {dayjs},
  data(){
    return{
      //Date
      today: dayjs().format("YYYY.MM.DD.dddd"), // display 
      //Total Data
      weather:{},
      //temp
      temp:{},
      //country
      country:{},
      cityBg: {
        backgroundImage:
          "background-image: url(https://cdn.pixabay.com/photo/2018/02/20/19/00/top-3168523_960_720.jpg)",
      icons: {},  
      imgUrl: {},  
      },
    }
  },
  created(){
    //api.openweathermap.org/data/2.5/weather?q={city name}&appid=${API key}&units=metric
    var api_key = "6e9435abd019fcfcc2748f9c457cc209";
    var city_name = "Seoul"; //default 값이긴 함
    
     
    axios
    //Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리입니다
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`
      )
      .then((response) => {
        console.log(response);
        this.weather = response.data;
        this.country = response.data.sys;
        this.temp = response.data.main;
        this.icons = response.data.weather[0].icon;
        this.imgUrl =  `http://openweathermap.org/img/wn/${this.icons}@2x.png`

      if (this.icons == "01d") {
          // 해
          return (this.imgUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163764.png");
        }
        if (this.icons == "01n") {
          // 달
          return (this.imgUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163749.png");
        }
        if (this.icons == "02d") {
          // 해 구름
          return (this.imgUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163763.png");
        }
        if (this.icons == "02n") {
          // 달 구름
          return (this.imgUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163732.png");
        }
        if (this.icons == "03d") {
          // 구름
          return (this.imgUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163726.png");
        }
        if (this.icons == "03n") {
          // 구름
          return (this.imgUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163726.png");
        }
        if (this.icons == "04d") {
          // 흰 먹구름
          return (this.imgUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163736.png");
        }
        if (this.icons == "04n") {
          // 흰 먹구름
          return (this.imgUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163736.png");
        }
        if (this.icons == "09d") {
          return (this.imgUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163729.png");
        }
        if (this.icons == "09n") {
          return (this.imgUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163729.png");
        }
        if (this.icons == "10d") {
          return (this.imgUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163759.png");
        }
        if (this.icons == "10n") {
          return (this.imgUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163746.png");
        }
        if (this.icons == "11d") {
          return (this.imgUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163761.png");
        }
        if (this.icons == "11n") {
          return (this.imgUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163745.png");
        }
        if (this.icons == "13d") {
          return (this.imgUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163760.png");
        }
        if (this.icons == "13n") {
          return (this.imgUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163744.png");
        }
        if (this.icons == "50d") {
          return (this.imgUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163775.png");
        }
        if (this.icons == "50n") {
          return (this.imgUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163775.png");
        }
      })
      .catch((error) => {console.log(error);});
      //get은 조회하는 용도의 메서드
  }
}
</script>

<style lang="scss" scoped>
  @import "~/scss/main.scss";
//   // @font-face {
//   //   font-family: 'SF_HailSnow';
//   //   src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2106@1.1/SF_HailSnow.woff') format('woff');
//   // }
//   @font-face {
//     font-family: 'Cafe24SsurroundAir';
//     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24SsurroundAir.woff') format('woff');
// }
//   @font-face {
//       font-family: 'SBAggroM';
//       src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroM.woff') format('woff');
//       font-weight: normal;
//       font-style: normal;
//   }

  #todayWeather{
    position:relative;width:50%;height:100%;

    .date{
      position:relative;width:100%;height:15%;

      @include center-sb;

      p{
      font-family: 'SF_HailSnow'; margin-top:17.5px;
        &:first-child{

          font-size:1.50rem;position:absolute;left:50px;
        }
        &:last-child{
         font-family: 'SF_IceMango';
          font-size:1.25rem;position:absolute;right:50px;
        }
      }
    }
    .weather{
      position:absolute;bottom: 0;right:50%;transform:translateX(50%);width:80%;height:80%;border-radius:10px;background-position:center;background-size:cover;box-shadow:4px 4px 4px grey;background-color:cornflowerblue;
      p{
        margin:23px;color:white;display:block; font-family: 'SF_IceMango'; 
      }

      .cityName{
        width:100%;font-size:2rem;
      }
      .countryName{
        width:100%;font-size:1.25rem;margin-top:-15px;margin-bottom: 10px;
      }
      .currentTemp{
        width:100%;font-size:6rem;margin-top:10px;
      }
      img{
        position:absolute;left:22.5%;top:15%;width:60px;height:60px;
      }
      .etcData{
        position:absolute;bottom:0;

        .highTemp,.lowTemp,.humidity{
          width:100%;font-size:1rem;margin-top:-20px;font-family: 'Cafe24SsurroundAir';font-weight: bold;
        }
      }
    }
    .icon-box{
      position:absolute;top:6%;right:6%;width:100px;height:100px;background-color:rgba(245,245,245,0.5);border-radius:10px;
      @include center;

      img{
        height:75%;
      }
    }
  }
</style>