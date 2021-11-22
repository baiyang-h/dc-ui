<template>
  <el-form
    class="dc-form"
    ref="form"
    v-bind="$attrs"
    v-on="$listeners"
    :model="form"
  >
    <template v-if="config.length">
      <el-form-item
        v-for="item in config"
        v-bind="$dc.filterObject(item, ['attrs', 'listeners'])"
        :key="item.key"
        :label="item.label || ''"
        :prop="item.key"
      >
        <components
          :is="control[item.type]"
          v-bind="item.attrs"
          v-on="item.listeners"
          v-model="form[item.key]"
        >
          <slot></slot>
        </components>
      </el-form-item>
    </template>
    <slot v-else></slot>
    <!--  底部按钮部分，如果footer插槽和showBtn属性同时出现，优先级showBtn更高  -->
    <el-form-item v-if="showBtn">
      <el-button type="primary" @click="submit">{{ okText }}</el-button>
      <el-button @click="reset">{{ cancelText }}</el-button>
    </el-form-item>
    <slot name="footer" v-else></slot>
  </el-form>
</template>

<script>
/**
 * @description From
 * @property { Array } config 配置项
 * @property { Boolean } showBtn 是否显示底部按钮，默认显示。如果footer插槽和showBtn属性同时出现，优先级showBtn更高
 * @event { Function } submit showBtn为true按钮显示的时，确认按钮触发的事件，向外暴露值 this.form
 * @event { Function } reset showBtn为true按钮显示的时，取消按钮触发的事件，向外暴露值 this.form
 */
import control from "../control";
export default {
  name: "dc-form",
  props: {
    config: {
      type: Array,
      default: () => []
    },
    // 底部按钮显示与否
    showBtn: {
      type: Boolean,
      default: true
    },
    // 底部确认按钮文字
    okText: {
      type: String,
      default: '提交'
    },
    // 底部取消按钮文字
    cancelText: {
      type: String,
      default: '重置'
    },
  },
  data() {
    return {
      form: this.initForm(),
      control
    }
  },
  methods: {
    // 初始化form数据，对于相关类型初始化为数组，其他为undefined
    initForm() {
      const form = {}
      const arrayControl = ['checkboxGroup'];
      this.config.forEach(item => {
        form[item.key] = arrayControl.includes(item.key) ? [] : undefined
      })
      return form
    },

    // showBtn显示的时候，点击提交触发的事件
    submit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.$emit('submit', this.form)
        } else {
          return false;
        }
      });
    },
    // 点击取消按钮触发的事件
    reset() {
      this.$refs['form'].resetFields();
      this.$emit('reset', this.form)
    },

    // 对整个表单进行校验的方法
    validate(callback) {
      return this.$refs['form'].validate(callback)
    },
    // 对部分表单字段进行校验的方法
    validateField(...args) {
      return this.$refs['form'].validateField(...args)
    },
    // 对整个表单进行重置
    resetFields(...args) {
      return this.$refs['form'].resetFields(...args)
    },
    // 移除表单项的校验结果
    clearValidate(...args) {
      return this.$refs['form'].clearValidate(...args)
    },
    // 获取一组输入控件的值，如不传入参数，则获取全部组件的值
    getFieldsValue(fieldNames) { // fieldNames: string[] | string
      // 如果不传参数，则返回整个 form
      if(!fieldNames) {
        return this.form
      }
      if(Array.isArray(fieldNames)) {
        let o = {};
        fieldNames.forEach(field => {
          if(typeof field === 'string') {
            o[field] = this.form[field]
          }
        })
        return o
      } else if(typeof fieldNames === 'string') {
        return this.form[fieldNames]
      }
    }
  }
}
</script>
