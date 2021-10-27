## 基础用法

## 有禁用项

## 禁用状态

## 可清空单选

## 基础多选

## 自定义模板

## 分组

## 可搜索

## 创建条目

## 可配置方式

### 默认

```vue
<template>
  <jw-select
    v-model="value"
    :options="options"
    @change="change"
  >
  </jw-select>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      options: [{
        value: 'Shanghai',
        label: '上海'
      }, {
        value: 'Beijing',
        label: '北京'
      }]
    }
  },
  methods: {
    change(v) {
      console.log(v)
    }
  }
}
</script>
```

### 分组
options: [{value, label}, ...]
```vue
<template>
  <jw-select
    v-model="value"
    :options="options"
    @change="change"
  >
  </jw-select>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      options: [{
        label: '热门城市',
        options: [{
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Beijing',
          label: '北京'
        }]
      }, {
        label: '城市名',
        options: [{
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }, {
          value: 'Dalian',
          label: '大连'
        }]
      }]
    }
  },
  methods: {
    change(v) {
      console.log(v)
    }
  }
}
</script>
```


## Select Attributes

| 属性 | 说明 |
| ---- | ---- |
| options    | 配置项，value、label   |
| width    | 表单控件长度，100、'100'、100%、'auto'   |


