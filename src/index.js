// 所有组件入口
import DcInput from '../packages/input'
import DcInputNumber from '../packages/input-number';
import DcRadio from '../packages/radio';
import DcRadioButton from '../packages/radio-button';
import DcRadioGroup from '../packages/radio-group';
import DcCheckbox from '../packages/checkbox';
import DcCheckboxButton from '../packages/checkbox-button';
import DcCheckboxGroup from '../packages/checkbox-group';
import DcSelect from '../packages/select';
import DcOption from '../packages/option';
import DcOptionGroup from '../packages/option-group';
import DcCascader from '../packages/cascader';
// import DcSearch from '../packages/search';

import filterObject from './utils/function/filterObject'
import addUnit from './utils/function/addUnit'

const components = [
  DcInput,
  DcInputNumber,
  DcRadio,
  DcRadioButton,
  DcRadioGroup,
  DcCheckbox,
  DcCheckboxButton,
  DcCheckboxGroup,
  DcSelect,
  DcOption,
  DcOptionGroup,
  DcCascader
  // DcSearch,
]

const $dc = {
  // 过滤对象中的键
  filterObject,
  // 添加单位
  addUnit
}

const install = (Vue) => {

  components.forEach(component => {
    Vue.component(component.name, component);
  })

  Vue.prototype.$dc = $dc;
}


export default {
  install
}
