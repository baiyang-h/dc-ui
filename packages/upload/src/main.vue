<template>
  <el-upload
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="key in Object.keys($slots)" :slot="key">
      <slot :name="key"></slot>
    </template>
  </el-upload>
</template>

<script>
/**
 * @description Upload 上传， 通过点击或者拖拽上传文件
 */
export default {
  name: "dc-upload"
}
</script>
