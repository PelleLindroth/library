import Vue from 'vue'
import Vuex from 'vuex'
import content from '@/assets/books.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: content.books,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
