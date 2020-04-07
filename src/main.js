import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,

  data: () => ({
    cardlist: [
      {id: 1, cardnumber: "5776 5676 5894 6544", cardholdername: "Hungry Hippo", month: "01", year: "23", vendor: 'evil',},
      {id: 2, cardnumber: "6448 5642 7665 8766", cardholdername: "God Zilla", month: "09", year: "20", vendor: "bitcoin",},
      {id: 3, cardnumber: "1234 2342 5555 1432", cardholdername: "keyser soze", month: "02", year: "21", vendor: "ninja",},
    ]
  }),

  methods: {
// add function to push data into cardlist. Change from cardform. Maybet emit from AddCard
  },

  render: h => h(App)
}).$mount('#app')
