<template>
  <div class="item" @click="addToCart">
    <div class="container">
      <div class="item--tag" v-if="item.offer">Oferta</div>
      <img class="item--img" :src="imagePath" alt="" v-if="imagePath" />
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
  computed: {
    selectedCategory() {
     return this.$store.state.selectedCategoryId;
    },
    imagePath() {
      try {
        // tenta importar a imagem correspondente (id.png) dentro da pasta da categoria
        return require(`@/assets/imagens/${this.selectedCategory}/${this.item.id}.png`);
      } catch (e) {
        // se não existir, usa um fallback (logo do projeto) para evitar imagem quebrada
        return require('@/assets/logo.png');
      }
    },
  },
  mounted() {
    
    console.log('Item mounted, imagePath =', this.imagePath);
  },
  methods: {
    addToCart() {
      this.$store.dispatch('addToCart', this.item);
    },
  },
};
</script>

<style lang="less" scoped>
.item {
  width: 215.95px;
  height: 390px;
  border-radius: 8px;
  background: white;
  position: relative;
  margin: 20px;
  padding: 20px;

  display: flex;
  flex-direction: column;

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
      margin: auto;
      width: 100%;
    }
    &--name {
      font-weight: 600;
      font-size: 18px;
      margin: 0;
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
      margin: 0;    
    }
    .content {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 10px;
      }

    @media @tablets {
      width: 100%;
      height: fit-content;
      border: 1px solid @light-grey;
      display: flex;
      flex-direction: row;
      margin: 10px 0;
      padding: 10px 20px;

      &--img{
        width: 86px;
        order: 0;
        margin: 0 0 10px 0;
      }
      &--price{
        text-align: right;
        margin: 5px 0 0 auto;
      }

      &--tag {
        position: static;
        order: 1;
        width: fit-content;
      }
      .content{
        flex-grow: 1;
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
