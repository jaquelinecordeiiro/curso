import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    selectedCategoryId: null,
    cartList: [],
  },
  mutations: {
    changeCategory(state, id) {
      state.selectedCategoryId = id;
    },
    addToCart(state, el) {
      state.carList.push(el);
    },
  },
  actions: {
    changeCategory(context, id) {
      context.commit("changeCategory", id);
    },
    addToCart(context, el) {
      context.commit("addToCart", el);
    },
  },
});
