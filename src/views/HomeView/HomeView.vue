<template>
  <div class="main-container">
    <Banner />
    <h1>Monte o seu burger:</h1>
    <BurgerForm />
  </div>
</template>
<script>
import Banner from './components/Banner.vue';
import BurgerForm from './components/BurgerForm.vue';
export default {
  name: 'HomeView',
  components: {
    Banner,
    BurgerForm
  }
}
</script>
<style scoped>
h1 {
  margin-top: 20px;
}
</style>

