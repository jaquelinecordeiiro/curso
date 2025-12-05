<template>
  <div class="item">
    <h2 class="item--name">{{ item.name }}</h2>
    <p class="item--description">{{ item.description }}</p>
    <span class="item--price">Price: ${{ item.price }}</span>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: {},
  },
};
</script>

<style lang="less" scoped>
    .item {
        width: 215.9486083984375;
        height: 290;
        border-radius: 8px;
        background: white;


        &--name {
            font-weight: 600;
            font-size: 18px;
        }
        &--description {
            font-size: 12px;
            color: @dark-grey;
            font-weight: 300;
        }
        &--price{
            color: @yellow;
            font-size: 18px;
            font-weight: 600;

        }
}
</style>
