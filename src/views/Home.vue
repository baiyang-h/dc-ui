<template>
  <div class="home">
    <button @click="show">click</button>
    <div id="text">{{ a }}</div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      a: 1
    }
  },
  methods: {
    show() {
      this.a = 2
      console.log('前：', document.getElementById('text').innerHTML)
      this.$nextTick(function () {
        console.log('后：', document.getElementById('text').innerHTML)
      })
    }
  },
}
</script>
