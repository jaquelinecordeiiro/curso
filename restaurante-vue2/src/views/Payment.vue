<template>
    <div class="payment">
        <div class="payment-content">
                <router-link to="/" class="payment--go-back" v-if="isSmallScreens()">← Voltar</router-link>
                <Order />
            <Cart v-if="isDesktop()" />


        </div>
    </div>
</template>

<script>
import Mixins from "@/assets/mixins/mixins.js";
import Cart from "@/components/Cart.vue";
import Order from "@/components/Order.vue";

export default {
    mixins: [Mixins],
    components: {
        Cart,
        Order,
    },

};
</script>

<style lang="less" scoped>
.payment {
  display: flex;
  padding: 50px;

  .payment-content {
    flex-grow: 1;
  }

  .payment--go-back {
    display: inline-block;
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 18px;
    text-decoration: none;
    color: @yellow;
  }
}

/* MOBILE */
@media (max-width: 768px) {
  .payment {
    padding: 20px;
    flex-direction: column;
  }
}
</style>
