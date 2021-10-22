<template>
  <div id="app">
    <jw-input
      v-model="text"
      width="600"
    >
    </jw-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      aaa: '',
      select: '',
      config: [
        {
          type: 'input',
          label: 'aaa',
          key: 'aaa',
          rules: {},
          attrs: {}
        }
      ],
    }
  },
  methods: {
    aa() {
      console.log('aa')
    },
    bb() {
      console.log('bb')
    },
  }
}
</script>

<style>

</style>
