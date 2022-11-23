<template>
  <div>
    <input type="text" v-model="inputValue"/>
    <ClassItem 
    v-for="item in classList"
    :key="item.i"
    :item="item"
    ></ClassItem>
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
  watch: {
    inputValue() {
      console.log(this.inputValue)
    }
  }
};
</script>

<style lang="scss" scoped></style>
