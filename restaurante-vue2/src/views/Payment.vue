<template>
    <div class="payment">
        <div class="payment-content">
                <router-link to="/" class="payment--go-back" v-if="isSmallScreens()">← Voltar</router-link>
            <Cart v-if="isDesktop()" />


        </div>
    </div>
</template>

<script>
import Mixins from "@/assets/mixins/mixins.js";
import Cart from "@/components/Cart.vue";

export default {
    mixins: [Mixins],
    components: {
        Cart,
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
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 50px;
    text-decoration: none;
    color: @yellow;
  }
}
</style>
