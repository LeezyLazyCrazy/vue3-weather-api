// createRouter, createWebHashHistory 2가지 메소드를 가지고 온다.
import {createRouter, createWebHashHistory} from "vue-router";
import Home from "~/pages/Home.vue"; 


// 기본 내보내기
export default createRouter({
  // 내부에 기본구성 옵션을 작성
  //1. Hash mode History 모드가 있다.
  //-Hash 모드: https://google.com/#/search 처럼 특정한 주소부분에 도메인 뒤에 #을 붙여 접근하는 방법이다.
  //특정 페이지에서 새로고침을 했을 때, '페이지를 찾을 수 없음' 이라는 메시지를 방지하는 기능이다.
  
  history: createWebHashHistory(),

  // 페이지들을 구분해주는 개념
  routes:[
      //객체 리터럴 작성
      {
          //경로
          path:"/",
          //어떤 vue.js의 component 연결할 것인지를 기입한다.
          component: Home,
    },
   
  ],
});

