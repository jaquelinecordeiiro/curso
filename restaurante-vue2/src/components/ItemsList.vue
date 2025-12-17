<template>
  <div class="items-list">
    <Loading v-if="isLoading"/>
    <Item v-for="item in ItemsList" :key="item.id" :item="item"/>
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
  created() {},

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
    margin: 50px;
    display: flex;
    width: 100%;
  
}
@media @tablets  {
  .items-list {
    flex-direction: column;
    margin: 0;
    padding: 20px;

  }
} 
  
</style>
