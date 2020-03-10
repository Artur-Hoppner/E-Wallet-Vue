<template>
<div>
  <article>
    
      <ul class="cardlist">
        <p>fnjklsdjflk</p>
         <li
          v-for="cardlist in creditcards" :key="cardlist.id">
          {{ cardlist.cardnumber }}
          {{ cardlist.cardholdername }}
          {{ cardlist.month }}/
          {{ cardlist.year }}

          <img v-if="cardlist.vendor == 'bitcoin'" src="@/assets/chip-dark.svg" alt="Dark Chip Logo">
          <img v-if="cardlist.vendor !== 'bitcoin'" src="@/assets/chip-light.svg" alt="Light Chip Logo">
          <img v-if="cardlist.vendor ==  'ninja'" src="@/assets/vendor-ninja.svg" alt="Ninja Logo">
         </li>
      </ul>


  </article>



</div>

</template>

<script>
export default {
      name: "Card",

  data:() => ({}),
    
    computed: {
        creditcards(){
            return this.$root.$data.cardlist
        }
      },
      method: {
      }
    

}

</script>

<style>

</style>