<template>
  <div>
    <el-button-group>
      <el-button type="primary" @click="getFieldsValue">getFieldsValue</el-button>
      <el-button type="primary" @click="setFieldsValue">setFieldsValue</el-button>
      <el-button type="primary" @click="setForm">直接修改form</el-button>
      <el-button type="primary" @click="clearValidate">clearValidate</el-button>
    </el-button-group>
    <dc-gap height="30"></dc-gap>
    <dc-form
      ref="form"
      v-model="form"
      :config="config"
      :rules="rules"
      :showBtn="true"
      label-width="100px"
      @submit="submit"
    >
      <template slot="slot1">
        <div style="display: flex">
          <el-form-item prop="aaa">
            <el-input v-model="form.aaa"></el-input>
          </el-form-item>
          -
          <el-form-item prop="bbb" :rules="{required: true, message: '输入插槽值123123123'}">
            <el-input v-model="form.bbb"></el-input>
          </el-form-item>
        </div>
      </template>
      <template slot="slot2">
        <el-input v-model="form.ccc"></el-input>
      </template>
      <template slot="slot3">
        <div style="display: flex">
          <el-form-item>
            <el-input v-model="form.ddd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.eee"></el-input>
          </el-form-item>
        </div>
      </template>
    </dc-form>
  </div>
</template>
<script>
import Custom from '../examples/demo/Custom'
export default {
  data() {
    return {
      form: {
        text: '我是文本',
        aaa: 'aaa',
        bbb: '',
        slot3: '',
      },
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
            clear: () => {
              console.log('clear', this)
            }
          }
        },
        {
          type: 'slot',
          label: '插槽1',
          name: 'slot1',
          required: true
        },
        {
          type: 'slot',
          label: '插槽2',
          key: 'ccc',
          name: 'slot2',
          rules: [
            { required: true, message: '必填'},
          ],
        },
        {
          type: 'slot',
          label: '插槽3',
          key: 'slot3',
          name: 'slot3',
          required: true,
          rules: [
            { required: true, message: '这里的键是slot3，所以slot3必须是有值才可通过，必填项'},
          ],
        },
        {
          type: 'input',
          label: '文本数字框',
          key: 'number',
          rules: [
            { required: true, message: '必填'},
          ],
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
        {
          type: 'custom',
          label: '自定义',
          key: 'custom',
          component: Custom
        },
      ],
      rules: {
        text: [
          { required: true, message: '请输入活动名称' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符' }
        ],
        text2: [
          { required: true, message: '必填', trigger: 'blur' },
        ],
        aaa: [
          { required: true, message: '必填' },
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
    submit() {
      if(this.form.ddd && this.form.eee) {
        this.form.slot3 = 1
      } else {
        this.form.slot3 = undefined
      }
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.$emit('submit', this.form)
        } else {
          return false;
        }
      });
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
        text: '111',
        text1: 'ccc',
        number: '222',
        inputNumber: 333,
        select: 'Shanghai',
        checkboxGroup: ['Shanghai', 'Beijing'],
        aaa: '我是插槽aaa',
        bbb: '我是插槽bbb',
        ccc: '我是插槽ccc',
      })
    },
    setForm() {
      this.form = {
        ...this.form,
        text: '文本123',
        number: '4567777',
        inputNumber: 554,
        select: 'Shanghai',
        checkboxGroup: ['Shanghai', 'Beijing'],
        aaa: '我是插槽1',
        bbb: '我是插槽2',
        ccc: '我是插槽3',
      }
    },
    // 移除所有表单校验结果、或部分校验结果
    clearValidate() {
      this.$refs['form'].clearValidate()
      // this.$refs['form'].clearValidate(['text', 'number'])
    },
  }
}
</script>
