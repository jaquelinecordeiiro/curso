<template>
  <div class="items-list">
    <Item v-for="item in ItemsList" :key="item.id" :item="item"/>
  </div>
</template>

<script>
import axios from "axios";
import Item from "./Item.vue";

export default {
  name: "ItemsList",
  components: {
    Item
  },
  data() {
    return {
      ItemsList: [],
    };
  },
  created() {},

  computed: {
    selectedCategory: {
      get() {
        return this.$store.state.selectedCategory;
      }
    }
  },
  methods: {
    getItemsList() {
      axios.get('http://localhost:3000/${this.selectedCategory}').then((response) => {
        this.ItemsList = response.data;
      });
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
    
}
@media @tablets  {
  .items-list {
    flex-direction: column;
    margin: 20px;

  }
} 
  
</style>
