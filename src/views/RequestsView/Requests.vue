<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="main-container">
    <h1>Gerenciador de Pedidos:</h1>
    <div id="main-table">
      <div id="main-head">
        <div>N.</div>
        <div>Cliente</div>
        <div>Pão</div>
        <div>Carne</div>
        <div>Opcionais</div>
        <div>Status</div>
        <div>Ações</div>
      </div>
      <div id="main-body">
        <div id="row">
          <div>1</div>
          <div>Lucas</div>
          <div>3 Queijos</div>
          <div>Maminha</div>
          <div>
            <ul>
              <li>Salame</li>
              <li>Maionese</li>
              <li>Tomate</li>
            </ul>
          </div>
          <div>Solicitado</div>
          <div>
            <select>
              <option value="">Alterar Status do Pedido...</option>
            </select>
            <button>Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
