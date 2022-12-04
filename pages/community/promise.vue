<template>
  <div style="padding: 20px">
    <h2>Promise 연습하기</h2>
  </div>
</template>

<script>
import api from "@/mixin/api";

export default {
  mixins: [api],
  data() {
    return {};
  },
  methods: {
    //간단한 예제
    promise() {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(4),reject(new Error());
        },1000)
      })

      promise 
        .then((response) => response + 3) //중간처리
        .then((response) => console.log(response));
    },
    delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async getApple() {
      await this.delay(2000);
      return "🍎";
    },
    async getBanana() {
      await this.delay(1000);
      return "🍗";
    },
    async pickAllFruits() {
      //모두응답후 출력
      const response = await Promise.all([this.getApple(), this.getBanana()]);
      return response.join(',');
    },
    pickOnlyOne() {
      return Promise.race([this.getApple(), this.getBanana()]);
    }
  },
  mounted() {
    this.promise();
    this.getApple().then(console.log);
    this.pickAllFruits().then(console.log);
    this.pickOnlyOne().then(console.log);
  },
};
</script>

<style lang="scss" scoped></style>
