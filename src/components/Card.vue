<template>
<div>

      <section class="outercontainer">
         <article
              class="cardcontainer" v-bind:class="cardlist.vendor"
              >
            <header>
                <img v-bind:src="require('@/assets/vendor-' + cardlist.vendor +  '.svg')"/>
                <img v-if="cardlist.vendor == 'bitcoin'" src="@/assets/chip-dark.svg" alt="Dark Chip Logo">
                <img v-if="cardlist.vendor !== 'bitcoin'" src="@/assets/chip-light.svg" alt="Light Chip Logo">
            </header>
            <p>{{ cardlist.cardnumber }}</p>
            <aside>
                <P>CARDHOLDER NAME</P>
                <p>{{ cardlist.cardholdername }}</p>
            </aside>
            <aside>
                <P>VALID THRU</P>
                <p>{{ cardlist.month }}/{{ cardlist.year }}</p>
            </aside>

         </article>
      </section>

</div>

</template>

<script>
export default {

    props: {
      cardlist: Object
    },
    computed: {
        creditcards(){
            return this.$root.$data.cardlist
        },     
      },
}

</script>

<style>
.outercontainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cardcontainer {
    /* display: grid; */
    /* grid-column: auto/span 2;
    grid-row: auto/span 2; */
    display: flex;
    /* align-items: center;
    flex-direction: column;
    align-items: center; */
    width: 24rem;
    height: 14rem;
    border-radius: 1rem;
    box-shadow: 0.1rem 0.2rem 0.7rem 0rem rgb(36, 36, 36);


}
    .basecolor {
        background: linear-gradient(237.75deg,hsla(0,0%,100%,.24),hsla(0,0%,100%,0)),#d0d0d0; 
    }
    .bitcoin {
        background: linear-gradient(.689turn,hsla(0,0%,100%,.15),hsla(0,0%,100%,0) 99.07%),#ffae34;
        color: #222;
    }
    .blockchain {
        background: linear-gradient(248.52deg,rgba(0,0,0,.15) 1.49%,transparent),#8b58f9;
        color: #fff;
    }
    .evil {
        background: linear-gradient(248.3deg,rgba(0,0,0,.16),transparent),#f33355;
        color: #fff;
    }

    .ninja {
        background: linear-gradient(248.3deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0)),#222;
        color: #fff;
    }
</style>