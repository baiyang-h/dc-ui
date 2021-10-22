import { templateOrRenderComponent } from '@/utils/function/component'
import { FORM_CONTROL_MAP } from '@/utils/contanst'

export default {
  methods: {
    /**
     * @description 根据传入的对象中的type属性来得到 UI 组件库中 定义表单控件的组件名或组件
     * @param {Object} item
     * @return {String | Component} 组件名或组件
     */
    getComNameOrModule(item={}) {
      const { type } = item;
      return type === 'custom' && templateOrRenderComponent(item) || FORM_CONTROL_MAP[type] || type;
    }
  }
}
