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
      <template v-slot="slotProps">
        <slot v-bind="slotProps"></slot>
      </template>
    </el-autocomplete>
  </div>
</template>

<script>
/**
 * @description input 一个可带输入建议的输入框组件
 * @property {String} value input上输入的值
 * @property {Array} options 这是建议显示的列表，列表中的item中要有 value 属性（默认），[{value: xx, ...}]，可以通过valueKey修改。 也可以通过 <slot></slot> 插槽的方式传入列表
 * @example <dc-input type="service" v-model="text" :options="options" @select="handleSelect" />
 */
export default {
  name: "service-input",
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
      return this.$dc.filterObject(this.$listeners, 'select')
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
