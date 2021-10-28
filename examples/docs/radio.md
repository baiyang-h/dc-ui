## 基础用法

```vue
<template>
  <dc-radio v-model="radio" label="1">备选项</dc-radio>
  <dc-radio v-model="radio" label="2">备选项</dc-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>
```



## 禁用状态

```vue
<template>
  <dc-radio disabled v-model="radio" label="禁用">备选项</dc-radio>
  <dc-radio disabled v-model="radio" label="选中且禁用">备选项</dc-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '选中且禁用'
      };
    }
  }
</script>
```



## 单选框组

```vue
<template>
  <dc-radio-group v-model="radio">
    <dc-radio :label="3">备选项</dc-radio>
    <dc-radio :label="6">备选项</dc-radio>
    <dc-radio :label="9">备选项</dc-radio>
  </dc-radio-group>
</template>

<script>
  export default {
    data () {
      return {
        radio: 3
      };
    }
  }
</script>
```



## 按钮样式

```vue
<template>
  <dc-radio-group v-model="radio1">
    <dc-radio-button label="上海"></dc-radio-button>
    <dc-radio-button label="北京"></dc-radio-button>
    <dc-radio-button label="广州"></dc-radio-button>
    <dc-radio-button label="深圳"></dc-radio-button>
  </dc-radio-group>
</template>

<script>
  export default {
    data () {
      return {
        radio1: '上海',
      };
    }
  }
</script>
```



## 按钮样式配置方式

```vue
<template>
  <dc-radio-group
    v-model="radio"
    :options="options"
    @change="change"
  >
  </dc-radio-group>
</template>

<script>
export default {
  data() {
    return {
      radio: '广州',
      options: [
        {value: 1, label: 'aaa' },
        {value: 2, label: 'bbb', disabled: true},
      ]
    }
  },
  methods: {
    change(value) {
      console.log(value);
    }
  }
}
</script>
```

```js
// options 可写成如下
[
  {value: 1, label: 'aaa' },
  {value: 2, label: 'bbb', disabled: true},
]

// 会转为 [{value: 1111, label: 1111 }, {value: 2222, label: 2222 }, {value: 3333, label: 3333 },]
[
  1111,
  2222,
  3333,
]
  
// 会转为 [{value: 1111, label: 1111 }, {value: 1, label: 'aaa' }, {value: 2, label: 2 },]
[
  1111,
  {value: 1, label: 'aaa' },
  {value: 2 },
]
```

### 配置方式按钮样式

如果配置方式想要按钮样式，需要使用 `mode="button"`

```vue
<dc-radio-group 
  v-model="radio" 
  :options="options" 
  mode="button"
  @change="change"
>
</dc-radio-group>

// 默认 不写 为 radio
<dc-radio-group 
  v-model="radio" 
  :options="options" 
  mode="radio"
  @change="change"
>
</dc-radio-group>
```





## 尺寸

size: medium / small / mini

```vue
<template>
  <div>
    <dc-radio-group v-model="radio1">
      <dc-radio-button label="上海"></dc-radio-button>
      <dc-radio-button label="北京"></dc-radio-button>
      <dc-radio-button label="广州"></dc-radio-button>
      <dc-radio-button label="深圳"></dc-radio-button>
    </dc-radio-group>
  </div>
  <div style="margin-top: 20px">
    <dc-radio-group v-model="radio2" size="medium">
      <dc-radio-button label="上海" ></dc-radio-button>
      <dc-radio-button label="北京"></dc-radio-button>
      <dc-radio-button label="广州"></dc-radio-button>
      <dc-radio-button label="深圳"></dc-radio-button>
    </dc-radio-group>
  </div>
  <div style="margin-top: 20px">
    <dc-radio-group v-model="radio3" size="small">
      <dc-radio-button label="上海"></dc-radio-button>
      <dc-radio-button label="北京" disabled ></dc-radio-button>
      <dc-radio-button label="广州"></dc-radio-button>
      <dc-radio-button label="深圳"></dc-radio-button>
    </dc-radio-group>
  </div>
  <div style="margin-top: 20px">
    <dc-radio-group v-model="radio4" disabled size="mini">
      <dc-radio-button label="上海"></dc-radio-button>
      <dc-radio-button label="北京"></dc-radio-button>
      <dc-radio-button label="广州"></dc-radio-button>
      <dc-radio-button label="深圳"></dc-radio-button>
    </dc-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: '上海',
        radio2: '上海',
        radio3: '上海',
        radio4: '上海'
      };
    }
  }
</script>
```



## 带有边框

```vue
<template>
  <div>
    <el-radio v-model="radio1" label="1" border>备选项1</el-radio>
    <el-radio v-model="radio1" label="2" border>备选项2</el-radio>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: '1',
      };
    }
  }
</script>
```


## Radio-group Attributes

| 属性 | 说明 |
| ---- | ---- |
| options    | 配置项，value、label   |
| mode    | 组类型，radio、button，默认radio    |
