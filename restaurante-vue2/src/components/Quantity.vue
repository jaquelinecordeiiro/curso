<template>
    <div class="item--quantity">
        <button class="buttons" @click="decreaseQuantity(item.id)" :disabled="item.quantity === 0">-</button>
        <span class="number">{{ item.quantity }}</span>
        <button class="buttons" @click="increaseQuantity(item.id)">+</button>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Quantity",
  props: {
    item: {},
  },
  methods: {
    ...mapActions(["increaseQuantity", "decreaseQuantity"]),
  },
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
