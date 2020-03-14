<template>
  <div class="home">
    <top headline="ADD NEW CARD"/>
    <!-- <Card/> -->

    <CardForm/>


    <!-- <router-link >Add Card</router-link> -->

  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import CardForm from '@/components/CardForm.vue'
// import Card from '@/components/Card.vue'

export default {
  name: 'AddCard',
  components: {
    Top,
    CardForm,
    // Card,

  },



}
</script>

<style lang="scss">



</style>
