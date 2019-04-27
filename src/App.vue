<style>
    #appa {
        background-image: url(static/images/bg.jpg);
        background-repeat: repeat;
        /*background-image: url(static/images/top-stories-events_section-background.jpg);*/
        background-attachment: scroll;
        /*background-size:300px;*/
    }
</style>

<template>
    <div id="appa">
        <navigation id="nav"></navigation>
        <!--<trading id="trading"></trading>-->
        <router-view></router-view>
        <PageFooter id="pagefooter"></PageFooter>
    </div>
</template>

<script>
    import Navigation from "./components/Navigation.vue";
    // import Trading from "./components/Trading.vue";
    import PageFooter from "./components/PageFooter.vue";
    export default {
        name: "app",
        components: {
            Navigation,
            // Trading,
            PageFooter,
        },
        beforeCreate() {
            let appwidth = window.outerWidth;
        },
    };
</script>
