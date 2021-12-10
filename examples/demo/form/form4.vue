<template>
  <div>
    <dc-form
      ref="form"
      :option="option"
    >
    </dc-form>
    <div>
      <el-button type="primary" @click="getFieldsValue">获取数据</el-button>
    </div>
  </div>
</template>

<script>
// 自定义组件，2. 自定义custom类型
// 如果component写成一个组件，默认组件外部会使用 v-model，绑定的就是键key，所以默认会绑定value属性和一个@input，
export default {
  data() {
    return {
      option: [
        {
          type: 'input',
          key: 'input',
          label: '文本'
        },
        {
          type: 'custom',
          key: 'custom1',
          label: '自定义组件1',
          component: {
            template: `<div>我是自定义组件1</div>`
          }
        },
        {
          type: 'custom',
          key: 'custom2',
          label: '自定义组件2',
          children: [
            {
              type: 'date',
              key: 'custom2_a'
            },
            {
              type: 'html',
              template: `<div style="margin: 0 30px;">-</div>`
            },
            {
              type: 'date',
              key: 'custom2_b'
            }
          ]
        },
        {
          type: 'custom',
          key: 'custom3',
          label: '自定义组件3',
          component: {
            data() {
              return {
                value: ''
              }
            },
            template: `
              <div>
                <span>我是自定义组件3</span>
                <el-input :value="value" @input="input" style="width: 150px" placeholder="请输入" />
              </div>
            `,
            methods: {
              input(v) {
                this.value = v
                this.$emit('input', v)
              }
            }
          }
        }
      ]
    }
  },
  methods: {
    getFieldsValue() {
      console.log(this.$refs['form'].getFieldsValue())
    }
  }
}
</script>
