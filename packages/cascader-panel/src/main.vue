<template>
  <el-cascader-panel
    class="dec-cascader-panel"
    ref="cascaderPanel"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-slot="slotProps">
      <slot v-bind="slotProps"></slot>
    </template>
  </el-cascader-panel>
</template>

<script>
/**
 * @description cascader-panel级联面板
 */
export default {
  name: "dc-cascader-panel"
}
</script>

