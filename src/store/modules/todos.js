export default {
  namespaced: true,
  state: {
    data: [{ checked: false, text: 'test' }],
    selectedFilter: 'all',
    checkAllStatus: false,
  },
  mutations: {
    removeTodo(state, todoIndex) {
      state.data.splice(todoIndex, 1);
    },
    toggleTodo(state, { todoIndex, checked }) {
      const copiedSelectedTodo = state.data[todoIndex];

      state.data.splice(todoIndex, 1, {
        ...copiedSelectedTodo,
        checked: checked || !copiedSelectedTodo.checked,
      });
    },
    insertTodo(state, payload) {
      state.data.unshift({
        checked: payload.checked,
        text: payload.text,
      });
    },
    toggleCheckAllStatus(state) {
      state.checkAllStatus = !state.checkAllStatus
    }
  },
  actions: {
    checkAll({ state, commit }) {
      commit('toggleCheckAllStatus')

      state.data.forEach(function(item, index) {
        commit('toggleTodo', {
          todoIndex: index,
          checked: state.checkAllStatus,
        });
      });
    },
  },
  getters: {
    activeItemsLeftCount(state) {
      return state.data.filter(o => o.checked === false).length
    }
  }
};
