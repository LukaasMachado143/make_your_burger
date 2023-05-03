<template>
  <div>
    <form id="burger-form">
      <div class="input-container">
        <label for="clienteName">Nome do Cliente:</label>
        <input type="text" name="clienteName" id="clienteName" v-model="clienteName" placeholder="Digite seu nome...">
      </div>

      <div class="input-container">
        <label for="breadType">Tipo do Pão:</label>
        <select name="breadType" id="breadType" v-model="breadType">
          <option value="">Selecione o tipo do pão...</option>
          <option value="frances">Pão Francês</option>
        </select>
      </div>

      <div class="input-container">
        <label for="meatType">Tipo da Carne:</label>
        <select name="meatType" id="meatType" v-model="meatType">
          <option value="">Selecione o tipo da carne...</option>
          <option value="maninha">Maminha</option>
        </select>
      </div>

      <div id="optional-container" class="input-container">
        <label id="optional-title" for="optionalItems" >Escolha seus opcionais:</label>
        <div class="checkbox-container">
          <input type="checkbox" name="optionalItems" id="optionalItems" v-model="optionalItems" value="salame">
          <span>Salame</span>  
        </div>
        <div class="checkbox-container">
          <input type="checkbox" name="optionalItems" id="optionalItems" v-model="optionalItems" value="salame">
          <span>Salame</span>  
        </div>
        <div class="checkbox-container">
          <input type="checkbox" name="optionalItems" id="optionalItems" v-model="optionalItems" value="salame">
          <span>Salame</span>  
        </div>
      </div>

      <div class="input-container">
        <input type="button" class="submit-btn" value="Fazer Pedido">
      </div>
    </form>
  </div>
</template>

<script>
    export default {
        name: 'BurgerForm'
    }
</script>

<style scoped>
  #burger-form{
    max-width: 400px;
    margin: 0 auto;
  }

  .input-container{
    display: flex;
    flex-direction: column;
   margin-bottom: 20px; 
  }

  label{
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;
    padding: 5px 10px;
    border-left: 4px solid #FCBA03;
  }

  input, select{
    padding: 5px 10px;
    width: 300px;
    margin-left: 10px ;
  }

  #optional-container{
    flex-direction: row;
    flex-wrap: wrap;
  }

  #optional-title{
    width: 100%;
  }

  .checkbox-container{
    display: flex;
    align-items: flex-start;
    width: 50%;
    margin-bottom: 20px;
  }

  .checkbox-container span,
  .checkbox-container input{
    width: auto;
  }

  .checkbox-container span{
    margin-left: 6px;
    font-weight: bold;
  }

  .submit-btn{
    background-color: #222;
    color:#FCBA03;
    font-weight: bold;
    border: 2px solid #222;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: 0.5s;
  }

  .submit-btn:hover{
    background-color: transparent;
    color: #222;
  }
</style>