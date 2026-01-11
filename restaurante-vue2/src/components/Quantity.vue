<template>
    <div class="item--quantity">
        <button class="buttons" @click="onDecreaseButtonClick" :disabled="item.quantity === 0">-</button>
        <span class="number">{{ item.quantity }}</span>
        <button class="buttons" @click="onIncreaseButtonClick">+</button>
        <Modal :show="showModal" @on-modal-close="showModal = false">

        <div class="modal--content">
          <h3>Deseja remover esse item do carrinho?</h3>
          <div class="buttons">
            <button>Cancelar</button>
            <button>Sim, remover item</button>
          </div>
        </div>

        </Modal>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import Modal from './Modal.vue';

export default {
  name: "Quantity",
  components: {
    Modal,
  },

  props: {
    item: {},
    useStore: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    ...mapActions(["increaseQuantity", "decreaseQuantity"]),

    onDecreaseButtonClick() {
      if (this.useStore) {
        this.decreaseQuantity(this.item.id);
        if(!this.item.quantity){
          this.showModal = true;
        }
        return;
      }
      
      this.item.quantity--;
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
