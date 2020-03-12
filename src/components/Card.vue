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
          <img v-bind:src="require('@/assets/vendor-' + cardlist.vendor +  '.svg')">
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

.cardlist {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>