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
  margin: 10px;
    &--quantity{
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
        cursor: pointer;
    }
     &--observation-text{
        font-size: 14;
        color: @dark-grey;

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
    .modal--content {
        text-align: center;

        textarea {
            width: 100%;
            margin-bottom: 20px;
        }

        .buttons + button {
            margin-left: 15px;
            
        }
    }
    @media @tablets {
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
