<template>
<div>
<Card/>


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