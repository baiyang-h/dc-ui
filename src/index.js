// 所有组件入口
import Input from '../packages/input'
import InputNumber from '../packages/input-number';
import Radio from '../packages/radio';
import RadioButton from '../packages/radio-button';
import RadioGroup from '../packages/radio-group';
import Checkbox from '../packages/checkbox';
import CheckboxButton from '../packages/checkbox-button';
import CheckboxGroup from '../packages/checkbox-group';
import Select from '../packages/select';
import Option from '../packages/option';
import OptionGroup from '../packages/option-group';
import Cascader from '../packages/cascader';
import CascaderPanel from '../packages/cascader-panel';
import Switch from '../packages/switch';
import Slider from '../packages/slider';
import TimePicker from '../packages/time-picker';
import DatePicker from '../packages/date-picker';
import Upload from '../packages/upload';
import Rate from '../packages/rate';
import ColorPicker from '../packages/color-picker';
import Transfer from '../packages/transfer';
import Form from '../packages/form'
import FormItem from '../packages/form-item'
import Gap from '../packages/gap'
import Search from '../packages/search';

import filterObject from './utils/function/filterObject'
import addUnit from './utils/function/addUnit'
import deepMerge from './utils/function/deepMerge'

const components = [
  Input,
  InputNumber,
  Radio,
  RadioButton,
  RadioGroup,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Select,
  Option,
  OptionGroup,
  Cascader,
  CascaderPanel,
  Switch,
  Slider,
  TimePicker,
  DatePicker,
  Upload,
  Rate,
  ColorPicker,
  Transfer,
  Form,
  FormItem,
  Gap,
  Search,
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
