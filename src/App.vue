<template>
  <dc-form
    :config="config"
  >
  </dc-form>
</template>
<script>
export default {
  data() {
    return {
      config: [
        {
          type: 'input',
          label: '文本框',
          key: 'text',
          attrs: {
            // reg: /^\d*$/g,
            maxlength: 10,
            minlength: 1,
            'show-word-limit': true,
            placeholder: '请输入内容',
            clearable: true,
            // 'show-password': true,
            // disabled: true,
            // size: 'mini',
            // autofocus: true,
            label: 'aaaa',
          },
          listeners: {
            blur() {
              console.log(this)
            },
            clear() {
              console.log('clear')
            }
          }
        },
        {
          type: 'input',
          label: '文本数字框',
          key: 'number',
          attrs: {
            type: 'number',
          }
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
            multiple: true,
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
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    aaaaa() {
      this.$refs['aaaa'].resetField()
    }
  }
}
</script>
