<template>
  <div id="main-table">
    <MessageComponent :messageText="msg" v-show="msg" />
    <div id="table-head">
      <div class="order-id">N.</div>
      <div>Cliente</div>
      <div>Pão</div>
      <div>Carne</div>
      <div>Opcionais</div>
      <div>Ações</div>
    </div>
    <div id="table-body">
      <div id="row" v-for="burgerData in burgersData" :key="burgerData.id">
        <div class="order-number">{{ burgerData.id }}</div>
        <div>{{ burgerData.name }}</div>
        <div>{{ burgerData.bread }}</div>
        <div>{{ burgerData.meat }}</div>
        <div>
          <ul>
            <li v-for="(optionalItem, index) in burgerData.optionalItems" :key="index">
              {{ optionalItem }}
            </li>
          </ul>
        </div>
        <div id="acoes">
          <select name="status" id="status" v-model="burgerData.status"
            @change="alterStatusRequest($event, burgerData.id)">
            <option v-for="status, index in statusList" :key="index" :value="status" :selected="burgerData.status">
              {{ status }}
            </option>
          </select>
          <button class="delete-btn" @click="deleteRequest(burgerData.id)">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MessageComponent from '../../../components/MessageComponent.vue'
import Service from "../../../backend/services/burgerService"
export default {
  name: 'TableRequests',
  components: {
    MessageComponent
  },
  data() {
    return {
      burgersData: [],
      statusList: ["Solicitado", "Em produção", "Finalizado"],
      statusData: null,
      msg: null,
      service: new Service()
    }
  },
  methods: {
    getBurgerRequests() {
      this.burgersData = []
      this.service.getTable().then((res) => {
        if (res.data.success) this.burgersData = res.data.data
      }).catch((error) => {
        console.log(error)
      })
    },
    deleteRequest(id) {
      this.service.delete(id).then((res) => {
        if (res.data.success == true) this.getBurgerRequests()
      }).catch((error) => {
        console.log(error)
      })

    }
   
    // async alterStatusRequest(event, id) {
    //   const newStatus = event.target.value
    //   const newstatusSend = JSON.stringify({ status: newStatus })
    //   const alterRequest = await fetch(`http://localhost:3000/burgers/${id}`, {
    //     method: 'PATCH',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: newstatusSend
    //   })

    //   const response = await alterRequest.json();

    //   this.msg = `Status do pedido N.${response.id} atualizado para ${response.status}.`
    //   setTimeout(() => {
    //     this.msg = '',
    //     this.getBurgerRequests()
    //   }, 5000)
    // }
  },
  mounted() {
    this.getBurgerRequests()
  }
}
</script>

<style scoped>
#main-table {
  width: 100;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

#table-head,
#table-body,
#row {
  display: flex;
  flex-wrap: wrap;
}

#table-head {
  font-weight: bold;
  border-bottom: 3px solid #333;
  padding: 5px;
}

#table-head div,
#row div {
  width: 18%;
}

#acoes {
  display: flex;
}

#row {
  width: 100%;
  padding: 12px;
  border-bottom: 2px solid #ccc;
}

#table-head .order-id,
#table-body .order-number {
  width: 4%;
}

select {
  padding: 12px 6px;
  margin-bottom: 15px;
}

.delete-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  border-radius: 5px;
  padding: 0px 25px 0px 25px;
  font-size: 16px;
  margin: 0 10px;
  cursor: pointer;
  transition: 0.5s;
  height: 43px;
}

.delete-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>