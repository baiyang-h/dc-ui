<template>
  <dc-form
    ref="form"
    :config="config"
    :option="option"
    :rules="rules"
    @submit="submit"
    @reset="reset"
  >
  </dc-form>
</template>
<script>
// 有校验的表单
export default {
  data() {
    return {
      config: {
        showBtn: true,
        labelWidth: '120px'
      },
      option: [
        {
          type: 'input',
          label: '文本框',
          key: 'input',
        },
        {
          type: 'input',
          label: '文本数字框',
          key: 'number',
          rules: [
            { required: true, message: '必填' },
          ],
          attrs: {
            type: 'number',
          },
        },
        {
          type: 'inputNumber',
          label: '数字框',
          key: 'inputNumber',
        },
        {
          type: 'select',
          label: '选择框',
          key: 'select',
          attrs: {
            options: [
              {
                value: 'Shanghai',
                label: '上海'
              }, {
                value: 'Beijing',
                label: '北京'
              }
            ]
          }
        },
      ],
      rules: {
        input: [
          { required: true, message: '必填' },
        ],
        select: [
          { required: true, message: '必填' },
        ]
      }
    };
  },
  methods: {
    submit() {
      // 触发表单验证只要是使用表单实例的 validate 函数
      this.$refs['form'].validate((valid) => {
        if(valid) {
          this.$message.success(JSON.stringify(
            this.$refs['form'].getFieldsValue(),
            function (key, value) {
              if(value === undefined) {
                return 'undefined'
              } else if(value === 'symbol' || typeof value === 'function') {
                return value.toString()
              } else {
                return value
              }
            },
            4
          ))
        }
      })
    },
    reset() {
      console.log('这是重置按钮，内部已经直接重置了')
    }
  }
}
</script>
