<template>

<div class="top">
<h1>{{headline}}</h1>
<p>{{description}}</p>

</div>

</template>

<script>
export default {
name: 'Top',
props: {
    headline: String,
    description: String
}
}



</script>

<style lang="scss" scoped>
 p {
    text-align: center;
}
</style>