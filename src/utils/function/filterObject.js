/**
 * @description 用于删除对象中的相关键和值，在对于$listeners外部传入事件集中删除组件内部已经定义的事件名，以防重复触发，比如父组件传入input事件，子组件内也定义了input
 * @param {Object} obj
 * @param {Array | String } keys
 * @return {Object} obj
 * @example $listeners为 {input(){}, change(){}, blur(){}} 删除单个 filterObject($listeners, 'input')，删除多个 filterObject($listeners, ['input', 'change'])
 */
export default function filterObject(obj={}, keys) {
  const _obj = Object.assign({}, obj);   // 做一层浅拷贝，不影响原对象
  // 这里还可以思考对象的原型链上的key是否有影响
  if(keys instanceof Array) {
    keys.forEach((key) => {
      if(key in _obj) delete _obj[key]
    })
  } else {
    // 单个 某个键
    if(keys in _obj) delete _obj[keys]
  }

  return _obj
}
