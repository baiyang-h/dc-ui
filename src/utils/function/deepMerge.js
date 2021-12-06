import deepClone from "./deepClone";

/**
 * JS对象深度合并（数组、对象）
 * @param target 目标对象
 * @param source 要合过来的对象
 * @param arrayMerge 当如果是两个数组中的对象要深度合并的情况，默认两个数组直接赋值，如想合并则传入arrayMerge为true
 * @return {boolean|*|*[]} 生成新对象
 */
function deepMerge(target = {}, source = {}, arrayMerge=false) {
  target = deepClone(target);
  if (typeof target !== 'object' || typeof source !== 'object') return false;
  for (var prop in source) {
    // eslint-disable-next-line no-prototype-builtins
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if (typeof target[prop] !== 'object') {
        target[prop] = source[prop];
      } else {
        if (typeof source[prop] !== 'object') {
          target[prop] = source[prop];
        } else {
          if (target[prop].concat && source[prop].concat) { // 都是数组
            // 考虑到我不想合并数组，直接直接赋值，默认直接赋值
            if(arrayMerge) {
              target[prop] = target[prop].concat(source[prop]);
            } else {
              target[prop] = source[prop];
            }
          } else { // 都是对象
            target[prop] = deepMerge(target[prop], source[prop]);
          }
        }
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}

export default deepMerge;
