<template>
    <div class="payment">
        <div class="payment--content">
                <router-link to="/" class="payment--go-back">← Voltar</router-link>
                <Order/>
            
        </div>
        <Cart v-if="isDesktop()" />
    </div>
</template>

<script>
import Mixins from "@/assets/mixins/mixins.js";
import Cart from "@/components/Cart.vue";
import Order from "@/components/Order.vue";

export default {
     components: {
      Cart,
      Order
    },
    mixins: [Mixins]
};
</script>

<style lang="less" scoped>
  .payment {
    display: flex;
    
    &--content {
      flex-grow: 1;
      padding: 50px;

        .payment--go-back {
        display: inline-block;
        margin-bottom: 20px;
        font-weight: 600;
        font-size: 18px;
        text-decoration: none;
        color: @yellow;
      }
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
