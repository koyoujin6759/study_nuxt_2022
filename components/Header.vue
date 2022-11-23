<template>
  <header class="header">
    <div class="header__inner">
      <h1 class="header__logo">
        <router-link to="./" class="header__logo__link">
          <img
            src="@/assets/images/logo.svg"
            alt=""
            class="header__logo__image"
            width="60px"
          />
        </router-link>
      </h1>
      <nav class="header__nav">
        <ul class="header__gnb">
          <li class="header__gnb__item">
            <router-link to="./" class="header__link">홈</router-link>
          </li>
          <li class="header__gnb__item">
            <router-link to="./service" class="header__link"
              >서비스</router-link
            >
          </li>
          <li class="header__gnb__item">
            <router-link to="./product" class="header__link">상품소개</router-link>
          </li>
          <li class="header__gnb__item">
            <router-link to="./main" class="header__link">커뮤니티</router-link>
          </li>
          <li class="header__gnb__item">
            <router-link to="./main" class="header__link">문의하기</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>

export default {
  data() {
    return {};
  },
  components:{
    
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/header.scss";
</style>
