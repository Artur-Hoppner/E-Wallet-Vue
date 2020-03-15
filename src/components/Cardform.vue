<template>
  <div class="createcard">

<Card/>
    <main  class="createcards">
    <h1>Creater Cards</h1>


    <label for="cardnumber">CARD NUMBER</label>
    <input type="number" name="cardnumber" placeholder="XXXX XXXX XXXX XXXX" maxlength="16" v-model="cardlist.cardnumber">

    <label for="cardholdername">CARDHOLDER NAME</label>
    <input type="text" name="cardholdername" placeholder="Firstname Lastname" maxlength="24" v-model="cardlist.cardholdername">

    <select name="month" v-model="cardlist.month"> 
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
     </select> 

     <select name="year" v-model="cardlist.year">
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>      
     </select>

<select name="Vendor" v-model="cardlist.vendor">
    <option value="bitcoin">Bitcoin Inc</option>
    <option value="blockchain">Blockchain Ink</option>
    <option value="evil">Evil Corp</option>
    <option value="ninja">Ninja Bank</option>
</select>

<button v-bind="cardlist" v-on:click="addcard">klicka</button>

<div class="linkcontainer">
            <router-link to="/">CreateCard</router-link>
</div>
    </main>
  </div>
</template>


<script>
import Card from '@/components/Top.vue'

export default {
name: "createcards",

  components: {

    Card,

  },

props: {
  cardlist: Object,
},

methods:{
        addcard() {
         
            this.$root.$data.cardlist.push(
              this.cardlist
              )
        },
  }
}

</script>


<style lang="scss">



</style>