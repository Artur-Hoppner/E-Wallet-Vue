<template>
  <div class="home">
    <top headline="ADD NEW CARD"/>
    <CardForm/>


    <!-- <router-link >Add Card</router-link> -->

  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import CardForm from '@/components/CardForm.vue'

export default {
  name: 'AddCard',
  components: {
    Top,
    CardForm,

  },



}
</script>

<style lang="scss">



</style>
