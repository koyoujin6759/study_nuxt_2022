<template>
    <div id="app">
        <Header />        
        <Nuxt />   
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
    name: 'default',
    components: {
        Header,
        Footer
    }
};
</script>

<style lang="scss" scoped>

</style>