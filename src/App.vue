<template>
  <div>
    <el-select v-model="value" placeholder="请选择" ref="aaa">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    1
    <jw-select v-model="value" placeholder="请选择" @change="change" ref="aaa">
      <jw-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </jw-option>
    </jw-select>
    1
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
  mounted() {
    console.log(this.$refs)
  },
  methods: {
    change(v) {
      console.log(v)
    }
  }
}
</script>
