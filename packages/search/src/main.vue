<template>
  <el-form
    :model="model"
    :rules="finalRules"
    ref="form"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item
      v-for="item in config"
      v-bind="item"
      :key="item.key || Date.now()"
      :label="item.label"
      :prop="item.key"
    >
      <component :is="currentComponent(item)" />
    </el-form-item>
  </el-form>
</template>
<script>
import { isObj } from '@/utils/function/type'
import formMapMixin from '@/mixins/form-map';

export default {
  name: 'jw-search',
  mixins: [formMapMixin],
  props: {
    //  配资
    config: {
      type: Array,
      required: true,
      default: () => []
    },
    // 验证规则
    rules: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    return {
      model: {}
    };
  },
  computed: {
    // 这里有个嵌套为题还没解决???
    finalRules() {
      const _rules = {};
      this.config.forEach(item => {
        // 如果单个item写了规则的话
        if(!item.rules && typeof (item.rules) === 'object' && Object.keys(item.rules).length) {
          // item.rules 是对象写法还是数组写法
          if(isObj(item.rules)) {
            _rules[item.key] = [...this.rules[item.key], item.rules]
          } else {
            _rules[item.key] = [...this.rules[item.key], ...item.rules]
          }
        } else {
          _rules[item.key] = this.rules[item.key]
        }
      })
      return _rules
    }
  },
  methods: {
    // 选择组件或者组件名，动态组件渲染
    currentComponent(item) {
      // formMapMixin 混入中的方法，type -> name or module
      return this.getComNameOrModule(item)
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
