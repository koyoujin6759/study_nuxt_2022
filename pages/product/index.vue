<template>
  <div class="main">
    <button @click="goBack()">뒤로가기</button>
    <h2>국내 야구팀</h2>
    <ul class="card">
      <li class="card__item" v-for="item in baseballTeamList" :key="item.i" @click="goDetailPage(item.id)">
        <div class="card__item__logo">
          <img :src="require(`@/assets/images/${item.logo}.png`)" alt="야구 로고" v-if="item.logo" />
          <img src="@/assets/images/logo_none.png" alt="야구 로고 없음" v-else-if="item.logo === null" />
        </div>
        <div class="card__item__cont">
          <h3>
            <span>{{item.title}}</span>
            <span class="badge" v-if="item.rank < 4" @click.stop="showRank(item.rank)">{{item.rank}}등</span>
          </h3>
          <p v-html="item.inform"></p>
        </div>
      </li>
    </ul>
    <h2>당신의 MBTI는?</h2>
    <div class="my-mbti">
      <input type="text" v-model="myMbti" @input="inputMbti" />
      <button class="my-mbti__reset-btn" @click="reset">reset</button>
      <p>
        안녕하세요 저의 MBTI는
        <span class="badge" v-if="myMbti">{{myMbti}}</span> 입니다.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseballTeamList: [
        {
          logo: "logo_hanwha",
          title: "한화",
          rank: 3,
          id: 1,
        },
        {
          logo: "logo_kiwoom",
          title: "키움",
          rank: 1,
          inform: "최고다! <span style='color:blue' class='class-test'>우왕</span>",
          id: 2,
        },
        {
          logo: "logo_lotte",
          title: "롯데",
          rank: 4,
          id: 3,
          inform: "<b>아싸~~</b>"
        },
        {
          logo: "logo_doosan",
          title: "두산",
          rank: 2,
          id: 4,
        },
        {
          logo: null,
          title: "삼성",
          rank: 5,
          id: 5,
        },
      ],
      myMbti: "",
    };
  },
  methods: {
    inputMbti() {
      console.log(this.myMbti)
    },
    reset() {
      this.myMbti = null;
    },
    goDetailPage(id) {
      this.$router.push(`/product/${id}`)
    },
    showRank(rank) {
      alert(rank + '등')
    },
    goBack() {
      this.$router.go(-1);
    }
  },
};
</script>

<style lang="scss">
.class-test {background: red;}
</style>

<style lang="scss" scoped>
@import "@/assets/scss/page/product.scss";
</style>
