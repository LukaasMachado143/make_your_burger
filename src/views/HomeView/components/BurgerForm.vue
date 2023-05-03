<template>
  <div>
    <form id="burger-form"  @submit="insertBurger">
      <div class="input-container">
        <label for="nameClient">Nome do Cliente:</label>
        <input type="text" name="nameClient" id="nameClient" v-model="nameClient" placeholder="Digite seu nome...">
      </div>

      <div class="input-container">
        <label for="breadType">Tipo do Pão:</label>
        <select name="breadType" id="breadType" v-model="breadType">
          <option value="">Selecione o tipo do pão...</option>
          <option v-for="bread in breadTypesData" :key="bread.id" :value="bread.type">{{bread.type}}</option>
        </select>
      </div>

      <div class="input-container">
        <label for="meatType">Tipo da Carne:</label>
        <select name="meatType" id="meatType" v-model="meatType">
          <option value="">Selecione o tipo da carne...</option>
          <option v-for="meat in meatTypesData" :key="meat.id" :value="meat.type">{{meat.type}}</option>
        </select>
      </div>

      <div id="optional-container" class="input-container">
        <label id="optional-title" for="optionalItems" >Escolha seus opcionais:</label>
        <div class="checkbox-container" v-for="optionalItem in optionalItemsData" :key="optionalItem.id">
          <input type="checkbox" name="optionalItems" id="optionalItems" v-model="optionalItems" :value="optionalItem.type">
          <span>{{optionalItem.type}}</span>  
        </div>
      </div>

      <div class="input-container">
        <input type="submit" class="submit-btn" value="Fazer Pedido">
      </div>
    </form>
  </div>
</template>

<script>
    export default {
        name: 'BurgerForm',
        data(){
          return{
            breadTypesData:null,
            meatTypesData: null,
            optionalItemsData:null,
            nameClient: null,
            breadType: null,
            meatType: null,
            optionalItems: [],
            msg: null
          }
        },
        methods:{
          async getIngredients(){
            const request = await fetch('http://localhost:3000/ingredients')
            const requestData = await request.json();
            this.breadTypesData = requestData.breadTypes;
            this.meatTypesData = requestData.meatTypes;
            this.optionalItemsData = requestData.optionalItems;
          },

          async insertBurger(e){
            //prevent default events
            e.preventDefault();

            //creating body post
            const burgerData= {
              name: this.nameClient,
              bread: this.breadType,
              meat: this.meatType,
              optionalItems: Array.from(this.optionalItems),
              status: "Solicitado"
            }

            //transforming body in json Object
            const burgerJson = JSON.stringify(burgerData);

            //Send request to insert json Object
            const postRequest = await fetch('http://localhost:3000/burgers',{
              method: "POST",
              headers: { "Content-Type": "application/json"},
              body: burgerJson

            });

            //Return of insert
            const serverAnswer = await postRequest.json();
            console.log(serverAnswer)

            //send message for user
            

            //clearning form
            this.nameClient = "";
            this.breadType = "";
            this.meatType = "";
            this.optionalItems = [];
            
          }

        },
        mounted() {
          this.getIngredients();
        },
        
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