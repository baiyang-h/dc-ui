/**
 * @description 一般我们会在自己编写的 search 或者 form 中通过 config 配置传入的每个item中使用，根据自己设置的类型是custom自定义，我们渲染组件的时候是使用render还是template，
 * @param {Object} moduleItem 一个我们自定义的对象，有组件和组件信息
 * @return 组件
 */
export const templateOrRenderComponent = (moduleItem={}) => {
  let {component, render} = moduleItem;
  if (render) {
    return {
      functional: true,
      render
    };
  } else {
    return component;
  }
}
