<template>
  <main class="service">
    <section class="picture">
      <div class="inner">
        <h2 class="service__title">사진 목록</h2>
        <ul class="picture__box">
          <li class="picture__box__item cat"></li>
          <li class="picture__box__item dog"></li>
          <li class="picture__box__item rabbit"></li>
        </ul>
      </div>
    </section>
    <section class="content">
      <div class="inner">
        <h2 class="service__title">컨텐츠 목록</h2>
        <ul class="content__box">
          <li class="content__box__item">
            <p>앱 출시 기념 이벤트</p>
          </li>
          <li class="content__box__item">
            <p>고객 센터 안내</p>
            <span>010-0000-0000<br />월~금 6am~9pm / 공휴일 휴무</span>
          </li>
          <li class="content__box__item">
            <p>지점 안내</p>
            <span
              >서울시 어쩌구 모시깽이 7길<br />삐까뻔쩍 빌딩 10층 치킨
              컴퍼니</span
            >
          </li>
        </ul>
      </div>
    </section>
    <!-- 
    v-bind는 html의 속성인 id, class, style등에 대해 
    model의 데이터를 연곃할 때 사용된다.
    편의상 v-bind는 생략하고 사용하기도 한다.
    [v-bind: 속성명 = 사용할 값]
    -->
    <section class="user">
      <div class="inner">
        <p class="user__name">userName : {{userName}}</p>
        <p class="user__age">userAge : {{userAge}}</p>
        <hr />
        <h4>Object</h4>
        <!-- 객체 -->
        <p class="user__name">userName : {{userInfo.name}}</p>
        <p class="user__age">userAge : {{userInfo.age}}</p>
        <!-- array -->
        <hr />
        <h4>array</h4>
        <p class="user__name">userName : {{userInfo["name"]}}</p>
        <p class="user__age">userAge : {{userInfo["age"]}}</p>
        <!-- class -->
        <hr />
        <h4>class</h4>
        <p class="user__name">userName : {{user[0]}}</p>
        <p class="user__age">userAge : {{user[1]}}</p>
        <!-- 그 외 -->
        <hr />
        <h4>그 외</h4>
        <p class="user__name" :class="{active: userInfo.name === myUserInfo.name}">userName : {{userInfo.name}}</p>
        <p class="user__age" :class="{active: userInfo.age === myUserInfo.age}">userName : {{userInfo.name}}</p>

        <h4>그 외</h4>
        <a :href="naver.link" :id="naver.id">{{naver.label}}페이지로가기</a>
        <p :style="[{color: styleColor2, 'text-decoration':underline},aniStyle]">스타일인라인적용</p>
      </div>
    </section>
  </main>
</template>

<script>
const myUserInfo = {
  name: "colin",
  age: 3000,
};

export default {
  components: {},
  data() {
    return {
      //변수
      userName: "youjin",
      userAge: 5000,
      //객체
      userInfo: {
        name: "colin",
        age: 3000,
      },
      //배열
      user: ["colin", 2000],
      myUserInfo: myUserInfo,
      naver: {
        link: "https://www.naver.com",
        label: "네이버",
        id: "Naver",
      },
      styleColor: "orange",
      styleColor2: "red",
      underline: "underline",
      aniStyle: {
        "padding-left": "20px",
        "background-color": "#f9f9f9",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/page/service.scss";
</style>
