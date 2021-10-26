<template>
  <div id="app">
    <jw-checkbox v-model="checked">备选项</jw-checkbox>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      checked: true
    }
  },
  mounted() {
  },
  methods: {
    change(value) {
      console.log(value);
    }
  }
}
</script>

<style lang="scss">

</style>
