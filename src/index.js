// 所有组件入口
import JwInput from '../packages/input'
import JwInputNumber from '../packages/input-number';
import JwRadio from '../packages/radio';
import JwRadioButton from '../packages/radio-button';
import JwRadioGroup from '../packages/radio-group';
import JwCheckbox from '../packages/checkbox'
import JwCheckboxButton from '../packages/checkbox-button'
import JwCheckboxGroup from '../packages/checkbox-group'
import JwSearch from '../packages/search';

import filterObject from './utils/function/filterObject'
import addUnit from './utils/function/addUnit'

const components = [
  JwInput,
  JwInputNumber,
  JwRadio,
  JwRadioButton,
  JwRadioGroup,
  JwCheckbox,
  JwCheckboxButton,
  JwCheckboxGroup,
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
