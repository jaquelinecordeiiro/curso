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
  import Mixins from "@/assets/mixins/mixins.js";

const imagesContext = require.context('../assets/imagens', false, /\.png$/);
const images = imagesContext.keys().reduce((acc, key) => { acc[key.replace('./','')] = imagesContext(key); return acc; }, {});
export default {
  name: "Item",
  mixins: [Mixins],
  filters: {
    currency(value) {
      if (!value) return '0,00';
      return `RS  ${value.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
      })}`;
    },
  },
  props: {
    item: {},
  },
  computed: {
    imagePath() {
      if (!this.item || !this.item.id) return null;
      const img = images[`${this.item.id}.png`];
      return img ? img : images['0001.png'];
    },
  },
  methods: {
    addToCart() {
      if (this.isDesktop()) {
      this.$store.dispatch('addToCart', this.item);
      return;

    }
      this.$router.push({ name: 'AddToCart', params: { id: this.item.id } });


  },
}
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

    /* Smartphones tweaks */
    @media @smartphones {
      width: 100%;
      padding: 12px;
      margin: 8px 0;
      border-radius: 6px;
      display: flex;
      flex-direction: column;

      &--img {
        width: 64px;
        margin: 0 12px 0 0;
      }

      &--name {
        font-size: 16px;
      }

      &--description {
        font-size: 12px;
      }

      &--price {
        font-size: 16px;
      }

      .container {
        margin-right: 10px;
      }

      .content {
        padding: 0;
      }
    }
}
</style> 
