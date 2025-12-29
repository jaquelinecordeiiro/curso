<template>
  <div class="home">
    <CategoryMenu/>
    <ItemsList/>
    <Cart v-if="isDesktop()"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryMenu from '@/components/CategoryMenu.vue';
import ItemsList from '@/components/ItemsList.vue';
import Cart from '@/components/Cart.vue';
import Mixins from '@/assets/mixins/mixins.js';


export default {
  name: 'HomeView',
  components: {
    CategoryMenu,
    ItemsList,
    Cart
  },
 mixins: [Mixins]
}
</script>
<style scoped lang="less" >
  .home {
    display: flex;
    
    @media @tablets {
      flex-direction: column;
    }
  }

</style>