## 基本使用

type类型：text、input、inputNumber、select、radio、checkbox、checkboxGroup、switch、time、date、cascader、custom、html
其中custom自定义组件使用 component，
html 使用template

默认表单不会显示底部按钮，如果想显示的话，则设置showBtn为true

showBtn 底部按钮显示与否

okText 底部确认按钮文字

cancelText 底部取消按钮文字

config 表单的配置

rules 表单的规则

其他原 el-form 上的属性全都可以按照原 element-ui 文档添加

```js
{
  // 该对象上写的是 el-form-item 上的属性
  type: '表单控件类型', // input、inputNumber、select、radio、checkbox、checkboxGroup、switch、time、date、cascader
  label: '表单label',
  key: '表单域model字段, 也表示el-form-item上的prop属性',
  defaultValue: 'xx',	// 初始化默认值， 如果dc-form上有initialValues，优先级高于defaultValue
  attrs: {
   	// 该对象中写的都是表单控件的属性，如el-input上的属性
  },
  listeners: {
  	// 该对象中写的都是表单控件的事件，如el-input上的事件 blur等，直接写函数this指向dc-form实例对象，如果用匿名函数this指向当前文件的vue实例对象
  },
}
```

```vue
<template>
	<dc-form
    ref="form"
    v-model="form"
    :config="config"
    :rules="rules"
    :showBtn="true"
    label-width="100px"
    @submit="submit"
  ></dc-form>
</template>

<script>
	export default {
    data() {
      return {
        form: {},
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
              }]
            }
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
      }
    }
  }
</script>	
```



## 自定义表单



两种方式，一种使用 slot 插槽，一种在 config 中定义一个自定义组件



### 第一种插槽slot

```js
{
  type: 'slot',   // 该对象是插槽
  label: '插槽1',  // el-form-item 的 label
  key: 'slot1',     // 该 el-form-item 的prop或者model中的key名，如果你不需要该slot el-form-item进行表单验证，可以不用写
  name: 'slot1',  // 插槽名字，会去匹配 template 中写的插槽内容
  rules: [
  	{ required: true, message: '必填'}, // 该slot的el-form-item的验证规则
  ],
}
```

有时候我们表单验证需要验证外部的el-form-item，或者外部不需要，只需校验内部的el-form-item

```vue

<!-- 这里我只想验证外部的，不关注内部的el-form-item -->
<el-form-item label="活动时间" prop='slot1' :rules="[{ required: true, message: '必填项'}]">
  <el-form-item>表单1</el-form-item>
  <el-form-item>表单2</el-form-item>
</el-form-item>

<!-- 这里我只想对内部的表单进行验证，不关注外面的el-form-item，所以外部不需要写上prop -->
<el-form-item label="活动时间">
  <el-form-item prop="one">表单1</el-form-item>
  <el-form-item porp="two">表单2</el-form-item>
</el-form-item>
```

```vue
<template>
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
<template>

<script>
	export default {
    data() {
      return {
        form: {
          slot3: '',
        },
        config: [
          //......
          {
            type: 'slot',
            label: '插槽1',
            name: 'slot1',  
            required: true // 不写 key的情况下, 写上 required 不会验证，但会有 * 显示
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
        ]
      }
    }
  }  
</script>
```

### 第二种自定义组件

```vue
<script>
	export default {
    data() {
      return {
        config: [
          {
            type: 'custom',
            label: '自定义',
            key: 'custom',
            component: Custom
          },
        ]
      }
    }
  }
</script>	
```

Custom组件

自定义组件会接收一个 `value` 属性，向外暴露一个`$emit('input')` 方法，来改变form对象，如果你要写自定义组件，一定要写上这两样东西。

```vue
<template>
  <div>
    <el-input :value="value" @input="input"></el-input>
    我是自定义
  </div>
</template>

<script>
export default {
  name: "Custom",
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    input(v) {
      this.$emit('input', v)
    }
  }
}
</script>

<style scoped>

</style>

```



## Form Events



### change

```vue
<template>
	<dc-form @change="change"></dc-form>
</template>	

<script>
	export default {
    methods: {
      change(values) {
        console.log(values) // 表单的所有值, 后期可增加像react那样，第一个参数只改变的值，第二个参数所有值
      }
    }
  }
</script>
```



### submit

showBtn为true按钮显示的时使用

```vue
<template>
	<dc-form @submit="submit"></dc-form>
</template>	

<script>
	export default {
    methods: {
      submit(values) {
        console.log(values)  // 所有表单值
      }
    }
  }
</script>
```



### reset

showBtn为true按钮显示的时使用

```vue
<template>
	<dc-form @reset="reset"></dc-form>
</template>	

<script>
	export default {
    methods: {
      reset(values) {
        console.log(values)  // 所有表单值
      }
    }
  }
</script>
```



## Form Methods



| 方法名         | 说明                                                   | 参数                     |
| -------------- | ------------------------------------------------------ | ------------------------ |
| validate       | 对整个表单进行校验的方法                               | -                        |
| validateField  | 对部分表单字段进行校验的方法                           | 函数参数string、string[] |
| resetFields    | 对整个表单进行重置                                     | 函数参数string、string[] |
| clearValidate  | 移除表单项的校验结果                                   | 函数参数string、string[] |
| getFieldsValue | 获取一组输入控件的值，如不传入参数，则获取全部组件的值 | 函数参数string、string[] |
| getFieldValue  | 获得单个控件的值                                       | 函数参数string           |
| setFieldsValue | 设置一组输入控件的值，传入的是一个对象，               | 函数参数string、string[] |

```vue
<script>
	methods: {
    // validate
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
    // resetFields
    resetForm(formName) {
      // this.$refs[formName].resetFields('text');  // 单个
      // this.$refs[formName].resetFields(['text', 'number']); // 多个
      this.$refs[formName].resetFields();  // 全部
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
    // 直接修改表单内容
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
</script>
```

