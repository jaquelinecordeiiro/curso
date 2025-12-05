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
  created() {
    axios.get("http://localhost:3000/burguers").then((response) => {
      this.ItemsList = response.data;
    });
  },
};
</script>

<style></style>
