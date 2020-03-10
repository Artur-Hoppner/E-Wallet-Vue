<template>
  <div class="home">

    <CardForm/>


    <!-- <router-link >Add Card</router-link> -->

  </div>
</template>

<script>
import CardForm from '@/components/CardForm.vue'

export default {
  name: 'AddCard',
  components: {
    CardForm,

  },



}
</script>

<style lang="scss">

a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 3.5rem;
  font-size: 1.4rem;
  font-weight: 600;
  text-decoration: none;
  color: black;
  border: .125rem solid black;
  border-radius: .5rem;
        &:hover {  
        background: rgb(25, 25, 25);
        color: #ddd;

      }
        &:active {
        background: rgb(25, 25, 25);
        color: #ddd;
        }

}

</style>
