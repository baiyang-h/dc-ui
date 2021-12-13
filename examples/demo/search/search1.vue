<template>
  <div>
    <dc-search
      ref="search"
      :option="option"
      @search="search"
      @reset="reset"
    >
    </dc-search>
  </div>
</template>
<script>
// search 基础使用
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
          type: 'input',
          key: 'number',
          label: '文本数字框',
          attrs: {
            type: 'number',
          }
        },
        {
          type: 'inputNumber',
          key: 'inputNumber',
          label: '数字框',
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
          type: 'radio',
          key: 'radio',
          label: '单选',
          attrs: {
            options: [
              {
                value: 'Shanghai',
                label: '上海'
              }, {
                value: 'Beijing',
                label: '北京'
              }, {
                value: 'hanghzou',
                label: '杭州',
              },
            ]
          }
        },
        {
          type: 'checkbox',
          key: 'checkbox',
          label: '复选框',
        },
        {
          type: 'checkboxGroup',
          key: 'checkboxGroup',
          label: '复选框组',
          attrs: {
            options: [
              {
                value: 'Shanghai',
                label: '上海'
              }, {
                value: 'Beijing',
                label: '北京'
              }, {
                value: 'HangZhou',
                label: '杭州',
              },
            ]
          }
        },
        {
          type: 'switch',
          key: 'switch',
          label: 'Switch',
        },
        {
          type: 'time',
          label: '时间选择器',
          key: 'time'
        },
        {
          type: 'date',
          label: '日期选择器',
          key: 'date',
          attrs: {
            type: 'daterange'
          }
        },
      ]
    };
  },
  methods: {
    search(values) {
      console.log(values)
    },
    reset(values) {
      console.log(values)
    }
  }
}
</script>
