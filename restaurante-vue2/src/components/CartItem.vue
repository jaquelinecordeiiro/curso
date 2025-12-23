<template>
  <div class="item">
    <div class="item--img-container">
        <img class="item--img" :src="imagePath" />
    </div>
    
    <div class="content">
      <h3 class="item--name">{{ item.name }}</h3>
      <a class="item--observation">Adicionar observação</a>
    </div>
    <p class="item--price">{{ item.price | currency }}</p>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    item: {},
  },
  filters: {
    currency(value) {
      return `RS  ${value.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
      })}`;
    },
  },
  computed: {
    itemCategory() {
      return (
        this.item.category ||
        this.$store.state.selectedCategoryId ||
        this.$store.state.selectedCategory
      );
    },
    imagePath() {
      try {
        return require(`@/assets/imagens/${this.itemCategory}/${this.item.id}.png`);
      } catch (e) {
        return require("@/assets/logo.png");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.item {
  display: flex;
  margin: 10px;

    &--img-container{
        border-radius: 4px;
        background: @light-yellow;
        width: 80px;
        height: 66px;
        display: flex;
        align-items: center;
    }
    &--img {
        width: 80px;
        display: block;
        margin: auto;

    }

    &--name {
        font-weight: 600;
        font-size: 18px;
        margin: 0;
    }
    &--observation {
        font-weight: 500;
        font-size: 14px;
        color: @dark-grey;
        text-decoration: underline;
    }
    .content {
        flex-grow: 1;
        padding: 0 20px;
    }
    &--price {
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        color: @yellow;
    }
}
</style>
