<template>
  <div>
    <dc-form
      ref="form"
      v-model="form"
      :config="config"
      :option="option"
      :rules="rules"
      @submit="submit"
    >
      <template slot="slot1">
        <div style="display: flex">
          <el-form-item prop="slot1_a" :rules="{required: true, message: '必填'}">
            <el-input v-model="form.slot1_a" placeholder="请输入"></el-input>
          </el-form-item>
          -
          <el-form-item prop="slot1_b" :rules="{required: true, message: '必填'}">
            <el-input v-model="form.slot1_b" placeholder="请输入"></el-input>
          </el-form-item>
        </div>
      </template>
      <template slot="slot2">
        <el-input v-model="form.slot2" placeholder="请输入"></el-input>
      </template>
      <template slot="slot3">
        <div style="display: flex">
          <el-form-item>
            <el-input v-model="form.slot3.a" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.slot3.b" placeholder="请输入"></el-input>
          </el-form-item>
        </div>
      </template>
    </dc-form>
  </div>
</template>

<script>
// 混合，包括了 slot和custom并且带有校验的表单

const Custom = {
  props: ['value'],
  template: `
    <div>
      <el-input :value="value" @input="input" style="width: 250px" placeholder="请输入" />
      我是自定义
    </div>
  `,
  methods: {
    input(v) {
      this.$emit('input', v)
    }
  }
}
const Custom3 = {
  template: `
    <div>
      <el-input v-model="a" style="width: 150px" placeholder="请输入" @blur="blur" />
      <el-input v-model="b" style="width: 150px" placeholder="请输入" @blur="blur" />
    </div>
  `,
  props: ['value'],
  data() {
    return {
      a: '',
      b: ''
    }
  },
  methods: {
    blur() {
      if(!this.a && !this.b) {
        this.$emit('input', undefined)
      } else {
        this.$emit('input', {
          a: this.a,
          b: this.b
        })
      }
    },
  },
  watch: {
    value(val) {
      if(!val) {
        this.a = ''
        this.b = ''
      }
    }
  }
}
export default {
  data() {
    return {
      form: {
        text: '我是text',
        input: '',
        number: '123',
        inputNumber: undefined,
        select: '',
        radio: undefined,
        checkbox: undefined,
        checkboxGroup: undefined,
        switch: true,
        time: undefined,
        date: undefined,
        cascader: [],
        slot1_a: '',
        slot1_b: '',
        slot2: '',
        slot3: {
          a: '',
          b: '11'
        },
        custom1: '',
        custom2: {
          custom_input: '',
          custom_select: ''
        },
        custom3: undefined
      },
      config: {
        showBtn: true,
        labelWidth: '120px'
      },
      option: [
        {
          type: 'text',
          key: 'text',
          label: 'text'
        },
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
                disabled: true
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
                disabled: true
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
          // 不写key，直接模板中写form.xx，不写key，写上required，不会验证，可直接显示*，至于上面相应插槽中写的表单验证根据rule中的规则
          type: 'slot',
          label: '插槽1',
          name: 'slot1',
          required: true
        },
        {
          type: 'slot',
          key: 'slot2',
          label: '插槽2',
          name: 'slot2',
          rules: [
            { required: true, message: '必填项'},
          ],
        },
        {
          // 下面对slot3整行验证，我们可以根据slot3.a 和 slot3.b 来自行写规则
          type: 'slot',
          key: 'slot3',
          label: '插槽3',
          name: 'slot3',
        },
        {
          type: 'custom',
          key: 'custom1',
          label: '自定义组件1',
          component: Custom
        },
        {
          type: 'custom',
          key: 'custom2',
          label: '自定义组件2',
          requiredMark: true,
          class: 'aaa',
          children: [
            {
              type: 'input',
              key: 'custom_input',
            },
            {
              type: 'html',
              template: `<div>——</div>`
            },
            {
              type: 'select',
              key: 'custom_select',
              attrs: {
                options: [
                  {
                    value: 1,
                    label: 'AAA'
                  }, {
                    value: 2,
                    label: 'BBB'
                  }
                ]
              }
            },
          ]
        },
        {
          // 插槽和自定义组件，当存在复杂的表单校验时，使用自定义组件这种方式会更好
          type: 'custom',
          key: 'custom3',
          label: '自定义组件3',
          component: Custom3
        },
      ],
      rules: {
        input: [
          { required: true, message: '必填' },
        ],
        select: [
          { required: true, message: '必填' },
        ],
        checkbox: [
          { required: true, message: '必填' },
        ],
        checkboxGroup: [
          { required: true, message: '必填' },
        ],
        slot3: [
          { required: true },
          {
            validator(rule, value, callback) {
              // console.log(rule, value)
              if(value.a && value.b) {
                callback();
              } else {
                callback(new Error('必填'));
              }
            },
          }
        ],
        custom1: [
          { required: true, message: '必填',  trigger: 'blur' },
        ],
        'custom2.custom_input': [
          { required: true, message: '必填' },
        ],
        custom3: [
          { required: true, message: '必填', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    submit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          console.log(this.form)
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
}
</script>

<style scoped>

</style>
