<template>
  <div class="add-cart">
    <router-link to="/" class="add-cart--go-back" v-if="isSmallScreens()">← Voltar</router-link>
    <Item :item="item" class="add-cart--item" />

    <div class="add-cart--container">
      <span>Quantidade</span>
      <Quantity :item="item" :useStore="false" />
    </div>
    <p class="add-cart--observations">Observações:</p>
    <textarea v-model="item.observation" rows="10" placeholder=""></textarea>
    <button class="primary-button" @click="onAddToCartButtonClick">Adicionar ao carrinho</button>

  </div>
</template>

<script>
import Mixins from "@/assets/mixins/mixins.js";
import axios from "axios";
import Item from "./Item.vue";
import Quantity from "./Quantity.vue";

export default {
  props: ["id"],
  mixins: [Mixins],
  components: {
    Item,
    Quantity
  },
  data() {
    return {
      item: {},
      isLoading: false,
    };
  },

  computed: {
    selectedCategory() {
      return this.$store.state.selectedCategoryId;
    },
  },

  created() {
    axios.get(`http://localhost:3000/${this.selectedCategory}/${this.id}`).then((response) => {
      this.item = {quantity: 1, observation: "", ...response.data};
    });
  },

  methods: {
    async fetchItem() {
      const base = "/api";
      // Usa categoria se disponível, caso contrário tenta o endpoint fallback /items/:id
      let url;
      if (this.selectedCategory) {
        url = `${base}/${this.selectedCategory}/${this.id}`;
      } else {
        url = `${base}/items/${this.id}`;
      }

      this.isLoading = true;
      try {
        const response = await axios.get(url);
        this.item = {
          ...response.data,
          quantity: 1
        };
        return;
      } catch (error) {
        // Se 404, tenta buscar pelo id nas coleções conhecidas
        if (error.response && error.response.status === 404) {
          const found = await this.searchCollections();
          if (found) {
            this.item = found;
            return;
          }
        }
        console.error("Falha ao buscar item:", error);
      } finally {
        this.isLoading = false;
      }
    },

    // searchCollections (fallback) procura o id nas coleções conhecidas
    async searchCollections() {
      const collections = ["burguers", "pizza", "deserts", "drinks", "combo"];
      for (const col of collections) {
        try {
          const res = await axios.get(`/api/${col}?id=${this.id}`);
          if (Array.isArray(res.data) && res.data.length > 0) {
            return res.data[0];
          }
        } catch (e) {
          // ignora erro e tenta próxima coleção
        }
      }
      return null;
    },
    onAddToCartButtonClick() {
      this.$store.dispatch("addToCart", this.item);
      this.$router.push({ name: 'home' });
    }
  },

  watch: {
    selectedCategory(newVal) {
      if (newVal && this.id) {
        this.fetchItem();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.add-cart {
  padding: 50px 20px;

  &--go-back {
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 50px;
    text-decoration: none;
    color: @yellow;
  }

  &--item {
    margin-top: 50px;
  }

  &--container {
    display: flex;
    border: 1px solid @light-grey;
    padding: 10px 20px;
    border-radius: 8px;
    margin: 20px 0;

    span {
      margin-right: auto;
      font-weight: 600;
      font-size: 18px;
    }
  }

  &--observations {
    font-weight: 600;
    font-size: 18px;
    margin-top: 30px;
  }

  textarea {
    width: 100%;
    border: 1px solid @light-grey;
    border-radius: 8px;


    &:focus {
      outline: none;
      border-color: @yellow;
    }

  }
  button {
    width: calc(100% - 40px);
    position: fixed;
    bottom: 30px;
    left: 20px;
    right: 20px;

    &:hover {
      background-color: darken(@yellow, 10%);
    }
  }
}
</style>
