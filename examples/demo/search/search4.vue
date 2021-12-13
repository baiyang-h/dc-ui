<template>
  <div>
    <dc-search
      ref="search"
      :option="option"
      :rules="rules"
      @search="search"
      @reset="reset"
    >
    </dc-search>
  </div>
</template>
<script>
// search 有检验的search
export default {
  data() {
    return {
      option: [
        {
          type: 'input',
          key: 'input',
          label: '文本框'
        },
        {
          type: 'select',
          key: 'select',
          label: '选择框',
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
        {
          type: 'date',
          label: '日期选择器',
          key: 'date',
          attrs: {
            type: 'daterange'
          }
        },
      ],
      rules: {
        input: [
          { required: true, message: '必填' },
        ],
      }
    };
  },
  methods: {
    search() {
      this.$refs['search'].validate((valid, values) => {
        if (valid) {
          console.log(valid, values)
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    reset(values) {
      console.log(values)
    }
  }
}
</script>
