<template>
    <div class="item">
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
        <span>Price: ${{ item.price }}</span>
    </div>

</template>

<script>
export default {
    name: "Item",
    props: {
        item: {
           
        }
    }
}

</script>

<style>

</style>