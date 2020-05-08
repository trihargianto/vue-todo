<template>
  <div class="footer">
    <div class="footer__item-left">3 items left</div>
    <div class="footer__tags">
      <button
        v-for="(item, index) in filterList"
        :key="index"
        :class="tagClass(item)"
        @click="selectFilter(item)"
      >{{ item }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterList: ["all", "active", "completed"],
      selectedFilter: "all"
    };
  },
  methods: {
    tagClass(filterItem) {
      return this.selectedFilter === filterItem ? "tag tag--selected" : "tag";
    },
    selectFilter(filterItem) {
      this.selectedFilter = filterItem;
    }
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
