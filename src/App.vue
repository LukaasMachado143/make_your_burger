
<template> 
  <NavBar :logo="logo_src" :descriptionImage="dcpImg"/>
  <RouterView />
  <FooterComponent />
</template>

<script >
import NavBar from './components/NavBar.vue';
import FooterComponent from './components/FooterComponent.vue';
export default{
  name: 'App',
  components:{
    NavBar,
    FooterComponent
  }, data(){
    return{
      logo_src: '/public/img/logo.png',
      dcpImg: 'Make Your Burger - Faça seu Hamburguer'
    }
  }
}
</script>

<style>
  *{
    font-family: Helvetica;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .main-container{
    margin: 50px;
    min-height: 250px;
  }

  h1{
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }
</style>