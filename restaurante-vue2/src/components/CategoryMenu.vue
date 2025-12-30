<template>
  <div class="category-menu">
    <ul>
      <li
        v-for="category in categoriesList"
        :key="category.id"
        @click="onCategoryClick(category.id)"
        :class="{ active: isActive(category.id) }"
      >
        <component :is="category.icon" />
        <p>{{ category.label }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Pizza from "../assets/icons/pizza.svg";
import Combo from "../assets/icons/french-fries.svg";
import Deserts from "../assets/icons/ice-cream.svg";
import Drinks from "../assets/icons/smoothie.svg";
import Burguer from "../assets/icons/food.svg";

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
        { label: "Pizza", icon: Pizza, id: 'pizza' },
        { label: "Bebidas", icon: Drinks, id: 'drinks' },
        { label: "Doces", icon: Deserts, id: 'deserts' },
        { label: "Combo", icon: Combo, id: 'combo' },
        { label: "Burguers", icon: Burguer, id: 'burguers' },
      ],
      selectedCategory: "",
    };
  },
  mounted() {
    this.onCategoryClick("pizza");
  },
  methods: {
    onCategoryClick(id) {
      this.selectedCategory = id;
      this.$store.dispatch('changeCategory', id);
    },
    isActive(id) {
      return this.selectedCategory === id;
    },
  },
};
</script>

<style lang="less" scoped>
.category-menu {
  width: 130px;
  min-width: 130px;
  height: 100vh;
  background: white;

  display: flex;
  align-items: center;

  ul {
    list-style: none;
    padding: 0;
    width: 100%;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100px;;

      p{
        margin-bottom: 0px;
        font-weight: 500;
        font-size: 14px;
        color: @dark-grey;
      }

      svg{
        path{
          fill: @dark-grey;
        }
      }

      &.active {
        background: @yellow;
        border-radius: 8px;

        p{
          color: black
        }

        svg{
          path {
            fill: black;
          }
        }
      }
    }
  }

  @media @tablets {
    width: 100%;
    height: fit-content;

    ul {
      display: flex;
      margin: 20px;
      overflow: scroll;

      li {
        min-width: 78px;

        p {
          font-size: 12px;
        }
      }
    }
  }

  @media @smartphones {
    ul {
      margin: 8px;
      overflow-x: auto;
    }

    ul li {
      min-width: 60px;
      height: 70px;
    }

    ul li p {
      font-size: 11px;
    }

    ul li svg { width: 20px; height: 20px; }
  }
}
</style>
