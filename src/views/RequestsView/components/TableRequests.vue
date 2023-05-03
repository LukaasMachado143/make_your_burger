<template>
    <div id="main-table">
        <div id="table-head">
          <div class="order-id">N.</div>
          <div>Cliente</div>
          <div>Pão</div>
          <div>Carne</div>
          <div>Opcionais</div>
          <div>Status</div>
          <div>Ações</div>
        </div>
        <div id="table-body">
          <div id="row">
            <div class="order-number">1</div>
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
            <div id="acoes">
              <select name="status" id="status" v-model="status">
                <option value="">Selecione...</option>
              </select>
              <button class="delete-btn">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    name: 'TableRequests',
    data(){
        return{
            status: ['Em produção', 'Finalizado']
        }
    }
}
</script>

<style scoped>
    #main-table{
        max-width: 1200px;
        margin: 0 auto; 
    }

    #table-head,
    #table-body,
    #row{
        display: flex;
        flex-wrap: wrap;
    }

    #table-head{
        font-weight: bold;
        border-bottom: 3px solid #333;
        padding: 5px;

    }

    #table-head div,
    #row div{
        width: 15%;
    }

    #acoes{
        width: 20%;
    }


    #row{
        width: 100%;
        padding: 12px;
        border-bottom: 2px solid #ccc;
    }

    #table-head .order-id,
    #table-body .order-number{
        width: 4%;
    }

    select{
        padding: 12px 6px;
        margin-bottom: 15px;
    }   

    .delete-btn{
        background-color: #222;
        color:#FCBA03;
        font-weight: bold;
        border: 2px solid #222;
        border-radius: 5px;
        padding: 5px;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
        transition: 0.5s;
      }
    
      .delete-btn:hover{
        background-color: transparent;
        color: #222;
      }

</style>