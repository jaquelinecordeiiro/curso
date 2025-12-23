import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    selectedCategoryId: '',
    selectedCategory: '',
    cartList: [],
  },
  mutations: {
    changeCategory(state, id) {
      state.selectedCategoryId = id;
    },
    addToCart(state, el) {
      // salva a categoria atual no item para que a imagem no carrinho seja resolvida corretamente
      state.cartList.push({ ...el, category: state.selectedCategoryId });
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
