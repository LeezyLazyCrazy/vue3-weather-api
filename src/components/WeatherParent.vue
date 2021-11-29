<template>
  <div id="todayWeather">
    <div class="date">
      <p>실시간 일기예보</p>
      <p>{{ today }}요일</p>
    </div>
    <div class="weather" :style="cityBg.backgroundImage" v-bind="changedDetails">
      <p class="cityName">
        {{ weather.name }}
      </p>
      <p class="countryName">
        {{ sys.country }}
      </p>
      <p class="currentTemp">
        {{ Math.round(temp.temp) }}
      </p>
      <img src="~/assets/tempdegree.png" alt="" />
      <div class="etcData">
        <p class="highTemp">최고 온도 : {{ Math.round(temp.temp_max) }} 도</p>
        <p class="lowTemp">최저 온도 : {{ Math.round(temp.temp_min) }} 도</p>
        <p class="humidity">현재 습도 : {{ temp.humidity }} %</p>
      </div>
    </div>
    <div class="icon-box">
      <img :src="img_url" alt="" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko"); // global로 한국어 locale 사용

export default {
  component: { dayjs },
  props: {
    markerLat: {
      type: Number,
      default: 37.5683,
      required: true,
    },
    markerLon: {
      type: Number,
      default: 126.9778,
      required: true,
    },
  },
  data() {
    return {
      weather: {},
      temp: {},
      sys: {},
      icons: {},
      img_url: {},
      today: dayjs().format("YYYY. MM. DD. ddd"), // display
      cityName: {},
      cityBg: {
        backgroundImage: "background-image: url(https://cdn.pixabay.com/photo/2018/02/20/19/00/top-3168523_960_720.jpg)",
      },
    };
  },
  created() {
    // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    var api_key = "1a5ef29484ff347e2245cf1814b07c77";
    var city_name = "Seoul";
    // https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric
    // https://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=${api_key}&units=metric
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`)
      .then((response) => {
        // console.log(response);
        this.weather = response.data;
        this.sys = response.data.sys;
        this.temp = response.data.main;
        this.icons = response.data.weather[0].icon;

        if (this.icons == "01d") {
          // 해
          return (this.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163764.png");
        }
        if (this.icons == "01n") {
          // 달
          return (this.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163749.png");
        }
        if (this.icons == "02d") {
          // 해 구름
          return (this.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163763.png");
        }
        if (this.icons == "02n") {
          // 달 구름
          return (this.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163732.png");
        }
        if (this.icons == "03d") {
          // 구름
          return (this.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163726.png");
        }
        if (this.icons == "03n") {
          // 구름
          return (this.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163726.png");
        }
        if (this.icons == "04d") {
          // 흰 먹구름
          return (this.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163736.png");
        }
        if (this.icons == "04n") {
          // 흰 먹구름
          return (this.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163736.png");
        }
        if (this.icons == "09d") {
          return (this.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163729.png");
        }
        if (this.icons == "09n") {
          return (this.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163729.png");
        }
        if (this.icons == "10d") {
          return (this.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163759.png");
        }
        if (this.icons == "10n") {
          return (this.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163746.png");
        }
        if (this.icons == "11d") {
          return (this.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163761.png");
        }
        if (this.icons == "11n") {
          return (this.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163745.png");
        }
        if (this.icons == "13d") {
          return (this.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163760.png");
        }
        if (this.icons == "13n") {
          return (this.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163744.png");
        }
        if (this.icons == "50d") {
          return (this.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163775.png");
        }
        if (this.icons == "50n") {
          return (this.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163775.png");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    changedDetails() {
      const vm = this;
      // Code that will run only after the
      // entire view has been re-rendered
      var api_key = "1a5ef29484ff347e2245cf1814b07c77";
      var lat = vm.markerLat;
      var lon = vm.markerLon;

      // Contents Details
      if (lat == 37.5683 && lon == 126.97779999999999) {
        vm.cityBg.backgroundImage = "background-image: url(https://cdn.pixabay.com/photo/2018/02/20/19/00/top-3168523_960_720.jpg)";
        vm.cityName = "Seoul";
      }
      if (lat == 37.45597294471435 && lon == 126.70526384491123) {
        vm.cityBg.backgroundImage = "background-image: url(https://cdn.pixabay.com/photo/2015/03/26/02/12/korea-689689_960_720.jpg)";
        vm.cityName = "Incheon";
      }
      if (lat == 37.2911 && lon == 127.00889999999998) {
        vm.cityName = "Suwon";
        vm.cityBg.backgroundImage = "background-image: url(https://cdn.pixabay.com/photo/2020/03/19/07/37/suwon-4946628_960_720.jpg)";
      }
      if (lat == 37.7556 && lon == 128.89610000000067) {
        vm.cityName = "gangneung";
        vm.cityBg.backgroundImage = "background-image: url(https://cdn.pixabay.com/photo/2018/04/21/02/55/squid-3337564_960_720.jpg)";
      }
      if (lat == 37.17590000000001 && lon == 128.988900000001) {
        vm.cityName = "Taebaek";
        vm.cityBg.backgroundImage = "background-image: url(https://cdn.pixabay.com/photo/2018/11/19/05/24/snow-3824629_960_720.jpg)";
      }
      if (lat == 36.3333 && lon == 127.41670000000002) {
        vm.cityName = "Daejeon";
        vm.cityBg.backgroundImage = "background-image: url(https://cdn.pixabay.com/photo/2019/12/10/16/35/chain-aviator-4686144_960_720.jpg)";
      }
      if (lat == 35.82189999999999 && lon == 127.1489) {
        vm.cityName = "Jeonju";
        vm.cityBg.backgroundImage = "background-image: url(https://cdn.pixabay.com/photo/2015/05/11/09/59/bibimbap-762218_960_720.jpg)";
      }
      if (lat == 35.1547 && lon == 126.9156) {
        vm.cityName = "Gwangju";
        vm.cityBg.backgroundImage = "background-image: url(https://cdn.pixabay.com/photo/2017/08/31/09/26/korea-2699930_960_720.jpg)";
      }
      if (lat == 35.800000000000004 && lon == 128.5500000000002) {
        vm.cityName = "Daegu";
        vm.cityBg.backgroundImage = "background-image: url(https://cdn.pixabay.com/photo/2018/09/02/07/07/south-korea-3648252_960_720.jpg)";
      }
      if (lat == 35.537200000000006 && lon == 129.316700000003) {
        vm.cityName = "Ulsan";
        vm.cityBg.backgroundImage = "background-image: url(https://cdn.pixabay.com/photo/2016/11/23/13/45/car-1852923_960_720.jpg)";
      }
      if (lat == 35.102800000000016 && lon == 129.0403000000013) {
        vm.cityName = "Busan";
        vm.cityBg.backgroundImage = "background-image: url(https://cdn.pixabay.com/photo/2020/04/18/03/12/korea-5057480_960_720.jpg)";
      }
      if (lat == 33.509699999999995 && lon == 126.5219) {
        vm.cityName = "Jeju";
        vm.cityBg.backgroundImage = "background-image: url(https://cdn.pixabay.com/photo/2017/10/15/13/54/doll-2853763_960_720.jpg)";
      }

      var city_name = vm.cityName;

      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`)
        .then((response) => {
          vm.weather = response.data;
          vm.sys = response.data.sys;
          vm.temp = response.data.main;
          vm.icons = response.data.weather[0].icon;

          if (vm.icons == "01d") {
            // 해
            return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163764.png");
          }
          if (vm.icons == "01n") {
            // 달
            return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163749.png");
          }
          if (vm.icons == "02d") {
            // 해 구름
            return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163763.png");
          }
          if (vm.icons == "02n") {
            // 달 구름
            return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163732.png");
          }
          if (vm.icons == "03d") {
            // 구름
            return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163726.png");
          }
          if (vm.icons == "03n") {
            // 구름
            return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163726.png");
          }
          if (vm.icons == "04d") {
            // 흰 먹구름
            return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163736.png");
          }
          if (vm.icons == "04n") {
            // 흰 먹구름
            return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163736.png");
          }
          if (vm.icons == "09d") {
            return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163729.png");
          }
          if (vm.icons == "09n") {
            return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163729.png");
          }
          if (vm.icons == "10d") {
            return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163759.png");
          }
          if (vm.icons == "10n") {
            return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163746.png");
          }
          if (vm.icons == "11d") {
            return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163761.png");
          }
          if (vm.icons == "11n") {
            return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163745.png");
          }
          if (vm.icons == "13d") {
            return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163760.png");
          }
          if (vm.icons == "13n") {
            return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163744.png");
          }
          if (vm.icons == "50d") {
            return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163775.png");
          }
          if (vm.icons == "50n") {
            return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163775.png");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  // updated: function () {
  //   const vm = this;
  //   this.$nextTick(function () {
  //     // Code that will run only after the
  //     // entire view has been re-rendered
  //     var api_key = "1a5ef29484ff347e2245cf1814b07c77";
  //     var lat = vm.markerLat;
  //     var lon = vm.markerLon;
  //     var city_name = vm.changedCity;

  //     axios
  //       .get(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`)
  //       .then((response) => {
  //         vm.weather = response.data;
  //         vm.sys = response.data.sys;
  //         vm.temp = response.data.main;
  //         vm.icons = response.data.weather[0].icon;

  //         if (vm.icons == "01d") {
  //           // 해
  //           return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163764.png");
  //         }
  //         if (vm.icons == "01n") {
  //           // 달
  //           return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163749.png");
  //         }
  //         if (vm.icons == "02d") {
  //           // 해 구름
  //           return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163763.png");
  //         }
  //         if (vm.icons == "02n") {
  //           // 달 구름
  //           return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163732.png");
  //         }
  //         if (vm.icons == "03d") {
  //           // 구름
  //           return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163726.png");
  //         }
  //         if (vm.icons == "03n") {
  //           // 구름
  //           return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163726.png");
  //         }
  //         if (vm.icons == "04d") {
  //           // 흰 먹구름
  //           return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163736.png");
  //         }
  //         if (vm.icons == "04n") {
  //           // 흰 먹구름
  //           return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163736.png");
  //         }
  //         if (vm.icons == "09d") {
  //           return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163729.png");
  //         }
  //         if (vm.icons == "09n") {
  //           return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163729.png");
  //         }
  //         if (vm.icons == "10d") {
  //           return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163759.png");
  //         }
  //         if (vm.icons == "10n") {
  //           return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163746.png");
  //         }
  //         if (vm.icons == "11d") {
  //           return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163761.png");
  //         }
  //         if (vm.icons == "11n") {
  //           return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163745.png");
  //         }
  //         if (vm.icons == "13d") {
  //           return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163760.png");
  //         }
  //         if (vm.icons == "13n") {
  //           return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163744.png");
  //         }
  //         if (vm.icons == "50d") {
  //           return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163775.png");
  //         }
  //         if (vm.icons == "50n") {
  //           return (vm.img_url = "https://cdn-icons-png.flaticon.com/512/1163/1163775.png");
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //     if (lat == 37.5683 && lon == 126.97779999999999) {
  //       vm.changedCity = "Seoul";
  //       vm.cityBg.backgroundImage = "background-image: url(https://cdn.pixabay.com/photo/2018/02/20/19/00/top-3168523_960_720.jpg)";
  //     }
  //     if (lat == 37.45597294471435 && lon == 126.70526384491123) {
  //       vm.changedCity = "Incheon";
  //       vm.cityBg.backgroundImage = "background-image: url(https://cdn.pixabay.com/photo/2015/03/26/02/12/korea-689689_960_720.jpg)";
  //     }
  //     if (lat == 37.2911 && lon == 127.00889999999998) {
  //       vm.changedCity = "Suwon";
  //       vm.cityBg.backgroundImage = "background-image: url(https://cdn.pixabay.com/photo/2020/03/19/07/37/suwon-4946628_960_720.jpg)";
  //     }
  //     if (lat == 37.7556 && lon == 128.89610000000067) {
  //       vm.changedCity = "gangneung";
  //       vm.cityBg.backgroundImage = "background-image: url(https://cdn.pixabay.com/photo/2018/04/21/02/55/squid-3337564_960_720.jpg)";
  //     }
  //     if (lat == 37.17590000000001 && lon == 128.988900000001) {
  //       vm.changedCity = "Taebaek";
  //       vm.cityBg.backgroundImage = "background-image: url(https://cdn.pixabay.com/photo/2018/11/19/05/24/snow-3824629_960_720.jpg)";
  //     }
  //     if (lat == 36.3333 && lon == 127.41670000000002) {
  //       vm.changedCity = "Daejeon";
  //     }
  //     if (lat == 35.82189999999999 && lon == 127.1489) {
  //       vm.changedCity = "Jeonju";
  //       vm.cityBg.backgroundImage = "background-image: url(https://cdn.pixabay.com/photo/2015/05/11/09/59/bibimbap-762218_960_720.jpg)";
  //     }
  //     if (lat == 35.1547 && lon == 126.9156) {
  //       vm.changedCity = "Gwangju";
  //       vm.cityBg.backgroundImage = "background-image: url(https://cdn.pixabay.com/photo/2017/08/31/09/26/korea-2699930_960_720.jpg)";
  //     }
  //     if (lat == 35.800000000000004 && lon == 128.5500000000002) {
  //       vm.changedCity = "Daegu";
  //       vm.cityBg.backgroundImage = "background-image: url(https://cdn.pixabay.com/photo/2018/09/02/07/07/south-korea-3648252_960_720.jpg)";
  //     }
  //     if (lat == 35.537200000000006 && lon == 129.316700000003) {
  //       vm.changedCity = "Ulsan";
  //       vm.cityBg.backgroundImage = "background-image: url(https://cdn.pixabay.com/photo/2016/11/23/13/45/car-1852923_960_720.jpg)";
  //     }
  //     if (lat == 35.102800000000016 && lon == 129.0403000000013) {
  //       vm.changedCity = "Busan";
  //       vm.cityBg.backgroundImage = "background-image: url(https://cdn.pixabay.com/photo/2020/04/18/03/12/korea-5057480_960_720.jpg)";
  //     }
  //     if (lat == 33.509699999999995 && lon == 126.5219) {
  //       vm.changedCity = "Jeju";
  //       vm.cityBg.backgroundImage = "background-image: url(https://cdn.pixabay.com/photo/2017/10/15/13/54/doll-2853763_960_720.jpg)";
  //     }
  //   });
  // },
};
</script>


<style lang="scss" scoped>
@import "~/scss/main.scss";

  #upper{
    width: 100%;
    height: 60%;
    @include center-sb;
    position: relative;

    #map-box{
      position: relative;
      width: 50%;
      height: 100%;

      #map{
        position: absolute;
        bottom: 0;
        right: 50%;
        transform: translateX(50%);
        width: 80%;
        height: 80%;
        border-radius: 10px;
        box-shadow: 4px 4px 4px gray;
      }
    }

  }
</style>
