<template>
  <div>
    <MessageComponent :messageText="msg" v-show="msg" />
    <form id="ingredient-form">
      <h3 style="margin-bottom: 15px;">{{ title }}</h3>
      <div class="input-container">
        <label for="nameClient">Nome:</label>
        <input type="text" name="nameClient" id="nameClient" v-model="ingredient.name" placeholder="Digite o nome...">
      </div>
      <div class="btn-container">
        <input v-if="ingredient.name" type="button" class="submit-btn"
          :value="ingredient.id ? 'Salvar Alterações' : 'Cadastrar'"
          @click="saveChanges(ingredient.id ? 'update' : 'create')">
        <input v-if="ingredient.name" type="button" class="submit-btn clean" value="Limpar" @click="reset">
        <input v-if="ingredient.id" type="button" class="submit-btn delete" value="Deletar"
          @click="saveChanges('delete')">
      </div>
      <h4 style="margin-bottom: 10px;">Editar Existentes</h4>
      <div class="list-container">
        <div class="list-item" v-for=" item  in  list " :key="item.id" @click="ingredient = item">{{ item.name }}</div>
      </div>
    </form>
  </div>
</template>

<script>
import MessageComponent from '../../../components/MessageComponent.vue';

export default {
  props: ['title', 'type', 'list'],
  components: { MessageComponent },
  data() {
    return {
      ingredient: {
        id: null,
        name: null
      },
    }
  },
  methods: {
    saveChanges(action) {
      if (this.ingredient.name == null || this.ingredient.name == "") return
      this.ingredient.action = action
      this.ingredient.type = this.type
      this.$emit('hanldeIngredient', this.ingredient)
      this.reset()
    },
    reset() {
      this.ingredient = {
        id: null,
        name: null
      }
    }
  }
}
</script>

<style scoped>
#ingredient-form {
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

.btn-container {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  gap: 15px;
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

.submit-btn.delete:hover {
  background-color: red;
  color: white;
  border: none;
}

.submit-btn.clean:hover {
  background-color: blue;
  color: white;
  border: none;
}

.list-container {
  max-height: 100px;
  overflow: hidden;
  overflow-y: auto;
}

.list-item {
  background-color: #222;
  color: #FCBA03;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: 0.5s;
  border: 2px solid #222;
}

.list-item:hover {
  background-color: transparent;
  color: #222;
}
</style>