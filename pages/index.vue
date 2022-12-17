<template>
  <div>
    <input type="text" v-model="inputValue"/>
    <ClassItem 
    v-for="item in classList"
    :key="item.i"
    :item="item"
    ></ClassItem>
    <button @click="goPage('/product')">경로이동</button>
    <button @click="goReplace('/product')">경로이동</button>
    <hr>
    <button @click="increaseCnt()">증가</button>
    <div>
      {{this.$store.state.count}}
      {{count}}
    </div>
    <!-- <ClassItem :name="'colin'" :msg="'hihi'"></ClassItem> -->
  </div>
</template>

<script>
import ClassItem from '@/components/ClassItem.vue';
import common from '@/mixin/common.js';
export default {
  mixin:[common],
  components: {
    ClassItem
  },
  data() {
    return {
      inputValue:null,
      classList: [
        {
          name:'kiki',
          msg: 'hellodd',
          user: {
            id:20,
            type:1,
            price:2000,
          },
          published_lecture: [
            {
              id:1,
            },
            {
              id:2
            }
          ]
        },
        {
          name:'framk',
          msg: 'hihi'
        },
      ]
    }
  },
  computed: {
    count() {
      return this.$store.getters.getIncreaseCount;
    },
  },
  watch: {
    inputValue() {
      console.log(this.inputValue)
    }
  },
  methods: {
    goPage(url) {
      this.$router.push({path:url, query: {id: 102}});
    },
    goReplace(url) {
      this.$router.replace({path:url, query: {id: 102}});
    },
    increaseCnt() {
      this.$store.commit("addCounter",10);
    },

  },
  mounted() {
    this.$store.dispatch("getCounter")
  }
};
</script>

<style lang="scss" scoped></style>
