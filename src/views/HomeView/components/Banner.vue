<template>
    <div id="main-banner">
        <h1>Make Your Burger</h1>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Banner'
    }
</script>

<style scoped>
    #main-banner{
        background-image: url('/img/burger.jpg');
        background-position: 0 -250px;
        background-size: cover;
        height: 420px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    #main-banner h1{
        background-color: #fcba0332;
        color: #FFF;
        text-align: center;
        font-size: 60px;
        border-radius: 50px;
        padding: 15px;
    }
</style>