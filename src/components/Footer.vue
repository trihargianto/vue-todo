<template>
  <div class="footer">
    <div class="footer__item-left">{{itemsLeftText}}</div>
    <div class="footer__tags">
      <button
        v-for="(item, index) in filterList"
        :key="index"
        :class="tagClass(item)"
        @click="changeSelectedFilter(item)"
      >{{ item }}</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      filterList: ["all", "active", "completed"],
    };
  },
  methods: {
    tagClass(filterItem) {
      return this.selectedFilter === filterItem ? "tag tag--selected" : "tag";
    },
    ...mapMutations({
      changeSelectedFilter: 'todos/changeSelectedFilter'
    })
  },
  computed: {
    itemsLeftText() {
      const plural = this.activeItemsLeftCount > 1;

      return (
        this.activeItemsLeftCount + " item" + (plural ? "s" : "") + " left"
      );
    },
    ...mapGetters({
      activeItemsLeftCount: "todos/activeItemsLeftCount"
    }),
    ...mapState({
      selectedFilter: ({ todos }) => todos.selectedFilter
    })
  }
};
</script>

<style scoped>
.footer {
  border: 1px solid #eee;
  display: grid;
  grid-template-columns: 100px auto;
  box-sizing: border-box;
  padding: 10px;
}

.footer__item-left {
  display: flex;
  align-items: center;
}

.footer__tags {
  display: flex;
  justify-content: center;
}

.tag {
  display: inline-block;
  padding: 5px 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  outline: none;
  margin: 0px 5px;
}

.tag--selected {
  border: 1px solid #ccc;
  border-radius: 3px;
}
</style>
