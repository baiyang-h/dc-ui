import validation from './validate'

/**
 * @description 添加单位，如果有%，px等单位结尾或者值为auto，直接返回，否则加上px单位结尾
 * @param { String | Number } value 希望传入的是 100 或 100px 等
 * @param { String } unit 你想设置的单位，默认 px
 * @return xxpx、xx%、'auto'
 */
export default function addUnit(value='auto', unit='px') {
  value = String(value);
  // 验证规则中的number判断是否为数值
  return validation.number(value) ? `${value}${unit}` : value;
}
