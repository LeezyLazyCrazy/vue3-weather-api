<template>
  <div id="container">
    <div class="title-box">
      <p>내일의 날씨 시간별 현황</p>
    </div>
    <div class="timely-weather-box">
      <div class="clicked-city">
        <div class="image">
          <img v-bind:src="cityImage" alt="" />
        </div>
        <p>{{ cityName }}</p>
      </div>
      <div class="weather">
        <div
          class="timely-weather"
          v-for="(weather, index) in weathers"
          :key="index"
        >
          <div class="icon-box">
            <div class="text-box">
              <p>{{ Unix_timestamp(weathers[index].dt) }}</p>
              <p>{{ description[index] }}</p>
            </div>
            <div class="icon">
              <img v-bind:src="images[index]" alt="" />
            </div>
          </div>
          <div class="detail-box">
            <div class="contents">
              <div class="contents-1">
                <img src="" alt="" />
                <p></p>
              </div>
              <div class="contents-2">
                <img src="" alt="" />
                <p></p>
              </div>
            </div>
            <div class="current-temp">
              <p>{{Math.round(weathers[index].temp)}}</p>
             <img src="~/assets/tempdegree.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
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
      cityName: "서울",
      cityImage: "https://cdn-icons-png.flaticon.com/512/2090/2090313.png",
      weathers: [{}], // 출력할 때 순차적으로 index 번호를 화면단에 보여준다.
      description: [{}], // 시간별 날씨 설명 문구
      images: [{}], // 시간별 날씨 아이콘
    };
  },
  created() {
    var api_key = "6e9435abd019fcfcc2748f9c457cc209";
    var lat = 37.5683;
    var lon = 126.9778;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${api_key}&units=metric`
      )
      .then((response) => {
        console.log(response);

        for (let i = 0; i < 24; i++) {
          this.weathers[i] = response.data.hourly[i];
          this.description[i] = response.data.hourly[i].weather[0].description;

          var img = response.data.hourly[i].weather[0].icon; // 01n, 01d ...
          this.images[i] = `http://openweathermap.org/img/wn/${img}@2x.png`;

          if (img == "01d") {
            // 해
            this.images[i] =
              "https://cdn-icons-png.flaticon.com/512/1163/1163764.png";
          }
          if (img == "01n") {
            // 달
            this.images[i] =
              "https://cdn-icons-png.flaticon.com/512/1163/1163749.png";
          }
          if (img == "02d") {
            // 해 구름
            this.images[i] =
              "https://cdn-icons-png.flaticon.com/512/1163/1163763.png";
          }
          if (img == "02n") {
            // 달 구름
            this.images[i] =
              "https://cdn-icons-png.flaticon.com/512/1163/1163732.png";
          }
          if (img == "03d") {
            // 구름
            this.images[i] =
              "https://cdn-icons-png.flaticon.com/512/1163/1163726.png";
          }
          if (img == "03n") {
            // 구름
            this.images[i] =
              "https://cdn-icons-png.flaticon.com/512/1163/1163726.png";
          }
          if (img == "04d") {
            // 흰 먹구름
            this.images[i] =
              "https://cdn-icons-png.flaticon.com/512/1163/1163736.png";
          }
          if (img == "04n") {
            // 흰 먹구름
            this.images[i] =
              "https://cdn-icons-png.flaticon.com/512/1163/1163736.png";
          }
          if (img == "09d") {
            this.images[i] =
              "https://cdn-icons-png.flaticon.com/512/1163/1163729.png";
          }
          if (img == "09n") {
            this.images[i] =
              "https://cdn-icons-png.flaticon.com/512/1163/1163729.png";
          }
          if (img == "10d") {
            this.images[i] =
              "https://cdn-icons-png.flaticon.com/512/1163/1163759.png";
          }
          if (img == "10n") {
            this.images[i] =
              "https://cdn-icons-png.flaticon.com/512/1163/1163746.png";
          }
          if (img == "11d") {
            this.images[i] =
              "https://cdn-icons-png.flaticon.com/512/1163/1163761.png";
          }
          if (img == "11n") {
            this.images[i] =
              "https://cdn-icons-png.flaticon.com/512/1163/1163745.png";
          }
          if (img == "13d") {
            this.images[i] =
              "https://cdn-icons-png.flaticon.com/512/1163/1163760.png";
          }
          if (img == "13n") {
            this.images[i] =
              "https://cdn-icons-png.flaticon.com/512/1163/1163744.png";
          }
          if (img == "50d") {
            this.images[i] =
              "https://cdn-icons-png.flaticon.com/512/1163/1163775.png";
          }
          if (img == "50n") {
            this.images[i] =
              "https://cdn-icons-png.flaticon.com/512/1163/1163775.png";
          }
        }
      })
      .catch((error) => console.log(error));
  },
  methods: {
    // 타임스탬프로 변환
    Unix_timestamp(t) {
      var date = new Date(t * 1000);
      var hour = "0" + date.getHours();
      return hour.substr(-2) + "시";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";
@font-face {
    font-family: 'SF_HailSnow';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2106@1.1/SF_HailSnow.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

#container {
  padding: 25px 50px;

  .title-box {
    @include center-sb();
    width: 100%;

    p {
      font-family: 'SF_HailSnow';
      font-size: 1.50rem;
    }
  }

  .timely-weather-box {
    @include center-se();
    width: 100%;
    height: 175px;
    margin-top: 12.5px;
    background-color: #8a8a8a56;
    border-radius: 10px;
    box-shadow: 4px 4px 4px gray;

    .clicked-city {
      @include c-center-se();
      width: 110px;
      height: 150px;
      background-color: #fff;
      border-radius: 10px;

      .image {
        width: 100px;
        height: 100px;
        border-radius: 5px;

        img {
          display: block;
          width: 100%;
          border-radius: 5px;
        }
      }
      p {
        text-align: center;
        font-family: 'SF_HailSnow';
        font-size: 1.25rem;
      }
    }
    .weather {
      width: calc(100% - 150px);
      height: 150px;
      background-color: #ffffff56;
      border-radius: 10px;

      display: flex;
      overflow: auto;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
      }

      [v-cloak] {
        display: none;
      }

      .timely-weather {
        min-width: 175px;
        width: 175px;
        height: 100%;
        border-radius: 10px;
        margin-right: 10px;
        background-color: white;

        &:last-child {
          margin-right: 0px;
        }

        .icon-box {
          width: 100%;
          height: 55%;
          @include center-sb();

          .text-box {
            @include c-center-se();
            width: 50%;
            height: 100%;

            p {
              &:first-child {
                @include center();
                width: 100%;
                height: 70%;
                font-family: 'SF_HailSnow';
                font-size: 1.35rem;
                margin-top: 5px;
              }
              &:last-child {
                @include center();
                text-align: center;
                width: 100%;
                height: 30%;
                font-family: 'SF_HailSnow';
                font-size: 0.75rem;
              }
            }
          }
          .icon {
            @include center();
            width: 50%;
            height: 100%;

            img {
              height: 65%;
            }
          }
        }
        .detail-box {
          width: 100%;
          height: 45%;
          display: flex;

          .contents {
            width: 50%;
            height: 100%;
            @include c-center-sb();

            .contents-1,
            .contents-2 {
              @include center-sb();
              width: 100%;
              height: 50%;

              img {
                height: 55%;
              }
              p {
                @include center();
                text-align: center;
                font-family: 'SF_HailSnow';
                font-size: 10px;
              }
            }
            .contents-1 {
              margin: 5px 0 0 10px;
              p {
                margin-right: 15px;
              }
            }
            .contents-2 {
              margin: -5px 0 0 10px;
              p {
                margin-right: 25px;
              }
            }
          }
          .current-temp {
            position: relative;
            @include center();
            width: 50%;
            height: 100%;

            p {
              text-align: center;
              margin: 10px 22.5px 0 0;
              font-size: 2.3rem;
              font-family: 'SF_HailSnow';
            }

            img {
              position: absolute;
              top: 12.5px;
              right: 7px;
              width: 27.5px;
              height: 27.5px;
            }
          }
        }
      }
    }
  }
}
</style>