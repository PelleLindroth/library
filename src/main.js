import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store,

  methods: {
    getBook(id) {
      return this.$store.state.books.find(book => book.id == id)
    }
  }
}
).$mount('#app')
