
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

<style scoped>
</style>