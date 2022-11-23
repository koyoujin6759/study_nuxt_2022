<template>
    <div class="class-item">
        <h2>나는 {{item.name}}</h2>
        <p>나는 {{item.msg}}</p>
        <div v-if="item.user">
            <span>{{item.user.id}}</span>
        </div>
        <div v-if="item.published_lecture">
            <div v-for="lecture in item.published_lecture" :key="lecture.i">
                {{lecture.id}}
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'StudyNuxt2022ClassItem', 
    props: {
        item: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            
        };
    },

    mounted() {
        console.log(this.item)
        if(this.item.user?.id) {
            console.log("ggg")
        }
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.class-item {
    padding:20px;
    border:2px solid #ddd;
    margin-bottom:20px;
    width:fit-content;
}
</style>