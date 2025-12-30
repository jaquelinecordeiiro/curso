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
        quantity: 1
      });
    },

    increaseQuantity(state, index) {
      state.cartList[index].quantity++;
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
    const index = state.cartList.findIndex(
      cartItem => cartItem.id === el.id
    );

    if (index !== -1) {
      commit("increaseQuantity", index);
    } else {
      commit("addToCart", el);
    }
  },

  increaseQuantity({ state, commit }, id) {
    const index = state.cartList.findIndex(
      cartItem => cartItem.id === id
    );
    if (index !== -1) {
      commit("increaseQuantity", index);
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

