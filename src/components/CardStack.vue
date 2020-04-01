<template>
<div class="card-stack">
    <Card v-bind:cardlist="cardlist"/>
    <Card v-bind:cardlist="cardlist" v-for="cardlist in creditcards" :key="cardlist.id" @click="activeCard"/>


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
.card-stack {
    margin: 0 0 10rem;
    display: grid;
    grid-auto-rows: 5rem;
}
    /* .cardcontainer{
        overflow: hidden;
        transform: scale(1);
    } */
</style>

