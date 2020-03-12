<template>
  <div class="home">
    <Top headline="E-WALLET"/>
    <Card/>

<div class="linkcontainer">
    <router-link class="addCard" to="/AddCard" >Add Card</router-link>
</div>
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  components: {
    Top,
    Card,

  },



}
</script>

<style lang="scss">



</style>
