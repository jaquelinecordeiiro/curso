<template>
  <div class="todo-list">
    <h1>Todo-List</h1>
    <input class="test-fiel" type="text" @change="addToList" v-model="text" />
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <span @click="toggleCheckBox(item)">
          <input type="checkbox" :checked="item.done" name="checkbox" id="checkbox">
          <span :class="{'done': item.done}">{{ item.label}}</span>
        </span>
        <span @click="deleteFromList(index)"> Delete </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      text: "",
    };
  },
  created() {
    this.list = JSON.parse(localStorage.getItem("list")) || [];
  },
  methods: {
    addToList() {
      this.list.unshift({label: this.text, done: false});
      this.updateLocalStorage();
      this.text = "";
    },
    deleteFromList(index) {
      this.list.splice(index, 1);
      this.updateLocalStorage();
    },
    updateLocalStorage() {
      localStorage.setItem("list", JSON.stringify(this.list));
    },
    toggleCheckBox(item) {
      item.done = !item.done;
      this.updateLocalStorage();
    },
  },
};
</script>

<style>
.todo-list {
  width: 500px;
  margin: auto;
}
h1{
    text-align: center;
    color: #42b983;
}
.test-fiel{
    width: 100%;
    height: 35px;
    margin-bottom: 15px;
    font-size: 20px;
    padding: 5px;
    box-sizing: border-box;
}
ul{
    list-style: none;
    padding: 0;
}
li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;  
}
.done{
    text-decoration: line-through;
}
</style>
