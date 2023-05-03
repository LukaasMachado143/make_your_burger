<template>
  <div class="main-container">
    <h1>Gerenciador de Pedidos</h1>
    <TableRequests />
  </div>
</template>
<script>
  import TableRequests from './components/TableRequests.vue';
  export default {
    name: 'RequestsView',
    components:{
      TableRequests
    }
  }
</script>

<style scoped>
</style>
