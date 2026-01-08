<template>
    <div class="item--quantity">
        <button class="buttons" @click="onDecreaseButtonClick" :disabled="item.quantity === 0">-</button>
        <span class="number">{{ item.quantity }}</span>
        <button class="buttons" @click="onIncreaseButtonClick">+</button>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Quantity",
  props: {
    item: {},
    useStore: {
      type: Boolean,
      default: true,
    }
  },
  methods: {
    ...mapActions(["increaseQuantity", "decreaseQuantity"]),

    onDecreaseButtonClick() {
      if (this.useStore) {
        this.decreaseQuantity(this.item.id);
        return;
      }
      if (this.item.quantity > 0) {
        this.item.quantity--;
      }
    },

    onIncreaseButtonClick() {
      if (this.useStore) {
        this.increaseQuantity(this.item.id);
        return;
      }
      this.item.quantity++;
    }
  }
};
</script>

<style lang="less" scoped>
    .item--quantity{
      display: flex;
      align-items: center;
      padding-right: 40px;
    }
      .number{
          font-size: 18px;
          font-weight: 500;
          width: 28px;
          color: @yellow;
          text-align: center;
      }
      .buttons{
          font-size: 20px;
          font-weight: 600;
          padding: 0 10px;
          cursor: pointer;
          background: none;
          border: none;

          &:focus{
              outline: none;
          }
      }
</style>
