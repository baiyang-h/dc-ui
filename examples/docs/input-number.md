```vue
// 精确2位小数
<jw-input-number
  v-model="num"
  :min="1"
  :max="10"
  label="描述文字"
 	:precision="2"
  @change="handleChange"
></jw-input-number>

// 正整数
<jw-input-number
  v-model="num"
  :min="1"
  :max="10"
  label="描述文字"
 	:precision="0"
  @change="handleChange"
></jw-input-number>

// 不显示按钮，对齐左  默认居中 align="left" center、right
<jw-input-number
  v-model="num"
  :min="1"
  :max="10"
  label="描述文字"
 	:controls="false"
  align="left"
></jw-input-number>
```

