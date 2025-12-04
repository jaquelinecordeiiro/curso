<template>
  <div class="home">
    <CategoryMenu/>
    <ItemsList/>
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryMenu from '@/components/CategoryMenu.vue';
import ItemsList from '@/components/itemsList.vue';

import axios from 'axios';

export default {
  name: 'HomeView',
  components: {
    CategoryMenu,
    ItemsList
  },
  created() {
    axios.get('http://localhost:3000/burguers').then( response => {
      console.log(response);
    })
  }
}
</script>
