<template>
  <div id="todayWeather">
    <div class="date">
      <p>실시간 일기예보</p>
      <p>{{ today }}</p>
    </div>
    <div class="weather">
      <p class="cityName">📍{{ weather.name }}</p>
      <p class="countryName">🌍{{ country.country }}</p>
      <p class="currentTemp">{{ Math.round(temp.temp) }}🌡</p> 
      <img src="" alt="">
      <div class="etcData">
        <p class="highTemp">최고온도 : {{ Math.round(temp.temp_max) }}℃</p>
        <p class="lowTemp">최저온도 : {{ Math.round(temp.temp_min) }}℃</p>
        <p class="humidity">현재습도 : {{ temp.humidity }} %</p>
      </div>
      <div class="icon-box">
        <img src="" alt="">
      </div>
    </div>    
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";

import 'dayjs/locale/ko'

dayjs.locale('ko') // global로 한국어 locale 사용
const date = dayjs('2019-03-01')
console.log(date.format('dddd')) // '금요일'
const date2 = dayjs('2019-03-01').locale('en') // 해당 인스턴스에서만 영어 locale사용
console.log(date2.format('dddd')) // 'Fri'

export default {
  component: {dayjs},
  data(){
    return{
      //Date
      today: dayjs().format("dddd"), // display 
      //Total Data
      weather:{},
      //temp
      temp:{},
      //country
      country:{},
    }
  },
  created(){
    //api.openweathermap.org/data/2.5/weather?q={city name}&appid=${API key}&units=metric
    var api_key = "6e9435abd019fcfcc2748f9c457cc209";
    var city_name = "Seoul"; //default 값이긴 함
    
     
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`
      )
      .then((response) => {
        console.log(response);
        this.weather = response.data;
        this.country = response.data.sys;
        this.temp = response.data.main;
        })
      .catch((error) => {console.log(error);});
      //get은 조회하는 용도의 메서드
  }
}
</script>
<style lang="scss" scoped>
@import "~/scss/main.scss";
  #todayWeather{
    position:relative;
    width:50%;
    height:100%;

    .date{
      position: relative;
      @include center-sb;
      width:100%;
      height:15%;

      p{
        font-family: "GmarketSansBold";
        margin-top: 17.5px;

        &:first-child{
          font-family:GmarketSansBold;
          position:absolute;
          left:50px;}

        &:last-child{
          font-family:GmarketSanslight;
          position:absolute;
          right:50px;}
      }
    }
    .weather{
    position:absolute;
    bottom:0;
    right:50%;
    transform: translateX(50%);
    width:80%;
    height:80%;
    border-radius: 10px;

    background-position: center;
    background-size: cover;
    box-shadow: 4px 4px 4px gray;

    p{
      margin:30px;
      color:rgb(0, 25, 248);
      display: block;
      font-family: "Montserrat", sans-serif;
    }
  .cityName{
    width:100%;
    font-size: 1.5rem;
  }
   .countryName{
    margin-top:-20px;
    width:100%;
    font-size: 1.25rem;
  }
   .currentTemp{
    margin-top:42.5px;
    width:100%;
    font-size: 2.5rem;
    font-family: "Cafe24Ssurround";
  }
   img{
     position:absolute;
     left:25%;
     top:37.5%;
     width:40px;
     height:40px;
  }
  .etcData{
    position:absolute;
    bottom:0;
    .hightTemp,.lowTemp,.humidity{
      width:100%;
      font-size: 0.85rem;
      font-family: "IM_Hyemin_Bold";
      margin-top:-20px;
    }
    .icon-box{
      position:absolute;
      top:27%;
      right:15%;
      @include center;
      width:100px;
      height:100px;
      background-color: rgba(245,245,245,0.5);
      border-radius:10px;
    }
  }
    }
  }
   
</style>