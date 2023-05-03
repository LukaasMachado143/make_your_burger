<template>
  <div class="message-container">
    <p>{{messageText}}</p>
  </div>
</template>

<script>
    export default {
        name: 'MessageComponent',
        props:{
          messageText: String
        }
    }
</script>

<style scoped>
  .message-container{
    background-color: #66FF99;
    border: 2px solid #00CC00;
    border-radius: 5px;
    padding: 15px;
    max-width: 400px;
    margin: 30px auto;
    font-weight: bold;
    font-size: 20px;
  }

</style>