<template>
  <dc-form
    ref="search"
    class="dc-search"
    v-bind="$attrs"
    :value="value"
    :config="formConfig"
    :option="option"
    @input="input"
    @submit="search"
    @reset="reset"
  >
    <template v-for="key in Object.keys($slots)" :slot="key">
      <slot :name="key"></slot>
    </template>
  </dc-form>
</template>

<script>
/**
 * @description 搜索组件，基于封装的dc-form， form相关的一些属性，该组件也有
 * @property { Object } value 搜索组件的表单数据
 * @property { Object } config 表单配置,具体属性可查看 element-ui 官方Form组件属性
 * @property { Array } option 表单控件集合，[{type, key, label, ...}, ...] 其中 type和key 是必填项
 * @property { Boolean } showBtn 搜索按钮是否显示，默认显示
 * @property { String } okText 确认按钮文字内容，默认查询
 * @property { String } cancelText 取消按钮文字内容，默认重置
 *
 * @ref { Function } validate 对整个表单进行校验的方法，外部使用 this.$ref['form'].validate(callback)
 * @ref { Function } validateField 对部分表单字段进行校验的方法，外部使用 this.$ref['form'].validate(string|array) 或参数传入数组
 * @ref { Function } resetFields 对整个表单进行重置，this.$ref['form'].resetFields() ，可传入字符串键名、数组、或不传，只重置一个、多个、所有
 * @ref { Function } clearValidate 移除表单项的校验结果，this.$ref['form'].clearValidate(array | string) 或不传
 * @ref { Function } getFieldsValue 获取一组输入控件的值，如不传入参数，则获取全部组件的值，this.$ref['form'].getFieldsValue(array | string) 或不传， 可取一个、多个、所有
 * @ref { Function } getFieldValue 获得单个控件的值，this.$ref['form'].getFieldValue(string)
 * @ref { Function } setFieldsValue 设置一组输入控件的值，传入的是一个对象，this.$ref['form'].setFieldsValue({a: 1, b: 2})
 */
export default {
  name: 'dc-search',
  props: {
    value: {
      type: Object,
      default: () => ({})
    },
    config: {
      type: Object,
      default: () => ({})
    },
    option: {
      type: Array,
      default: () => ([])
    },
    // 底部按钮显示与否
    showBtn: {
      type: Boolean,
      default: true
    },
    // 底部确认按钮文字
    okText: {
      type: String,
      default: '查询'
    },
    // 底部取消按钮文字
    cancelText: {
      type: String,
      default: '重置'
    },
  },
  data() {
    return {
      form : {}
    }
  },
  computed: {
    formConfig() {
      return {
        ...this.config,
        showBtn: this.showBtn,
        okText: this.okText,
        cancelText: this.cancelText,
        inline: true
      }
    }
  },
  methods: {
    input(values) {
      this.form = values
      this.$emit('input', values)
    },
    search(values) {
      this.$emit('search', values)
    },
    reset(values) {
      this.$emit('reset', values)
    },
    // 对整个表单进行校验的方法
    validate(callback) {
      return this.$refs['search'].validate((valid) => callback(valid, this.form))
    },
    // 对部分表单字段进行校验的方法
    validateField(...args) {
      return this.$refs['search'].validateField(...args)
    },
    // 对整个表单进行重置
    resetFields(keys) {
      this.$refs['search'].resetFields(keys)
    },
    // 移除表单项的校验结果
    clearValidate(...args) {
      return this.$refs['search'].clearValidate(...args)
    },
    // 获取一组输入控件的值，如不传入参数，则获取全部组件的值
    getFieldsValue(fieldNames) {
      return this.$refs['search'].getFieldsValue(fieldNames)
    },
    // 获得单个控件的值
    getFieldValue(fieldName) {
      return this.$refs['search'].getFieldValue(fieldName)
    },
    // 设置一组输入控件的值，传入的是一个对象
    setFieldsValue(values) {
      this.$refs['search'].setFieldsValue(values)
    }
  }
}
</script>
