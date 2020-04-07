<template>
  <div class="home">
    <top headline="ADD NEW BANK CARD" description="NEW CARD"/>
    <Card v-bind:cardlist="cardlistadd"/>

    <CardForm v-bind:cardlist="cardlistadd"/>



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
    cardlistadd: {
      id: Date.now(),
      cardholdername: '',
      cardnumber: '',
      month: '',
      year: '',
      vendor: ''

    }
  }
},

}
</script>

