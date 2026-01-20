<template>
  <div class="item">
    <Quantity :item="item" class="item--quantity" />
    <div class="item--img-container">
        <img class="item--img" :src="imagePath" />
    </div>
    
    <div class="content">
      <h3 class="item--name">{{ item.name }}</h3>
      <a class="item--observation" @click="onShowObservationModal">Adicionar observação</a>
      <p class="item--observation-text">{{item.observation}}</p>
    </div>
    <p class="item--price">{{ item.price | currency }}</p>
    <Modal :show="showObservationModal" @on-modal-close="onCloseObservation">

        <div class="modal-content">
          <h1>Adicionar observação</h1>
          <textarea v-model="item.observations" rows="5"></textarea>
          <button class="secondary-button" @click="onCloseObservationModal">Cancelar</button>
          <button class="primary-button" @click="saveObservation">Salvar</button>
        </div>

    </Modal>
  </div>
</template>

<script>
const imagesContext = require.context('../assets/imagens', false, /\.png$/);
const images = imagesContext.keys().reduce((acc, key) => { acc[key.replace('./','')] = imagesContext(key); return acc; }, {});

import { mapActions } from 'vuex';
import Quantity from './Quantity.vue';
import Modal from './Modal.vue';

export default {
  name: "CartItem",
  components: {
    Quantity,
    Modal
  },
  data() {
    return{
      showObservationModal: false
    }
  },
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
    imagePath() {
      const img = images[`${this.item.id}.png`];
      return img ? img : images['0001.png'];
    },
  },
  methods: {
    ...mapActions([
      'increaseQuantity',
      'decreaseQuantity',
    ]),
    onShowObservationModal() {
      this.showObservationModal = true;
    },
    onCloseObservation() {
      this.showObservationModal = false;
    },
    saveObservation() {
      this.showObservationModal = false;
    }
  }
};
</script>

<style lang="less" scoped>
.item {
  display: flex;
  margin: 6px 0;

  &--quantity {
    display: flex;
    align-items: center;
    padding-right: 16px; 
  }

  .number {
    font-size: 16px;
    font-weight: 500;
    width: 24px;
    color: @yellow;
    text-align: center;
  }

  .buttons {
    font-size: 18px;
    font-weight: 600;
    padding: 0 6px;
    cursor: pointer;
    background: none;
    border: none;

    &:focus {
      outline: none;
    }
  }

  &--img-container {
    border-radius: 4px;
    background: @light-yellow;
    width: 64px; /* ↓ menor */
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &--img {
    width: 56px;
    display: block;
  }

  .content {
    flex-grow: 1;
    padding: 0 12px; /* ↓ antes 20px */
  }

  &--name {
    font-weight: 600;
    font-size: 16px;
    margin: 0 0 4px 0; /* ↓ controle fino */
    line-height: 1.2;
  }

  &--observation {
    font-weight: 500;
    font-size: 13px;
    color: @dark-grey;
    text-decoration: underline;
    cursor: pointer;
    display: inline-block;
    margin-bottom: 4px;
  }

  &--observation-text {
    font-size: 13px;
    color: @dark-grey;
    margin: 0;
    line-height: 1.3;
  }

  &--price {
    font-weight: 600;
    font-size: 16px;
    color: @yellow;
    white-space: nowrap;
    align-self: center; /* 🔥 alinha verticalmente */
  }

  .modal--content {
    text-align: center;

    textarea {
      width: 100%;
      margin-bottom: 16px;
    }

    .buttons + button {
      margin-left: 12px;
    }
  }
}

@media @tablets {
    .item {
        display: flex;
        flex-wrap: wrap;

        &--img-container{
            order: 1;
        }

        .content{
            order: 2;
        }

        &--quantity{
            order: 3;
            padding: 0;
            width: 81px;
            justify-content: center;
        }

        &--price{
            order: 4;
            padding: 0 20px;
            margin: 5px 0;
        }
        .modal-content {
            h1{
                font-size: 20px;
            }
        }
    }
}
</style>
