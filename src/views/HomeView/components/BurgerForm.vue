<template>
  <div>
    <div>
      <label for="clienteName">Nome do Cliente:</label>
      <input type="text" name="clienteName" id="clienteName" placeholder="Digite seu nome...">
    </div>

    <div>
      <label for="breadType">Tipo do Pão:</label>
      <select name="breadType" id="breadType">
        <option value="">Selecione o tipo do pão...</option>
        <option value="frances">Pão Francês</option>
      </select>
    </div>

    <div>
      <label for="meatType">Tipo da Carne:</label>
      <select name="meatType" id="meatType">
        <option value="">Selecione o tipo da carne...</option>
        <option value="maninha">Maminha</option>
      </select>
    </div>

    <div>
      <label for="optionalItems">Escolha seus opcionais:</label>
      <div>
        <input type="checkbox" name="salame" id="salame">
        <label for="salame">Salame</label>  
      </div>
    </div>

    <div>
      <input type="button" value="Fazer Pedido">
    </div>
  </div>
</template>

<script>
    export default {
        name: 'BurgerForm'
    }
</script>

<style>

</style>