<template>
  <section id="upper">
    <WeatherTodayChild :markerLat="markerLat" :markerLon="markerLon" />
    <div id="map-box">
      <!-- id 값은 무조건 map으로 할당해야 kakao map api data를 불러들일 수 있다. -->
      <div id="map"></div></div>
    <div class="button-box">
        <img src="~/assets/clock.png" alt="">
        <button type="button" @click="showTodayWeather">오늘의 날씨 보기</button>
        <img src="~/assets/24-hours.png" alt="">
        <button type="button" @click="showTomorrowWeather">내일의 날씨 보기</button>
    </div>
  </section>
  <section id="under">
    <WeatherTimelyChild :markerLat="markerLat" :markerLon="markerLon" v-if="todayWeather" />
    <WeatherTomorrowChild :markerLat="markerLat" :markerLon="markerLon" v-if="tomorrowWeather" />
  </section>
</template>

<script>
import WeatherTimelyChild from "./WeatherTimelyChild.vue";  
import WeatherTodayChild from "./WeatherTodayChild.vue";
import WeatherTomorrowChild from "./WeatherTomorrowChild.vue";
                                              
export default {
    data() {
        return {
            //상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달 할 때 props를 활용한다.
            markerLat: {},
            markerLon: {},
            todayWeather: true,
            tomorrowWeather: false
        };
    },
    mounted() {
        if (window.kakao && window.kakao.maps) {
            this.initMap();
        }
        else {
            const script = document.createElement("script");
            /* global kakao */
            script.onload = () => kakao.maps.load(this.initMap);
            script.src = "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=a5cb12497da32120cdefd53da6fb2e1e";
            document.head.appendChild(script);
        }
    },
    methods: {
        initMap() {
            var mapContainer = document.getElementById("map"), // 지도를 표시할 section
            mapOption = {
                center: new kakao.maps.LatLng(36.73035, 127.967487),
                level: 15, // 지도의 확대 레벨
            };
            var map = new kakao.maps.Map(mapContainer, mapOption); // eslint-disable-line no-unused-vars
            // 마커가 표시될 위치입니다.
            var positions = [
                {
                    // 서울
                    lating: new kakao.maps.LatLng(37.5683, 126.9778),
                },
                {
                    // 인천
                    lating: new kakao.maps.LatLng(37.45597294471435, 126.70526384491123),
                },
                {
                    // 수원
                    lating: new kakao.maps.LatLng(37.2911, 127.0089),
                },
                {
                    // 대전
                    lating: new kakao.maps.LatLng(36.3333, 127.4167),
                },
                {
                    // 태백
                    lating: new kakao.maps.LatLng(37.1759, 128.9889),
                },
                {
                    // 강릉
                    lating: new kakao.maps.LatLng(37.7556, 128.8961),
                },
                {
                    // 울릉도
                    lating: new kakao.maps.LatLng(37.49442316861083, 130.89904574035654),
                },
                {
                    // 독도
                    lating: new kakao.maps.LatLng(37.24081341943151, 131.8781046033392),
                },
                {
                    // 대구
                    lating: new kakao.maps.LatLng(35.8, 128.55),
                },
                {
                    // 울산
                    lating: new kakao.maps.LatLng(35.5372, 129.3167),
                },
                {
                    // 부산
                    lating: new kakao.maps.LatLng(35.1028, 129.0403),
                },
                {
                    // 전주
                    lating: new kakao.maps.LatLng(35.8219, 127.1489),
                },
                {
                    // 광주
                    lating: new kakao.maps.LatLng(35.1547, 126.9156),
                },
                {
                    // 제주도
                    lating: new kakao.maps.LatLng(33.5097, 126.5219),
                },
            ];
            const vm = this;
            // 마커를 생성합니다.
            positions.forEach(function (pos) {
                var marker = new kakao.maps.Marker({
                    position: pos.lating, // 마커의 위치
                });
                // 마커가 지도 위에 표시되도록 설정합니다.
                marker.setMap(map);
                //마커 클릭 이벤트를 등록합니다.
                kakao.maps.event.addListener(marker, "click", () => {
                    //마커 position을 출력합니다.
                    console.log(marker.getPosition());
                    vm.markerLon = marker.getPosition().La;
                    vm.markerLat = marker.getPosition().Ma;
                    // console.log(vm.markerLat);
                    // console.log(vm.markerLon);
                    return marker;
                });
                // 아래 코드는 지도 위의 마커를 제거하는 코드입니다.
                // marker.setMap(null);
            });
        },
        showTodayWeather() {
            if (this.todayWeather == false && this.tomorrowWeather == true) {
                this.todayWeather = !this.todayWeather;
                this.tomorrowWeather = !this.tomorrowWeather;
            }
        },
        showTomorrowWeather() {
            if (this.todayWeather == true && this.tomorrowWeather == false) {
                this.todayWeather = !this.todayWeather; //false => true  => false
                this.tomorrowWeather = !this.tomorrowWeather; //true => false => true
            }
        },
    },
    components: { WeatherTodayChild, WeatherTimelyChild, WeatherTomorrowChild }
}
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

    .button-box{
        width:40%;
        @include center-sb();
        position: absolute;
        right:50px;
        bottom:-52.5px;

        img{
            height:35px;
            margin-right: -50px;
        }
        button{
            width:125px;
            height:30px;
            font-family:'SF_HailSnow';
            cursor:pointer;
            border-radius: 5px;
        }
    }
  }
  #under{
      width:100%;
      height:40%;      
  }
</style>