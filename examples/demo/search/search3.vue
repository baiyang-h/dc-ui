<template>
  <div>
    <dc-search
      ref="search"
      :option="option"
      v-model="form"
      @search="search"
      @reset="reset"
    >
      <template slot="slot1">
        <div style="display: flex">
          <el-form-item prop="slot1_a">
            <el-input v-model="form.slot1_a" placeholder="请输入"></el-input>
          </el-form-item>
          -
          <el-form-item prop="slot1_b">
            <el-input v-model="form.slot1_b" placeholder="请输入"></el-input>
          </el-form-item>
        </div>
      </template>
      <template slot="slot2">
        <el-input v-model="form.slot2" placeholder="请输入"></el-input>
      </template>
      <template slot="slot3">
        <div style="display: flex">
          <el-form-item prop="slot3.a">
            <el-input v-model="form.slot3.a" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item prop="slot3.b">
            <el-input v-model="form.slot3.b" placeholder="请输入"></el-input>
          </el-form-item>
        </div>
      </template>
    </dc-search>
    <div>
      <el-button type="primary" @click="getFieldsValue">getFieldsValue</el-button>
      <el-button type="primary" @click="setFieldsValue">setFieldsValue</el-button>
      <el-button type="primary" @click="resetFields">resetFields</el-button>
    </div>
  </div>
</template>
<script>
// 使用插槽和自定义组件
export default {
  data() {
    return {
      form: {
        slot1_a: '',
        slot1_b: '',
        slot2: '',
        slot3: {
          a: '',
          b: '11'
        },
      },
      option: [
        {
          type: 'input',
          key: 'input',
          label: '文本框'
        },
        {
          type: 'slot',
          label: '插槽1',
          name: 'slot1',
        },
        {
          type: 'slot',
          key: 'slot2',
          label: '插槽2',
          name: 'slot2',
        },
        {
          type: 'slot',
          key: 'slot3',
          label: '插槽3',
          name: 'slot3',
        },
        {
          type: 'custom',
          key: 'custom1',
          label: '自定义组件1',
          children: [
            {
              type: 'input',
              key: 'aaa'
            },
            {
              type: 'html',
              template: `<div>——</div>`
            },
            {
              type: 'input',
              key: 'bbb'
            }
          ]
        },
        {
          type: 'custom',
          key: 'custom2',
          label: '自定义组件2',
          component: {
            template: `<div>
              <el-input v-model="aa" @blur="blur" placeholder="请输入" />
              我是自定义组件
            </div>`,
            props: ['value'],
            data() {
              return {
                aa: ''
              }
            },
            watch: {
              value(val) {
                this.aa = val
              }
            },
            methods: {
              blur() {
                this.$emit('input', this.aa)
              }
            }
          }
        }
      ]
    };
  },
  methods: {
    search(values) {
      console.log(values)
    },
    reset(values) {
      console.log(values)
    },
    getFieldsValue() {
      console.log(this.$refs['search'].getFieldsValue())
    },
    setFieldsValue() {
      this.$refs['search'].setFieldsValue({
        input: 'aaa',
        slot1_a: '111',
        slot1_b: '222',
        slot3: {
          a: 'a',
          b: '22'
        },
        custom1: {
          aaa: '777',
          bbb: '888',
        },
        custom2: '999'
      })
    },
    resetFields() {
      this.$refs['search'].resetFields()
    },
  }
}
</script>
