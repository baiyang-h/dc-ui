<template>
  <el-cascader
    v-bind="$attrs"
    v-on="$listeners"
    :style="[wrapStyle]"
  >

  </el-cascader>
</template>

<script>
export default {
  name: "dc-cascader",
  props: {
    width: [String, Number],
  },
  computed: {
    wrapStyle() {
      const style = {};
      // 通过调用addUnit()方法，如果有单位，如百分比、px单位等，直接返回，如果是纯粹的数值，则加上px单位
      if(this.width) style.width = this.$dc.addUnit(this.width)
      return style
    }
  },
}
</script>
