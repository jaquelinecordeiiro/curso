<template>
    <div class="item">
        <img class="item--img" :src="imagaPath">
        <div class="content">
            <h3 class="item--name" >{{ item.name }}</h3>
            <a>Adicionar observação</a>
        </div>
    </div>

</template>

<script>
    export default{
        name: "CartItem",
        props: {
            item: {}
        },
        computed:{
            selectedCategory() {
             return this.$store.state.selectedCategory;
            },
            imagePath() {
            return require(`../assets/imagens/${this.selectedCategory}/${this.item.id}.png`);
        }
    }
    }    
</script>

<style lang="less" scoped>
    .item {
        display: flex;
        
        &--img {
            width: 80px;
        }
    }

</style>