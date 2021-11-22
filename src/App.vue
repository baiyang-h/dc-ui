<template>
  <dc-form
    ref="ruleForm"
    :config="config"
    :rules="rules"
    :show-btn="true"
  >
<!--    <el-form-item slot="footer">-->
<!--      <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>-->
<!--      <el-button @click="resetForm('ruleForm')">重置</el-button>-->
<!--    </el-form-item>-->
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
            blur(e) {
              console.log(this, e.target)
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
        }
      ],
      rules: {
        text: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        console.log(valid)
        if (valid) {
          console.log(213123)
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
    },
    submit(values) {
      console.log(values)
    }
  }
}
</script>
