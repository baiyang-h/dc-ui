<template>
  <dc-form
    ref="form"
    :config="config"
    :option="option"
    @submit="submit"
  >
  </dc-form>
</template>
<script>
// form的基本使用
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
          },
          listeners: {
            blur(e) {
              console.log(this, e.target)
            },
            clear: () => {
              console.log('clear', this)
            }
          }
        },
        {
          type: 'input',
          label: '文本框2',
          key: 'input2',
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
          label: '单选',
          key: 'radio',
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
                disabled: true
              },
            ]
          }
        },
        {
          type: 'checkbox',
          label: '复选框',
          key: 'checkbox',
        },
        {
          type: 'checkboxGroup',
          label: '复选框组',
          key: 'checkboxGroup',
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
                disabled: true
              },
            ]
          }
        },
        {
          type: 'switch',
          label: 'Switch',
          key: 'switch'
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
        {
          type: 'cascader',
          label: '级联选择器',
          key: 'cascader',
          attrs: {
            options: [{
              value: 'zhinan',
              label: '指南',
              children: [{
                value: 'shejiyuanze',
                label: '设计原则',
                children: [{
                  value: 'yizhi',
                  label: '一致'
                }, {
                  value: 'fankui',
                  label: '反馈'
                }, {
                  value: 'xiaolv',
                  label: '效率'
                }, {
                  value: 'kekong',
                  label: '可控'
                }]
              }, {
                value: 'daohang',
                label: '导航',
                children: [{
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                }, {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }]
              }]
            }, {
              value: 'zujian',
              label: '组件',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout 布局'
                }, {
                  value: 'color',
                  label: 'Color 色彩'
                }, {
                  value: 'typography',
                  label: 'Typography 字体'
                }, {
                  value: 'icon',
                  label: 'Icon 图标'
                }, {
                  value: 'button',
                  label: 'Button 按钮'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio 单选框'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox 多选框'
                }, {
                  value: 'input',
                  label: 'Input 输入框'
                }, {
                  value: 'input-number',
                  label: 'InputNumber 计数器'
                }, {
                  value: 'select',
                  label: 'Select 选择器'
                }, {
                  value: 'cascader',
                  label: 'Cascader 级联选择器'
                }, {
                  value: 'switch',
                  label: 'Switch 开关'
                }, {
                  value: 'slider',
                  label: 'Slider 滑块'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器'
                }, {
                  value: 'upload',
                  label: 'Upload 上传'
                }, {
                  value: 'rate',
                  label: 'Rate 评分'
                }, {
                  value: 'form',
                  label: 'Form 表单'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table 表格'
                }, {
                  value: 'tag',
                  label: 'Tag 标签'
                }, {
                  value: 'progress',
                  label: 'Progress 进度条'
                }, {
                  value: 'tree',
                  label: 'Tree 树形控件'
                }, {
                  value: 'pagination',
                  label: 'Pagination 分页'
                }, {
                  value: 'badge',
                  label: 'Badge 标记'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert 警告'
                }, {
                  value: 'loading',
                  label: 'Loading 加载'
                }, {
                  value: 'message',
                  label: 'Message 消息提示'
                }, {
                  value: 'message-box',
                  label: 'MessageBox 弹框'
                }, {
                  value: 'notification',
                  label: 'Notification 通知'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                }, {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                }, {
                  value: 'steps',
                  label: 'Steps 步骤条'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog 对话框'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                }, {
                  value: 'popover',
                  label: 'Popover 弹出框'
                }, {
                  value: 'card',
                  label: 'Card 卡片'
                }, {
                  value: 'carousel',
                  label: 'Carousel 走马灯'
                }, {
                  value: 'collapse',
                  label: 'Collapse 折叠面板'
                }]
              }]
            }, {
              value: 'ziyuan',
              label: '资源',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'jiaohu',
                label: '组件交互文档'
              }]
            }]
          }
        },
      ]
    };
  },
  methods: {
    submit() {
      console.log(this.$refs['form'].getFieldsValue())
    },
    resetForm(formName) {
      // this.$refs[formName].resetFields('text');
      // this.$refs[formName].resetFields(['text', 'number']);
      this.$refs[formName].resetFields();
    },
    // 得到所有的form值，或部分
    getFieldsValue() {
      console.log(this.$refs['form'].getFieldsValue())
      // console.log(this.$refs['form'].getFieldsValue('text'))
      // console.log(this.$refs['form'].getFieldValue('text'))
      // console.log(this.$refs['form'].getFieldsValue(['text', 'number']))
    },
    // 设置表单值
    setFieldsValue() {
      this.$refs['form'].setFieldsValue({
        input: 'input',
        input2: 'input2',
        slot1_a: 'slot1_a',
        slot1_b: 'slot1_b',
        slot2: 'slot2',
        slot3_a: 'slot3_a',
        slot3_b: 'slot3_b',
        number: '222',
        inputNumber: 333,
        select: 'Shanghai',
        radio: 'Shanghai',
        checkbox: true,
        checkboxGroup: ['Shanghai', 'Beijing'],
        switch: true,
        time:"09:00",
        cascader: ["zujian", "basic", "layout"],
        custom1: {
          custom_input: 'dddd'
        }
      })
    },
  }
}
</script>
