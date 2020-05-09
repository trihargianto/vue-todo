<template>
  <div class="todo-list-wrapper">
    <div class="todo-list" v-for="(todo, index) in todos" :key="index">
      <button type="button" class="btn-transparent" @click="toggleTodo({ todoIndex: index })">
        <i :class="checkboxClass(todo)"></i>
      </button>
      <div :class="textClass(todo)">{{ todo.text }}</div>
      <div class="todo-list__delete">
        <button type="button" class="btn-transparent" @click="removeTodo(index)">
          <i class="fas fa-times fa-lg"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  methods: {
    checkboxClass(todoItem) {
      return todoItem.checked
        ? "fas fa-check-square fa-2x"
        : "far fa-square fa-2x";
    },
    textClass(todoItem) {
      return todoItem.checked
        ? "todo-list__text todo-list__text--done"
        : "todo-list__text";
    },
    ...mapMutations({
      removeTodo: "todos/removeTodo",
      toggleTodo: "todos/toggleTodo"
    })
  },
  computed: mapState({
    todos: ({ todos }) => todos.data
  })
};
</script>

<style scoped>
.todo-list-wrapper {
  box-shadow: 0px -2px 10px 0px rgba(153, 147, 147, 0.1);
  position: relative;
  z-index: 2;
}

.todo-list {
  border: 1px solid #eee;
  display: grid;
  grid-template-columns: 40px auto 20px;
  box-sizing: border-box;
  padding: 0px 10px;
}

.todo-list:hover > .todo-list__delete {
  display: flex;
}

.btn-transparent {
  border: 0;
  background: transparent;
  cursor: pointer;
  outline: none;
  padding: 20px 0;
}

.todo-list__text {
  border: 0;
  width: 100%;
  outline: none;
  font-size: 20px;
  color: rgb(100, 100, 100);
  margin-left: 5px;
  display: flex;
  align-items: center;
}

.todo-list__text--done {
  text-decoration: line-through;
}

.todo-list__delete {
  display: none;
  align-items: center;
}

input::placeholder {
  color: #eee;
}
</style>
