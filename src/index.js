// 所有组件入口
import JwInput from '../packages/jw-input'
import JwSearch from '../packages/jw-search';

import filterObject from './utils/function/filterObject'
import addUnit from './utils/function/addUnit'

const components = [
  JwInput,
  JwSearch,
]

const $jw = {
  // 过滤对象中的键
  filterObject,
  // 添加单位
  addUnit
}

const install = (Vue) => {

  components.forEach(component => {
    Vue.component(component.name, component);
  })

  Vue.prototype.$jw = $jw;
}


export default {
  install
}
