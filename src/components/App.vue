<template>
  <div id="app">
    <h1>todos</h1>

    <TodoInput />
    <TodoList />
    <Footer />
  </div>
</template>

<script>
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default {
  name: "App",
  components: {
    TodoInput,
    TodoList,
    Footer
  },
  // computed: {
  //   filteredTodos() {
  //     return this.todos.filter(function(item) {
  //       return item.checked === this.selectedFilter;
  //     });
  //   },
  // }
};
</script>

<style>
#app {
  padding: 20px;
}

h1 {
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(133, 44, 44, 0.2);
  margin: 0;
  padding: 0;
}
</style>
