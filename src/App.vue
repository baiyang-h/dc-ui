<template>
  <div id="app">
    <jw-radio-group v-model="radio" @change="change" size="mini">
      <jw-radio-button label="上海"></jw-radio-button>
      <jw-radio-button label="上海"></jw-radio-button>
      <jw-radio-button label="广州"></jw-radio-button>
      <jw-radio-button label="深圳"></jw-radio-button>
    </jw-radio-group>
    <jw-radio-group v-model="radio1" :options="options" @change="change">
    </jw-radio-group>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      radio: '广州',
      radio1: 3,
      options: [
        222,
        {value: 2, label: 'bbb', disabled: true},
        {value: 3,},
      ]
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
