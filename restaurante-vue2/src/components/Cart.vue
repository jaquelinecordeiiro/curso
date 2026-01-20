<template>
  <div class="cart">
    <router-link to="/" class="cart--go-back" v-if="isSmallScreens()">
      ← Voltar
    </router-link>

    <h2 class="cart--title">Seu pedido</h2>

   <div class="cart--content">
      <p v-if="hasItem">Seu carrinho está vazio</p>
  
      <transition-group name="list" tag="div">
        <CartItem
          v-for="item in cartList"
          :key="item.id"
          :item="item"
        />
      </transition-group>
  
      <div class="cart--total">
        <span>Total:</span>
        <span class="price">{{ getCartTotal | currency }}</span>
      </div>
   </div>
   <button class="primary-button payment-button">Finalizar Pedido</button>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import { mapGetters } from 'vuex';
import Mixins from '@/assets/mixins/mixins.js';
import feather from 'feather-icons';

export default{
    name: "Cart",
    mixins: [Mixins],

    components: {
        CartItem,
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
    },
    circleIcon() {
        return feather.icons.circle.toSvg();
    }
},
}
</script>

<style lang="less" scoped>
.cart {
  background: white;
  width: 100%;
  max-width: 420px; /* ↓ diminui largura do painel */
  box-sizing: border-box;
  padding: 24px 16px; /* ↓ menos espaço interno */
  display: flex;
  flex-direction: column;

  &--go-back {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 16px; /* ↓ antes 50px */
    text-decoration: none;
    color: black;
  }

  &--title {
    margin-top: 0; /* ↓ remove espaço inútil */
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 20px;
  }

  &--content {
    flex-grow: 1;
  }

  &--total {
    font-weight: 600;
    font-size: 20px; /* ↓ menor */
    text-align: right;
    margin-top: 16px; /* ↓ antes 30px */

    .price {
      color: @yellow;
      padding-left: 6px;
    }
  }

  .payment-button {
    width: 100%;
    margin-top: 16px; /* ↓ em vez de margin:auto */
  }

  .list-enter-active,
  .list-leave-active {
    transition: all 0.3s;
  }

  .list-enter,
  .list-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }
}

@media (max-width: 1024px) {
  .cart {
    width: 100%;
    min-width: unset;
    padding: 50px 20px 20px 0;
  }
}

@media (max-width: 600px) {
}
</style>
    