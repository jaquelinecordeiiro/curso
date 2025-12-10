import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    selectedCategoryId: null,
  },
  mutations: {
    changeCategory(state, id) {
      state.selectedCategoryId = id}
  },
  actions: {
    changeCategory( context, id) {
      context.commit('changeCategory', id)
    }
  }
});