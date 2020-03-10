<template>
  <div class="createcard">

<!--
  Temporary creditcardbox
-->
<!-- remove creat card. This should be universal -->
    <main  class="createcards">
    <h1>Creater Cards</h1>
    <ul class="cardstyle">
      <li> {{card.cardholdername}} </li>
      <li> {{card.cardnumber}} </li>
      <li> {{card.month}} </li>
      <li> {{card.year}} </li>
      <li> {{card.vendor}} </li>
    </ul>

    <label for="cardnumber">CARD NUMBER</label>
    <input type="number" name="cardnumber" placeholder="XXXX XXXX XXXX XXXX" maxlength="16" v-model="card.cardnumber">

    <label for="cardholdername">CARDHOLDER NAME</label>
    <input type="text" name="cardholdername" placeholder="Firstname Lastname" maxlength="24" v-model="card.cardholdername">

<!-- Skriv om så det förkortas.-->
    <select name="month" v-model="card.month"> 
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

<!-- Skriv om så det förkortas. -->
     <select name="year" v-model="card.year">
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>      
     </select>

<select name="Vendor" v-model="card.vendor">
    <option value="Bitcoin">Bitcoin Inc</option>
    <option value="Blockchain">Blockchain Ink</option>
    <option value="Evil">Evil Corp</option>
    <option value="Ninja">Ninja Bank</option>
</select>

<!-- <input type="submit" value="Add Card" v-on:click="addcard"> -->

<!-- <p v-on:click="addcard">dekspdskpoada</p> -->
<!-- <button v-bind="card" v-on:click="addcard">klicka</button> -->

            <router-link to="/">CreateCard</router-link>

    </main>
  </div>
</template>


<script>

export default {
name: "createcards",

data() {
  return {
    card: {
      id: Date.now(),
      cardholdername: '',
      cardnumber: '',
      month: '',
      year: '',
      vendor: '',

    }
  }
},

// methods:{
//         addcard() {
         
//             this.$root.$data.cardlist.push(
//               this.card
//               )
//         },
//   }
}

</script>