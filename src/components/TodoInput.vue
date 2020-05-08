<template>
  <div>
    <button type="button" @click="$emit('check-all')">
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
export default {
  data() {
    return { inputValue: "" };
  },
  props: {
    checkAllStatus: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    checkedClass() {
      return this.checkAllStatus
        ? "fas fa-check-circle fa-2x"
        : "far fa-circle fa-2x";
    }
  },
  methods: {
    handleInputChange() {
      if (this.inputValue) {
        this.$emit("insert-todo", {
          checked: false,
          text: this.inputValue
        });

        this.inputValue = "";
      }
    }
  }
};
</script>

<style scoped>
div {
  border: 1px solid #eee;
  display: grid;
  grid-template-columns: 40px auto;
  box-sizing: border-box;
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
  width: 100%;
  outline: none;
  font-size: 20px;
  color: rgb(100, 100, 100);
  margin-left: 5px;
}

input::placeholder {
  color: #eee;
}
</style>
