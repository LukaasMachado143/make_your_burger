<template>
    <div id="main-banner">
        <h1>Make Your Burger</h1>
    </div>
</template>

<script>
    export default {
        name: 'Banner'
    }
</script>

<style scoped>
    #main-banner{
        background-image: url('/img/burger.jpg');
        background-position: center;
        background-size: cover;
        height: 420px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        backdrop-filter: blur( 13.5px );
        -webkit-backdrop-filter: blur( 13.5px );
        border: 15px solid rgba( 255, 255, 255, 0.18 );
        border-radius: 10px;
    }

    #main-banner h1{
        background-color: rgba( 255, 255, 255, 0.10 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 13.5px );
        -webkit-backdrop-filter: blur( 13.5px );
        border: 1px solid rgba( 255, 255, 255, 0.50 );
        border-radius: 50px;
        color: #FFF;
        text-align: center;
        font-size: 60px;
        padding: 15px;
        margin-left: 20px;
    }
</style>