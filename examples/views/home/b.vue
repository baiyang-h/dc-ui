<template>
  <div>
    <button @click="show">bbbb</button>
    bbbb
  </div>
</template>

<script>
export default {
  name: "a",
  methods: {
    show() {
      this.$router.push({
        name: 'cc'
      })
    }
  }
}
</script>

<style scoped>

</style>
