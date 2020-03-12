<template>

<div class="top">
<h1>{{headline}}</h1>

</div>

</template>

<script>
export default {
name: 'Top',
props: {
    headline: String
}
}



</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Press+Start+2P);
h1 {
  font-family: "Press Start 2P";
    text-align: center;
}
</style>