<template>
    <div class="parent" v-if="btn">
        <h2>타이틀1</h2>
        <hr/>
        <p>아이템1</p>
        <slot name="item1">ㅇㅇ</slot>
        <hr/>
        <p>아이템2</p>
        <slot name="item2"></slot>
        <hr/>
        <!-- <strong v-if="hello" >hello</strong> -->
        <!-- <button v-if="hello" >확인</button> -->
        <button @click="confirm">확인</button>
        <button @click="cancel" >취소</button>
    </div>
</template>

<script>
export default {
  components: {  },
    data() {
        return {
            hello:false,
            resolve:null,
            reject:null,
            btn:false
        };
    },

    mounted() {
        
    },

    methods: {
        sayHello() {
            // this.hello = true
            this.btn = true;
            return new Promise((resolve,reject) => {
                this.resolve = resolve;
                this.reject = reject;
            })
        },
        confirm() {
            this.resolve(true);
        },
        cancel() {
            this.btn = false;
        }
    },
};
</script>

<style lang="scss" scoped>
.parent {
    border:1px solid purple;
    padding:40px;
}
</style>