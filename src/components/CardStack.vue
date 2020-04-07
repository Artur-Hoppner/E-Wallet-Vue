<template>
<div >

    <Card :cardlist="card" />
  <div class="card-stack">

   <Card :cardlist="cardlist" v-for="cardlist in creditcards" :key="cardlist.id" @click.native="addItem(cardlist)" />  
    
    </div>
</div>

</template>

<script>

import Card from '@/components/Card.vue'

export default {

data(){
    return{
      card: this.$root.$data.cardlist[0],
  

    }
  },

components: {
    Card,
},

    computed: {
        creditcards(){
            return this.$root.$data.cardlist       
    },

      },
    methods: {
        addItem(cardlist) {
             this.card = cardlist

        },

    }
          
      
}

</script>

<style>
.card-stack {
    margin: 8rem 0 8rem;
    display: grid;
    grid-auto-rows: 3.6rem;
}

</style>

