<template>
    <input type="text" @change="addToList" v-model="text">
    <ul>
        <li v-for="(item, index) in list " :key="index">
            {{ item }}

        </li>
    </ul>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      text:''
    };
  },
  created(){
    this.list = JSON.parse(localStorage.getItem('list'));
    }
  methods: {
    addToList(){
        this.list.unshift(this.text);
        localStorage.setItem('list', JSON.stringify(this.list));
        this.text = '';

    }
  }
};

</script>

<style>

</style>