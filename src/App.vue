<template>
  <div id="app">
    <h1>todos</h1>

    <TodoInput :check-all-status="checkAllStatus" @insert-todo="insertTodo" @check-all="checkAll" />
    <TodoList :todos="todos" @toggle-todo="toggleTodo" @remove-todo="removeTodo" />
    <Footer />
  </div>
</template>

<script>
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    TodoInput,
    TodoList,
    Footer
  },
  data: function() {
    return {
      todos: [],
      selectedFilter: "all",
      checkAllStatus: false
    };
  },
  methods: {
    toggleTodo(todoIndex, checked = null) {
      var copiedSelectedTodo = this.todos[todoIndex];

      this.todos.splice(todoIndex, 1);
      this.todos.splice(todoIndex, 0, {
        ...copiedSelectedTodo,
        checked: checked || !copiedSelectedTodo.checked
      });
    },
    insertTodo(item) {
      this.todos.unshift(item);
    },
    removeTodo(todoIndex) {
      this.todos.splice(todoIndex, 1);
    },
    checkAll() {
      this.checkAllStatus = !this.checkAllStatus;

      var vm = this;

      this.todos.forEach(function(item, index) {
        vm.toggleTodo(index, vm.checkAllStatus);
      });
    }
  },
  computed: {
    filteredTodos() {
      return this.todos.filter(function(item) {
        return item.checked === this.selectedFilter;
      });
    }
  }
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
