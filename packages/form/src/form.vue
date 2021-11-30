<template>
  <el-form
    class="dc-form"
    ref="form"
    v-bind="$attrs"
    v-on="$listeners"
    :model="form"
  >
    <template v-if="config.length">
      <template v-for="item in config">
        <el-form-item
          v-bind="$dc.filterObject(item, ['attrs', 'listeners'])"
          :ref="item.key+'Ref'"
          :key="item.key"
          :label="item.label || ''"
          :prop="item.key"
        >
          <components
            v-if="item.type !== 'slot'"
            :is="getComNameOrModule(item)"
            v-bind="item.attrs"
            v-on="wrapFormItemListeners(item.listeners)"
            v-model="form[item.key]"
          />
          <slot v-else :name="item.name"></slot>
        </el-form-item>
      </template>
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
 * @property { Object } initialValues 表单默认值，只有初始化以及重置时生效
 * @property { Boolean } showBtn 是否显示底部按钮，默认false不显示。如果footer插槽和showBtn属性同时出现，优先级showBtn更高
 * @property { String } okText 底部确认按钮文字，默认提交
 * @property { String } cancelText 底部取消按钮文字，默认重置
 *
 * @event { Function } change 当表单中任何一个控件的值发生改变时就会触发，提供form值的参数
 * @event { Function } submit showBtn为true按钮显示的时，确认按钮触发的事件，向外暴露值 this.form
 * @event { Function } reset showBtn为true按钮显示的时，取消按钮触发的事件，向外暴露值 this.form
 *
 * @ref { Function } validate 对整个表单进行校验的方法，外部使用 this.$ref['form'].validate(callback)
 * @ref { Function } validateField 对部分表单字段进行校验的方法，外部使用 this.$ref['form'].validate(string|array) 或参数传入数组
 * @ref { Function } resetFields 对整个表单进行重置，this.$ref['form'].resetFields() ，可传入字符串键名、数组、或不传，只重置一个、多个、所有
 * @ref { Function } clearValidate 移除表单项的校验结果，this.$ref['form'].clearValidate(array | string) 或不传
 * @ref { Function } getFieldsValue 获取一组输入控件的值，如不传入参数，则获取全部组件的值，this.$ref['form'].getFieldsValue(array | string) 或不传， 可取一个、多个、所有
 * @ref { Function } getFieldValue 获得单个控件的值，this.$ref['form'].getFieldValue(string)
 * @ref { Function } setFieldsValue 设置一组输入控件的值，传入的是一个对象，this.$ref['form'].setFieldsValue({a: 1, b: 2})
 */
import { isObj } from '@/utils/function/type'
import control from "../control";
export default {
  name: "dc-form",
  props: {
    config: {
      type: Array,
      default: () => ([])
    },
    // 表单默认值，只有初始化以及重置时生效
    initialValues: {
      type: Object,
      default: () => ({})
    },
    // 底部按钮显示与否
    showBtn: {
      type: Boolean,
      default: false
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
      control,
      form: this.initForm()
    }
  },
  watch: {
    form: {
      handler(val) {
        this.$emit('change', val)
      },
      deep: true,
    },
  },
  methods: {
    // 初始化form数据，这里还没做递归的情况
    initForm() {
      const form = {}
      this.config.forEach(item => {
        // 如果没有key键，则跳过，主要是 slot 的问题，插槽设置prop的问题
        if(item.key) {
          form[item.key] = item.defaultValue || undefined
        }
      })
      // 如果在form上设置了initialValues属性，则优先级比单一的defaultValue高
      if(Object.keys(this.initialValues).length) {
        // eslint-disable-next-line no-prototype-builtins
        if(this.config.some(item => item.hasOwnProperty('defaultValue'))) {
          console.warn('注意：存在initialValues的情景下，不要使用defaultValue')
        }
        //以initialValues设置的值为准，没设置的为undefined
        Object.keys(form).forEach(key => {
          // eslint-disable-next-line no-prototype-builtins
          if(this.initialValues.hasOwnProperty(key)) {
            form[key] = this.initialValues[key]
          } else {
            form[key] = undefined
          }
        })
      }
      return form
    },
    // 通过传入的config表单类型，加载动态组件。普通表单和自定义表单
    getComNameOrModule(item) {
      return item.type !== 'custom' ? control[item.type] : item.component
    },
    // 对 from-item 组件的事件进行处理，使其this指向该form实例
    wrapFormItemListeners(listeners) {
      if(listeners) {
        return Object.keys(listeners).reduce((total, key) => {
          total[key] = listeners[key].bind(this)
          return total
        }, {})
      }
      return listeners
    },
    // showBtn显示的时候，点击提交触发的事件
    submit() {
      this.$emit('submit', this.form)
    },
    // 点击取消按钮触发的事件
    reset() {
      this.$refs['form'].resetFields();
      this.$emit('reset', this.form)
    },
    // 对整个表单进行校验的方法
    validate(callback) {
      return this.$refs['form'].validate((valid)=>{
        callback(valid, this.form)
      })
    },
    // 对部分表单字段进行校验的方法
    validateField(...args) {
      return this.$refs['form'].validateField(...args)
    },
    // 对整个表单进行重置
    resetFields(keys) {
      // 如果有传入的话则对传入的 key 重置，如果没有传入参数，则重置所有表单
      if(keys) {
        if(typeof keys === 'string') {
          this.$refs[keys+'Ref'].forEach(ref => ref.resetField())
        } else if(Array.isArray(keys) && keys.length) {
          keys.forEach(key => {
            this.$refs[key+'Ref'].forEach(ref => ref.resetField())
          })
        }
      } else {
        this.$refs['form'].resetFields()
      }
    },
    // 移除表单项的校验结果
    clearValidate(...args) {
      return this.$refs['form'].clearValidate(...args)
    },
    // 获取一组输入控件的值，如不传入参数，则获取全部组件的值
    getFieldsValue(fieldNames) {
      // fieldNames: string[] | string
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
    },
    // 获得单个控件的值
    getFieldValue(fieldName) {
      if(typeof fieldName === 'string') {
        return this.form[fieldName]
      }
    },
    // 设置一组输入控件的值，传入的是一个对象
    setFieldsValue(values) {
      if(values && isObj(values)) {
        Object.keys(values).forEach(key => {
          this.$set(this.form, key, values[key])
        })
      }
    }
  }
}
</script>
