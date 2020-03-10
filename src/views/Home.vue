<template>
  <div class="home">
    <Top/>
    <Card/>
    <CardStack/>

  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'
import CardStack from '@/components/CardStack.vue'

export default {
  name: 'Home',
  components: {
    Top,
    Card,
    CardStack
  }
}
</script>
