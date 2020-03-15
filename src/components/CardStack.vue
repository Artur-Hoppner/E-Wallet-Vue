<template>
<div>
    <Card v-bind:cardlist="cardlist" v-for="cardlist in creditcards" :key="cardlist.id"/>


</div>

</template>

<script>

import Card from '@/components/Card.vue'

export default {

components: {
    Card,
},

    computed: {
        creditcards(){
            return this.$root.$data.cardlist
        },
      }
}

</script>

<style>

</style>