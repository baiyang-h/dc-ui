## 基础用法

```vue
<template>
  <!-- `checked` 为 true 或 false -->
  <dc-checkbox v-model="checked">备选项</dc-checkbox>
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
  <dc-checkbox v-model="checked1" disabled>备选项1</dc-checkbox>
  <dc-checkbox v-model="checked2" disabled>备选项</dc-checkbox>
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
  <dc-checkbox-group v-model="checkList">
    <dc-checkbox label="复选框 A"></dc-checkbox>
    <dc-checkbox label="复选框 B"></dc-checkbox>
    <dc-checkbox label="复选框 C"></dc-checkbox>
    <dc-checkbox label="禁用" disabled></dc-checkbox>
    <dc-checkbox label="选中且禁用" disabled></dc-checkbox>
  </dc-checkbox-group>
</template>
```

## indeterminate 状态

```vue
<template>
  <dc-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</dc-checkbox>
  <div style="margin: 15px 0;"></div>
  <dc-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <dc-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</dc-checkbox>
  </dc-checkbox-group>
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
  <dc-checkbox-group 
    v-model="checkedCities"
    :min="1"
    :max="2">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </dc-checkbox-group>
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
  <dc-checkbox-group v-model="checkbox">
    <dc-checkbox-button label="上海"></dc-checkbox-button>
    <dc-checkbox-button label="北京"></dc-checkbox-button>
    <dc-checkbox-button label="广州"></dc-checkbox-button>
    <dc-checkbox-button label="深圳"></dc-checkbox-button>
  </dc-checkbox-group>
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
<dc-checkbox-group 
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
<dc-radio-group 
  v-model="checkbox" 
  :options="options" 
  mode="button"
  @change="change"
>
</dc-radio-group>

// 默认 不写 为 checkbox
<dc-radio-group 
  v-model="checkbox" 
  :options="options" 
  mode="checkbox"
  @change="change"
>
</dc-radio-group>
```

## 尺寸

size: medium / small / mini

```vue
<template>
  <div>
    <dc-checkbox-group v-model="checkbox1">
      <dc-checkbox-button label="上海"></dc-checkbox-button>
      <dc-checkbox-button label="北京"></dc-checkbox-button>
      <dc-checkbox-button label="广州"></dc-checkbox-button>
      <dc-checkbox-button label="深圳"></dc-checkbox-button>
    </dc-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <dc-checkbox-group v-model="checkbox2" size="medium">
      <dc-checkbox-button label="上海" ></dc-checkbox-button>
      <dc-checkbox-button label="北京"></dc-checkbox-button>
      <dc-checkbox-button label="广州"></dc-checkbox-button>
      <dc-checkbox-button label="深圳"></dc-checkbox-button>
    </dc-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <dc-checkbox-group v-model="checkbox3" size="small">
      <dc-checkbox-button label="上海"></dc-checkbox-button>
      <dc-checkbox-button label="北京" disabled ></dc-checkbox-button>
      <dc-checkbox-button label="广州"></dc-checkbox-button>
      <dc-checkbox-button label="深圳"></dc-checkbox-button>
    </dc-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <dc-checkbox-group v-model="checkbox4" disabled size="mini">
      <dc-checkbox-button label="上海"></dc-checkbox-button>
      <dc-checkbox-button label="北京"></dc-checkbox-button>
      <dc-checkbox-button label="广州"></dc-checkbox-button>
      <dc-checkbox-button label="深圳"></dc-checkbox-button>
    </dc-checkbox-group>
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
    <dc-checkbox v-model="checked1" label="备选项1" border></dc-checkbox>
    <dc-checkbox v-model="checked2" label="备选项2" border></dc-checkbox>
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

