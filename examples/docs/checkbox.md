## 基础用法

```vue
<template>
  <!-- `checked` 为 true 或 false -->
  <jw-checkbox v-model="checked">备选项</jw-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked: true
      };
    }
  };
</script>
```



## 禁用状态

```vue
<template>
  <jw-checkbox v-model="checked1" disabled>备选项1</jw-checkbox>
  <jw-checkbox v-model="checked2" disabled>备选项</jw-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: true
      };
    }
  };
</script>
```



## 多选框组

```vue
<template>
  <jw-checkbox-group v-model="checkList">
    <jw-checkbox label="复选框 A"></jw-checkbox>
    <jw-checkbox label="复选框 B"></jw-checkbox>
    <jw-checkbox label="复选框 C"></jw-checkbox>
    <jw-checkbox label="禁用" disabled></jw-checkbox>
    <jw-checkbox label="选中且禁用" disabled></jw-checkbox>
  </jw-checkbox-group>
</template>
```

## indeterminate 状态

```vue
<template>
  <jw-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</jw-checkbox>
  <div style="margin: 15px 0;"></div>
  <jw-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <jw-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</jw-checkbox>
  </jw-checkbox-group>
</template>
<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data() {
      return {
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true
      };
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  };
</script>
```

## 可选项目数量的限制

```vue
<template>
  <jw-checkbox-group 
    v-model="checkedCities"
    :min="1"
    :max="2">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </jw-checkbox-group>
</template>
<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data() {
      return {
        checkedCities: ['上海', '北京'],
        cities: cityOptions
      };
    }
  };
</script>
```


## 按钮样式

```vue
<template>
  <jw-checkbox-group v-model="checkbox">
    <jw-checkbox-button label="上海"></jw-checkbox-button>
    <jw-checkbox-button label="北京"></jw-checkbox-button>
    <jw-checkbox-button label="广州"></jw-checkbox-button>
    <jw-checkbox-button label="深圳"></jw-checkbox-button>
  </jw-checkbox-group>
</template>

<script>
  export default {
    data () {
      return {
        checkbox: ['上海', '广州'],
      };
    }
  }
</script>
```

## 按钮样式配置方式

```vue
<jw-checkbox-group 
  v-model="checkbox" 
  :options="options" 
  @change="change"
/>
<script>
export default {
  data() {
    return {
      checkbox: [1],
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
<jw-radio-group 
  v-model="checkbox" 
  :options="options" 
  mode="button"
  @change="change"
>
</jw-radio-group>

// 默认 不写 为 checkbox
<jw-radio-group 
  v-model="checkbox" 
  :options="options" 
  mode="checkbox"
  @change="change"
>
</jw-radio-group>
```

## 尺寸

size: medium / small / mini

```vue
<template>
  <div>
    <jw-checkbox-group v-model="checkbox1">
      <jw-checkbox-button label="上海"></jw-checkbox-button>
      <jw-checkbox-button label="北京"></jw-checkbox-button>
      <jw-checkbox-button label="广州"></jw-checkbox-button>
      <jw-checkbox-button label="深圳"></jw-checkbox-button>
    </jw-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <jw-checkbox-group v-model="checkbox2" size="medium">
      <jw-checkbox-button label="上海" ></jw-checkbox-button>
      <jw-checkbox-button label="北京"></jw-checkbox-button>
      <jw-checkbox-button label="广州"></jw-checkbox-button>
      <jw-checkbox-button label="深圳"></jw-checkbox-button>
    </jw-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <jw-checkbox-group v-model="checkbox3" size="small">
      <jw-checkbox-button label="上海"></jw-checkbox-button>
      <jw-checkbox-button label="北京" disabled ></jw-checkbox-button>
      <jw-checkbox-button label="广州"></jw-checkbox-button>
      <jw-checkbox-button label="深圳"></jw-checkbox-button>
    </jw-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <jw-checkbox-group v-model="checkbox4" disabled size="mini">
      <jw-checkbox-button label="上海"></jw-checkbox-button>
      <jw-checkbox-button label="北京"></jw-checkbox-button>
      <jw-checkbox-button label="广州"></jw-checkbox-button>
      <jw-checkbox-button label="深圳"></jw-checkbox-button>
    </jw-checkbox-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        checkbox1: '上海',
        checkbox2: '上海',
        checkbox3: '上海',
        checkbox4: '上海'
      };
    }
  }
</script>
```

## 带有边框

```vue
<template>
  <div>
    <jw-checkbox v-model="checked1" label="备选项1" border></jw-checkbox>
    <jw-checkbox v-model="checked2" label="备选项2" border></jw-checkbox>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        checked1: true,
        checked2: false,
      };
    }
  }
</script>
```



## Checkbox-group Attributes

| 属性 | 说明 |
| ---- | ---- |
| options    | 配置项，value、label   |
| mode    | 组类型，checkbox、button，默认checkbox    |

