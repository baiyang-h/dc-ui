<template>
  <el-form
    class="dc-form"
    ref="form"
    v-bind="_config"
    v-on="$listeners"
    :model="form"
    :rules="rules"
  >
    <template v-if="option.length">
      <template v-for="item in option">
        <el-form-item
          v-if="item.type==='custom' && item.children && item.children.length>0"
          v-bind="inheritFormItemAttrs(item)"
          :ref="item.key+'Ref'"
          :key="item.key"
          :label="item.label || ''"
          :prop="item.key"
        >
          <el-form-item
            class="form-item-inline-block"
            v-for="_item in item.children"
            v-bind="inheritFormItemAttrs(item)"
            :ref="_item.key+'Ref'"
            :key="_item.key"
            :label="_item.label || ''"
            :prop="item.key+'.'+_item.key"
          >
            <components
              v-if="_item.type !== 'slot'"
              :is="getComNameOrModule(_item)"
              v-bind="_item.attrs"
              v-on="wrapFormItemListeners(_item.listeners)"
              v-model="form[item.key][_item.key]"
            />
            <slot v-else :name="_item.name"></slot>
          </el-form-item>
        </el-form-item>
        <el-form-item
          v-else
          v-bind="inheritFormItemAttrs(item)"
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
    <!--  底部按钮部分，如果footer插槽和_config.showBtn属性同时出现，优先级_config.showBtn更高  -->
    <el-form-item v-if="_config.showBtn">
      <el-button type="primary" @click="submit">{{ _config.okText }}</el-button>
      <el-button @click="reset">{{ _config.cancelText }}</el-button>
    </el-form-item>
    <slot name="footer" v-else></slot>
  </el-form>
</template>

<script>
/**
 * @description From
 * @property { Array } config form 配置，文档中form上的属性
 *  -- 以下是对config进行计算属性后的内部_config，增加了一些自定义属性 + ui库Form的属性 的总和 --
 *    @config { Boolean } config.showBtn 是否显示底部按钮，默认false不显示。如果footer插槽和config.showBtn属性同时出现，优先级config.showBtn更高
 *    @config { String } config.okText 底部确认按钮文字，默认提交
 *    @config { String } config.cancelText 底部取消按钮文字，默认重置
 *
 * @property { Object } value 外部设置的默认form值，可直接通过外部this.form.xx = xx 改变
 * @property { Array } option 表单item配置项list
 * @property { Array } rules 表单验证规则
 *
 * @event { Function } change 当表单中任何一个控件的值发生改变时就会触发，提供form值的参数
 * @event { Function } submit config.showBtn为true按钮显示的时，确认按钮触发的事件，向外暴露值 this.form
 * @event { Function } reset config.showBtn为true按钮显示的时，取消按钮触发的事件，向外暴露值 this.form
 *
 * @ref { Function } validate 对整个表单进行校验的方法，外部使用 this.$ref['form'].validate(callback)
 * @ref { Function } validateField 对部分表单字段进行校验的方法，外部使用 this.$ref['form'].validate(string|array) 或参数传入数组
 * @ref { Function } resetFields 对整个表单进行重置，this.$ref['form'].resetFields() ，可传入字符串键名、数组、或不传，只重置一个、多个、所有
 * @ref { Function } clearValidate 移除表单项的校验结果，this.$ref['form'].clearValidate(array | string) 或不传
 * @ref { Function } getFieldsValue 获取一组输入控件的值，如不传入参数，则获取全部组件的值，this.$ref['form'].getFieldsValue(array | string) 或不传， 可取一个、多个、所有
 * @ref { Function } getFieldValue 获得单个控件的值，this.$ref['form'].getFieldValue(string)
 * @ref { Function } setFieldsValue 设置一组输入控件的值，传入的是一个对象，this.$ref['form'].setFieldsValue({a: 1, b: 2})
 */
import control from "../control";
export default {
  name: "dc-form",
  props: {
    // 为了外部直接修改value内部也能改变
    value: {
      type: Object,
      default: () => ({})
    },
    // form 配置
    config: {
      type: Object,
      default: () => ({})
    },
    // form-item 配置list
    option: {
      type: Array,
      default: () => ([])
    },
    // 表单验证规则
    rules: {
      type: Object,
    },
  },
  data() {
    return {
      control,
      form: this.initForm()
    }
  },
  computed: {
    _config() {
      return {
        // 底部按钮显示与否
        showBtn: false,
        // 底部确认按钮文字
        okText: '提交',
        // 底部取消按钮文字
        cancelText: '重置',
        ...this.config,
      }
    }
  },
  created() {
    // 初始化
    this.$emit('input', this.form)
  },
  watch: {
    form: {
      handler(val) {
        this.$emit('input', val)
        this.$emit('change', val)
      },
      deep: true,
    },
  },
  methods: {
    // 初始化form数据，如果外部设置了form其他值的则保持不变，没设置则undefined
    initForm() {
      const recursionOption = (options) => {
        let o = {}
        options.forEach(item => {
          if(item.key) {
            if(item.children && item.children.length) {
              o[item.key] = recursionOption(item.children)
            } else {
              if(['checkbox', 'switch'].includes(item.type)) {
                o[item.key] = false
              } else {
                o[item.key] = undefined
              }
            }
          }
        })
        return o
      }
      const form = recursionOption(this.option)
      return this.$dc.deepMerge(form, this.value)
    },
    //form-item继承的属性，移除一部分不需要继承的属性
    inheritFormItemAttrs(item) {
      return this.$dc.filterObject(item, ['attrs', 'listeners', 'children'])
    },
    // 通过传入的option表单类型，加载动态组件。普通表单和自定义表单
    getComNameOrModule(item) {
      if(item.type === 'custom') {
        return item.component
      } else {
        return control[item.type]
      }
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
    // config.showBtn显示的时候，点击提交触发的事件
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
      return this.$refs['form'].validate(callback)
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
      this.form = this.$dc.deepMerge(this.form, values)
    }
  }
}
</script>
<style scoped lang="scss">
.form-item-inline-block {
  display: inline-block;
}
</style>
