<template>
    <div class="category-menu">

      <ul>       
          <li v-for="category in categoriesList" :key="category.id">
            <component : is="category.icon" />
            <p>{{ category.name }}</p>
        </li>
      </ul>

    </div>
</template>

<script>

import Pizza from '../assets/icons/pizza.svg';
import Combo from '../assets/icons/french-fries.svg';
import Deserts from '../assets/icons/ice-cream.svg';
import Drinks from '../assets/icons/smoothie.svg';
import Burguer from '../assets/icons/food.svg';


export default {
  name: "CategoryMenu",
  components: {
    Pizza,  
    Combo,
    Deserts,
    Drinks,
    Burguer,
  },
  data() {
    return {
      categoriesList: [
        { name: 'Pizza', icon: Pizza, id: 'piza' },
        { name: 'Combos', icon: Combo, id: 'combos' },
        { name: 'Doces', icon: Deserts, id: 'deserts' },
        { name: 'Bebidas', icon: Drinks, id: 'drinks' },
        { name: 'Burguers', icon: Burguer, id: 'burguer' },
      ],
    };
  },
};
</script>

<style></style>
