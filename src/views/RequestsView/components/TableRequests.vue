<template>
  <div id="main-table">
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
          <select name="status" id="status" v-model="burgerData.status" @change="alterStatusRequest($event,burgerData.id)">
            <option
              v-for="status in statusData"
              :key="status.id"
              :value="status.type"
              :selected="burgerData.status"
            >
              {{ status.type }}
            </option>
          </select>
          <button class="delete-btn" @click="deleteRequest(burgerData.id)">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableRequests',
  data() {
    return {
      burgersData: null,
      statusData: null
    }
  },
  methods: {
    async getBurgerRequests() {
      const request = await fetch('http://localhost:3000/burgers')
      const burgerRequestData = await request.json()
      this.burgersData = burgerRequestData
      this.getStatus()
    },
    async getStatus() {
      const request = await fetch('http://localhost:3000/status')
      const statusRequestData = await request.json()
      this.statusData = statusRequestData
    },
    async deleteRequest(id) {
      const deleteRequest = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: 'DELETE'
      })

      const response = await deleteRequest.json()

      setTimeout(() => {
        this.getBurgerRequests()
      }, response);
    },
    async alterStatusRequest(event, id){
      const newStatus = event.target.value;
      const newstatusSend = JSON.stringify({status: newStatus});
      const alterRequest = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: 'PATCH',
        headers: {'Content-Type':'application/json'},
        body: newstatusSend
      });

      const response = await alterRequest.json();
      setTimeout(() => {
        this.getBurgerRequests()
      }, response);

    }
  },
  mounted() {
    this.getBurgerRequests()
  }
}
</script>

<style scoped>
#main-table {
  max-width: 1200px;
  margin: 0 auto;
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
  width: 15%;
}

#acoes {
  width: 20%;
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
  padding: 5px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}

.delete-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>