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
    promise() {},
  },
  mounted() {
    this.promise();
  },
};
</script>

<style lang="scss" scoped></style>
