<template>
  <div>
    <h2>세부페이지 ID : {{ id }}</h2>
    <strong></strong>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  mounted() {
    console.log(this.$route)
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/page/product.scss";
</style>
