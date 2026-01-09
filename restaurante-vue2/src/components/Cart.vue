<template>
  <div class="cart">
    <router-link to="/" class="cart--go-back" v-if="isSmallScreens()">
      ← Voltar
    </router-link>

    <h2 class="cart--title">Seu pedido</h2>

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
    <Modal :show="showModal" @on-modal-close="showModal = false"></Modal>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import { mapGetters } from 'vuex';
import Modal from './Modal.vue';
import Mixins from '@/assets/mixins/mixins.js';
import feather from 'feather-icons';

export default{
    name: "Cart",
    mixins: [Mixins],

    components: {
        CartItem,
        Modal,
    },
      filters: {
currency(value) {
  return `RS  ${value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  })}`;
},
    },
data() {
    return {

      showModal: false,
    };
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

  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s;
  }

  .list-enter,
  .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
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
    