import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    selectedCategoryId: '',
    cartList: [],
  },

  mutations: {
    changeCategory(state, id) {
      state.selectedCategoryId = id;
    },

    addToCart(state, item) {
      state.cartList.push({
        ...item,
        quantity: item?.quantity || 1,
      });
    },

    increaseQuantity(state, {index, quantity}) {
      state.cartList[index].quantity += quantity;
    },

    decreaseQuantity(state, index) {
      state.cartList[index].quantity--;
    },
  },

  actions: {
  changeCategory({ commit }, id) {
    commit("changeCategory", id);
  },

  addToCart({ state, commit }, el) {
    const cartItem = state.cartList.find((cartItem) => cartItem.id === el.id);
    if (!cartItem) {
      commit("addToCart", el);
      return;
    } 

    const index = state.cartList.findIndex((cartItem) => cartItem.id === el.id);
    commit("increaseQuantity", {
      index: index,
      quantity: el?.quantity || 1,
    });
  },

  increaseQuantity({ state, commit }, id) {
    const index = state.cartList.findIndex(
      cartItem => cartItem.id === id
    );
    if (index !== -1) {
      commit("increaseQuantity", {index: index, quantity: 1});
    }
  },
decreaseQuantity({ state, commit }, id) {
  const index = state.cartList.findIndex(
    cartItem => cartItem.id === id
  );
  if (index !== -1) {
    commit("decreaseQuantity", index);
  }
},
},

getters: {
  getCartTotal(state) {
    return state.cartList.reduce((acc, item) => {
      return acc + (item.price * item.quantity);
    }, 0);
  }
}

});

