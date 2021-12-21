// 所有组件入口
import Input from '../packages/input'
import InputNumber from '../packages/input-number';
import RadioGroup from '../packages/radio-group';
import CheckboxGroup from '../packages/checkbox-group';
import Select from '../packages/select';
import TimePicker from '../packages/time-picker';
import DatePicker from '../packages/date-picker';
import Form from '../packages/form'
import Gap from '../packages/gap'
import Search from '../packages/search';

import filterObject from './utils/function/filterObject'
import addUnit from './utils/function/addUnit'
import deepMerge from './utils/function/deepMerge'

const components = [
  Input,
  InputNumber,
  Select,
  RadioGroup,
  CheckboxGroup,
  TimePicker,
  DatePicker,
  Form,
  Search,
  Gap,
]

const $dc = {
  // 过滤对象中的键
  filterObject,
  // 添加单位
  addUnit,
  // 对象数组深度合并
  deepMerge
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
