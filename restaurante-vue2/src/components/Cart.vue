<template>
  <div class="cart">
    <router-link to="/" class="cart--go-back">
      ← Voltar
    </router-link>

    <h2 class="cart--title">Seu pedido</h2>

    <div class="cart--content">
      <p v-if="hasItem">Seu carrinho está vazio</p>

      <transition-group name="list" tag="div">
        <CartItem v-for="item in cartList" :key="item.id" :item="item" />
      </transition-group>


    </div>
    <div class="cart--total">
      <span>Total:</span>
      <span class="price">{{ getCartTotal | currency }}</span>
    </div>
    <button class="primary-button payment-button" v-if="!!cartList.length && !!isPaymentScreen"
      @click="goToPayment">Finalizar
      Pedido</button>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import { mapGetters } from 'vuex';
import Mixins from '@/assets/mixins/mixins.js';
import feather from 'feather-icons';

export default {
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
    
    isPaymentScreen() {
      return this.$route.name === 'Payment';
    }
  },
  methods: {
    goToPayment() {
      this.$router.push({ name: 'Payment' });
    }
  }
}
</script>

<style lang="less" scoped>
.cart {
  background: white;
  width: 520px;
  height: 100vh;
  min-width: 520px;
  padding: 30px 30px 50px 20px;
  display: flex;
  flex-direction: column;

  .cart--go-back {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 16px;
    text-decoration: none;
    color: black;
    display: none;
  }

  &--title {
    margin-top: 0;
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 20px;
  }

  &--content {
    flex-grow: 1;
  }

  &--total {
    font-weight: 600;
    font-size: 20px;
    text-align: right;
    margin-top: 16px;

    .price {
      color: @yellow;
      padding-left: 6px;
    }
  }

  .payment-button {
    width: 397px;
    margin: 20px auto;
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

@media @small-desktops {
  .cart {
    width: 100%;
    max-width: 800px;
    margin: auto;
    min-width: unset;
    padding: 50px 20px 20px 0;


    .payment-button {
      width: 100%;
    }

    .cart--go-back {
      display: block;
      font-weight: 600;
      font-size: 18px;
      margin-bottom: 16px;

      text-decoration: none;
      color: @yellow;

    }
  }
}
</style>