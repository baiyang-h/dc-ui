<template>
  <div>
    Home
    <el-button @click="show">click</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    show() {
      this.$router.push({
        name: 'aa',
        query: {
          id: 'asdasdasdsad'
        }
      })
    }
  }
}
</script>
