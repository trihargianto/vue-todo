const state = {
  data: [{ checked: false, text: 'test' }],
  selectedFilter: 'all',
  checkAllStatus: false,
};

const getters = {
  activeItemsLeftCount(state, { filteredData }) {
    return filteredData.length;
  },
  filteredData({ data, selectedFilter }) {
    return data.filter(({ checked }) => {
      switch (selectedFilter) {
        case 'active':
          return !checked;
        case 'completed':
          return checked;
        default:
          return true;
      }
    });
  },
};

const mutations = {
  removeTodo({ data }, todoIndex) {
    data.splice(todoIndex, 1);
  },
  toggleTodo({ data }, { todoIndex, checked }) {
    const copiedSelectedTodo = data[todoIndex];

    data.splice(todoIndex, 1, {
      ...copiedSelectedTodo,
      checked: checked || !copiedSelectedTodo.checked,
    });
  },
  insertTodo({ data }, { checked, text }) {
    data.unshift({ checked, text });
  },
  toggleCheckAllStatus(state) {
    state.checkAllStatus = !state.checkAllStatus;
  },
  changeSelectedFilter(state, filterBy) {
    state.selectedFilter = filterBy;
  },
};

const actions = {
  checkAll({ state, commit }) {
    commit('toggleCheckAllStatus');

    state.data.forEach(function(item, index) {
      commit('toggleTodo', {
        todoIndex: index,
        checked: state.checkAllStatus,
      });
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
