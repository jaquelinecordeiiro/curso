<template>
  <div class="items-list">
    <Loading v-if="isLoading" />
    <Item v-for="item in ItemsList" :key="item.id" :item="item" />
  </div>
</template>

<script>
import axios from "axios";
import Item from "./Item.vue";
import Loading from "./Loading.vue";

export default {
  name: "ItemsList",
  components: {
    Item,
    Loading
  },
  data() {
    return {
      ItemsList: [],
      isLoading: false
    };
  },
  created() {
    this.getItemsList();
  },

  computed: {
    selectedCategory() {
      return this.$store.state.selectedCategoryId;
    }
  },
  methods: {
    getItemsList() {
      this.isLoading = true;
      this.ItemsList = [];

      setTimeout(() => {
        axios.get(`http://localhost:3000/${this.selectedCategory}`).then((response) => {
          this.ItemsList = response.data;
          this.isLoading = false;
        });
      }, 500);
    }
  },
  watch: {
    selectedCategory() {
      this.getItemsList();
    },
  },
};
</script>

<style lang="less" scoped>
.items-list {

  width: 100%;
  margin: 50px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  @media @small-desktops {
    width: 100%;
    max-width: 1200px;
    margin: 50px auto;
  }

  @media @tablets {    
      flex-wrap: wrap;
      margin: 0px;
      padding: 20px;

    }
  }



.items-list {
  padding: 8px;
}
</style>
