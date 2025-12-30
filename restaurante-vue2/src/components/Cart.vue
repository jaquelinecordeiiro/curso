<template>
  <div class="cart">
    <router-link to="/" class="cart--go-back" v-if="isSmallScreens()"> ← Voltar</router-link>
    <h2 class="cart--title">Seu pedido</h2>
    <p v-if="hasItem">Seu carrinho está vazio</p>
    <CartItem v-for="item of cartList" :key="item.id" :item="item" />
    <div class="cart--total">
      <span>Total:</span>
      <span class="price">{{ getCartTotal | currency}}</span>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import { mapGetters } from 'vuex';
import Mixins from '@/assets/mixins/mixins.js';

export default{
    name: "Cart",
    mixins: [Mixins],

    components: {
        CartItem
    },
      filters: {
currency(value) {
  return `RS  ${value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  })}`;
},
    },
    computed: {
        ...mapGetters([
            'getCartTotal'
        ]),
        cartList() {
            return this.$store.state.cartList;
        },
        hasItem() {
            return this.cartList.length === 0;  
    }
},
}
</script>

<style lang="less" scoped>
.cart {
  background: white;
  width: 100%;
  max-width: 643px;
  box-sizing: border-box;
  padding: 50px 20px;

  &--go-back {
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 50px;
    text-decoration: none;
    color: black;
  }

  &--title {
    margin-top: 50px;
    font-weight: 600;
    font-size: 24px;
  }
    &--total {
        font-weight: 600;
        font-size: 24px;
        text-align: right;
        margin-top: 30px;

        .price {
            color: @yellow;
            padding-left: 10px;
        }
    }
}

@media @tablets {
  width: 100%;
  min-width: unset;
  padding: 50px 20px 20px 0;
}
@media @smartphones {
}
</style>
