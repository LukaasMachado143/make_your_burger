<template>
  <div>
    <MessageComponent :messageText="msg" v-show="msg" />
    <form id="burger-form">
      <div class="input-container">
        <label for="nameClient">Nome do Cliente:</label>
        <input type="text" name="nameClient" id="nameClient" v-model="nameClient" placeholder="Digite seu nome...">
      </div>

      <div class="input-container">
        <label for="breadType">Tipo do Pão:</label>
        <select name="breadType" id="breadType" v-model="breadType" placeholder="Selecione o tipo do pão...">
          <option v-for="bread in breadTypesData" :key="bread.id" :value="bread">{{ bread.name }}</option>
        </select>
      </div>

      <div class="input-container">
        <label for="meatType">Tipo da Carne:</label>
        <select name="meatType" id="meatType" v-model="meatType" placeholder="Selecione o tipo da carne...">
          <option v-for="meat in meatTypesData" :key="meat.id" :value="meat">{{ meat.name }}</option>
        </select>
      </div>

      <div id="optional-container" class="input-container">
        <label id="optional-title" for="optionalItems">Escolha seus opcionais:</label>
        <div class="checkbox-container" v-for="optionalItem in optionalItemsData" :key="optionalItem.id">
          <input type="checkbox" name="optionalItems" id="optionalItems" v-model="optionalItems" :value="optionalItem">
          <span>{{ optionalItem.name }}</span>
        </div>
      </div>

      <div class="input-container">
        <input type="button" class="submit-btn" value="Fazer Pedido" @click="createBurgerRequest">
      </div>
    </form>
  </div>
</template>

<script>
import MessageComponent from '../../../components/MessageComponent.vue';
import IngredientService from '../../../backend/services/ingredientService';
export default {
  name: "BurgerForm",
  data() {
    return {
      breadTypesData: [],
      meatTypesData: [],
      optionalItemsData: [],
      nameClient: null,
      breadType: null,
      meatType: null,
      optionalItems: [],
      msg: null,
      service: new IngredientService()
    };
  },
  methods: {
    getIngredients() {
      this.resetForm()
      this.service.getAll().then((res) => {
        if (res.data.success == true) {
          this.breadTypesData = res.data.data.filter((ingredient) => ingredient.type == 'bread')
          this.meatTypesData = res.data.data.filter((ingredient) => ingredient.type == 'meat')
          this.optionalItemsData = res.data.data.filter((ingredient) => ingredient.type == 'optional')
        }
      }).catch((error) => {
        console.log(error)
      })
    },

    resetForm() {
      this.breadTypesData = []
      this.meatTypesData = []
      this.optionalItemsData = []
      this.nameClient = null
      this.breadType = null
      this.meatType = null
      this.optionalItems = []
    },
    
    resetSelections() {
      this.nameClient = null
      this.breadType = null
      this.meatType = null
      this.optionalItems = []
    },

    prepareBody() {

      let request = {
        name: null,
        ingredients: []
      }

      request.name = this.nameClient
      if (this.breadType) request.ingredients.push(this.breadType)
      if (this.meatType) request.ingredients.push(this.meatType)
      if (this.optionalItems) request.ingredients.push(...this.optionalItems)

      return request
    },

    createBurgerRequest() {
      const request = this.prepareBody()
      this.resetSelections()
      console.log(request)
    }

  },
  mounted() {
    this.getIngredients();
  },
  components: { MessageComponent }
}
</script>

<style scoped>
#burger-form {
  max-width: 400px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 15px;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #FCBA03;
}

input,
select {
  padding: 5px 10px;
  width: 300px;
  margin-left: 10px;
}

#optional-container {
  flex-direction: row;
  flex-wrap: wrap;
}

#optional-title {
  width: 100%;
}

.checkbox-container {
  display: flex;
  align-items: flex-start;
  width: 50%;
  margin-bottom: 20px;
}

.checkbox-container span,
.checkbox-container input {
  width: auto;
}

.checkbox-container span {
  margin-left: 6px;
  font-weight: bold;
}

.submit-btn {
  background-color: #222;
  color: #FCBA03;
  font-weight: bold;
  border: 2px solid #222;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}

.submit-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>