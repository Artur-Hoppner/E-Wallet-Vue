<template>
  <div class="home">
    <Top headline="E-WALLET" description="ACTIVE CARD" />
    <Cardstack/>




<div class="linkcontainer">
    <router-link class="addCard" to="/AddCard" >Add Card</router-link>
</div>
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Cardstack from '@/components/CardStack.vue'

export default {
  name: 'Home',

  components: {
    Top,
    Cardstack,
  },
   computed: {
        creditcards(){
            return this.$root.$data.cardlist    
    },

      },
}
</script>

<style lang="scss">

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
