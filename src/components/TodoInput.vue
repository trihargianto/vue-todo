<template>
  <div>
    <button type="button" @click="checkAll()">
      <i :class="checkedClass"></i>
    </button>
    <input
      type="text"
      placeholder="What needs to be done?"
      v-model.trim="inputValue"
      @keyup.enter="handleInputChange"
    />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return { inputValue: "" };
  },
  computed: {
    ...mapState({
      checkedClass({ todos }) {
        return todos.checkAllStatus
          ? "fas fa-check-circle fa-2x"
          : "far fa-circle fa-2x";
      }
    })
  },
  methods: {
    handleInputChange() {
      if (this.inputValue) {
        this.insertTodo({
          checked: false,
          text: this.inputValue
        });

        this.inputValue = "";
      }
    },
    ...mapMutations({
      insertTodo: 'todos/insertTodo'
    }),
    ...mapActions({
      checkAll: 'todos/checkAll'
    })
  }
};
</script>

<style scoped>
div {
  border: 1px solid #eee;
  display: grid;
  grid-template-columns: 40px auto;
  box-sizing: border-box;
  padding: 0px 10px;
}

button {
  border: 0;
  background: transparent;
  cursor: pointer;
  outline: none;
  padding: 20px 0;
}

input {
  border: 0;
  outline: none;
  font-size: 20px;
  color: rgb(100, 100, 100);
  margin-left: 5px;
}

input::placeholder {
  color: #eee;
}
</style>
