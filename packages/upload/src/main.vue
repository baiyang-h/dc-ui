<template>
  <el-upload
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
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
