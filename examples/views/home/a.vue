<template>
  <div>
    aaaaa
    <el-button @click="show">click</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "a",
  methods: {
    show() {
      this.$router.push({
        name: 'bb',
      })
    }
  }
}
</script>

<style scoped>

</style>
