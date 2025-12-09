<template>
  <div class="item">
    <div class="container">
      <div class="item--tag" v-if="item.offer">Oferta</div>
      <img class="item--img" src="../assets/imagens/burguer.png" alt="" />
    </div>
    
    <div class="content">
      <h2 class="item--name">{{ item.name }}</h2>
      <p class="item--description">{{ item.description }}</p>
      <span class="item--price">Preço: ${{ item.price | currency }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  filters: {
    currency(value) {
      return `RS  ${value.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
      })}`;
    },
  },
  props: {
    item: {},
  },
};
</script>

<style lang="less" scoped>
.item {
  width: 215.9486083984375;
  height: 290px;
  border-radius: 8px;
  background: white;
  position: relative;
  margin: 20px;
  padding: 20px;

    &--tag {
      position: absolute;
      background: @pink;
      border-radius: 8px;
      color: white;
      top: 15px;
      right: 15px;
      font-weight: 500;
      font-size: 12px;
      padding: 5px 10px;
    }
    &--img {
      display: block;
      margin: 20px auto;
    }
    &--name {
      font-weight: 600;
      font-size: 18px;
      margin: 8px auto;
    }
    &--description {
      font-size: 12px;
      color: @dark-grey;
      font-weight: 300;
      margin: 0;
    }
    &--price {
      color: @yellow;
      font-size: 18px;
      font-weight: 600;
      margin: 8px auto;    
    }

    @media @tablets {
      width: 100%;
      height: fit-content;
      border: 1px solid @light-grey;
      display: flex;
      margin: 10px 0;
      padding: 5px 10px;

      &--img{
        height: 60px;
        order: 0;
        margin: 0 0 10px 0;
      }
      &--price{
        text-align: right;
        margin: 0 auto;
      }

      &--tag {
        position: static;
        order: 1;
        width: fit-content;
      }
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
      }
    }
}
</style>
