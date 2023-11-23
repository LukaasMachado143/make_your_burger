<template>
  <div class="main-container">
    <h1>Configure seus ingredientes</h1>
    <ingredient-form v-for="ingredient, index in ingredients" :key="index" style="margin-bottom: 35px;"
      :title="ingredient.title" :type="ingredient.type" :list="ingredient.list" @hanldeIngredient="hanldeIngredient" />
  </div>
</template>

<script>
import IngredientForm from './components/ingredientForm.vue'
export default {
  name: "IngredientsView",
  components: { IngredientForm },
  data() {
    return {
      ingredients: [
        {
          title: 'Pães',
          type: 'bread',
          list: [
            {
              id: '1',
              name: 'Americano'
            },
            {
              id: '2',
              name: 'Brioche'
            },
            {
              id: '3',
              name: 'Ciabatta'
            },
            {
              id: '4',
              name: 'Pão de cebola'
            },
            {
              id: '5',
              name: 'Italiano'
            },
            {
              id: '6',
              name: 'Pão de azeite'
            },
            {
              id: '7',
              name: 'Pão de Xis'
            },
            {
              id: '8',
              name: 'Australiano'
            },
            {
              id: '9',
              name: 'Pão de leite'
            },
            {
              id: '10',
              name: 'Baguette'
            },
          ]
        },
        {
          title: 'Carnes',
          type: 'meat',
          list: [
            {
              id: 1,
              name: "Maminha"
            },
            {
              id: 2,
              name: "Alcatra"
            },
            {
              id: 3,
              name: "Picanha"
            },
            {
              id: 4,
              name: "Veggie burger"
            }
          ]
        },
        {
          title: 'Opcionais',
          type: 'optional',
          list: [
            {
              id: 1,
              name: "Bacon"
            },
            {
              id: 2,
              name: "Cheddar"
            },
            {
              id: 3,
              name: "Salame"
            },
            {
              id: 4,
              name: "Tomate"
            },
            {
              id: 4,
              name: "Cebola roxa"
            },
            {
              id: 4,
              name: "Pepino"
            }
          ]
        }
      ]
    }
  },
  methods: {
    hanldeIngredient(ingredient) {
      console.log(ingredient)
    }
  }
}
</script>
