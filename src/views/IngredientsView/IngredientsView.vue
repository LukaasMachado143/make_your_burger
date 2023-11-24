<template>
  <div class="main-container">
    <h1>Configure seus ingredientes</h1>
    <ingredient-form v-for="ingredient, index in ingredients" :key="index" style="margin-bottom: 35px;"
      :title="ingredient.title" :type="ingredient.type" :list="ingredient.list" @hanldeIngredient="hanldeIngredient" />
  </div>
</template>

<script>
import IngredientForm from './components/ingredientForm.vue'
import IngredientService from '../../backend/services/ingredientService.js'
export default {
  name: "IngredientsView",
  components: { IngredientForm },
  data() {
    return {
      service: new IngredientService(),
      ingredients: [
        {
          title: 'Pães',
          type: 'bread',
          list: []
        },
        {
          title: 'Carnes',
          type: 'meat',
          list: []
        },
        {
          title: 'Opcionais',
          type: 'optional',
          list: []
        }
      ]
    }
  },
  methods: {
    resetList() {
      this.ingredients = this.ingredients.map((item) => {
        return { ...item, list: [] }
      })
    },
    getList() {
      this.resetList()
      this.service.getFormatedList().then((res) => {
        if (res.data.success == true) {
          this.ingredients = this.ingredients.map((item) => {
            const listByType = res.data.data.find((list) =>
              list.type == item.type
            )?.list
            return { ...item, list: listByType ?? [] }
          })
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    create(ingredient) {
      this.service.create(ingredient).then((res) => {
        if (res.data.success == true) this.getList()
      }).catch((error) => {
        console.log(error)
      })
    },
    update(id, name) {
      this.service.update(id, name).then((res) => {
        if (res.data.success == true) this.getList()
      }).catch((error) => {
        console.log(error)
      })
    },
    delete(id) {
      this.service.delete(id).then((res) => {
        if (res.data.success == true) this.getList()
      }).catch((error) => {
        console.log(error)
      })
    },
    hanldeIngredient(ingredient) {
      switch (ingredient.action) {
        case "create":
          delete ingredient.action
          delete ingredient.id
          this.create(ingredient)
          break;
        case "update":
          delete ingredient.action
          delete ingredient.type
          this.update(ingredient.id, ingredient.name)
          break;
        case "delete":
          delete ingredient.action
          delete ingredient.type
          delete ingredient.name
          this.delete(ingredient.id)
          break;
        default:
          break;
      }
    }
  },
  created() {
    this.getList()
  }
}
</script>
