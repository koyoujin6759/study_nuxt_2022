<template>
    <div>
        <Parents class="custom-parents" id="ParentId" ref="parent_ref">
            <template slot="item1">teststeststes</template>
            <template slot="item2">
                <Child v-model="value"></Child>
            </template>
        </Parents>
        <button @click="parentShow()">show</button>

        <Parents >
            <template slot="item1">testteststes</template>
            <template slot="item2">
                <Child v-model="value"></Child>
            </template>
        </Parents>
        
        <button @click="movePage()">이동</button>

        <ul style="padding:50px;">
            <li v-for="item in formattedList" :key="item.i">{{item}}</li>
        </ul>
    </div>
</template>

<script>
import Child from '@/components/Child'
import Parents from '@/components/Parents';
export default {

    data() {
        return {
            value:'hi',
            list: [1,9,3,2,5,0]
        };
    },
    components: {
        Parents,
        Child
    },
    computed: {
        formattedList() {
            return this.list.filter((item) => item !== 5);
        }
    },

    mounted() {
        
    },

    methods: {
        // hello() {
        //     this.$refs.parent_ref.sayHello();
        // }
        async parentShow() {
            let ok = await this.$refs.parent_ref.sayHello();

            if(ok) {
                alert("성공")
            }
        },
        movePage() {
            this.$router.push('/qna/create')
        }
    },
};
</script>

<style lang="scss" scoped>
    .custom-parents {
        margin:40px;
        background:beige;
    }
</style>