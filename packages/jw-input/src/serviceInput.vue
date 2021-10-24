<template>
  <div class="service-input">
    <el-autocomplete
        ref="autocomplete"
        :value="value"
        v-bind="$attrs"
        v-on="filterListeners"
        :fetch-suggestions="querySearch"
        @select="select"
    >
      <template v-for="key in Object.keys($slots)" :slot="key">
        <slot :name="key"></slot>
      </template>
      <template v-slot="{ item }">
        <slot :item="item"></slot>
      </template>
    </el-autocomplete>
  </div>
</template>

<script>
export default {
  name: "service-input",
  emits: ['input'],
  props: {
    value: {
      type: String,
      default: ''
    },
    // 模糊查询的下拉框，必须存在 value
    options: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    filterListeners() {
      return this.$jw.filterObject(this.$listeners, 'select')
    },
  },
  methods: {
    querySearch(queryString, cb) {
      const restaurants = this.options;
      const results = queryString ? restaurants.filter((restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      }) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    select(item) {
      this.$emit('select', item.value, item)
    }
  }
}
</script>

<style scoped>
.service-input .el-autocomplete {
  width: 100%;
}
</style>
