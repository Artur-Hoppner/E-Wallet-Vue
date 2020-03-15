<template>
  <div class="home">
    <top headline="ADD NEW CARD"/>
    <Card v-bind:cardlist="cardlist"/>

    <CardForm v-bind:cardlist="cardlist"/>



  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import CardForm from '@/components/CardForm.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'AddCard',
  components: {
    Top,
    CardForm,
    Card,
  },
data() {
  return {
    cardlist: {
      id: Date.now(),
      cardholdername: '',
      cardnumber: '',
      month: '',
      year: '',
      vendor: '',

    }
  }
},




}
</script>

<style lang="scss">



</style>
