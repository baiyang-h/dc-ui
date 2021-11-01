<template>
  <el-transfer
    class="dc-transfer"
    ref="transfer"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="key in Object.keys($slots)" :slot="key">
      <slot :name="key"></slot>
    </template>
    <template v-slot="slotProps">
      <slot v-bind="slotProps"></slot>
    </template>
  </el-transfer>
</template>

<script>
/**
 * @description Transfer 穿梭框
 */
export default {
  name: "dc-transfer"
}
</script>
