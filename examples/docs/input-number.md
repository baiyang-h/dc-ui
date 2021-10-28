```vue
// 精确2位小数
<dc-input-number
  v-model="num"
  :min="1"
  :max="10"
  label="描述文字"
 	:precision="2"
  @change="handleChange"
></dc-input-number>

// 正整数
<dc-input-number
  v-model="num"
  :min="1"
  :max="10"
  label="描述文字"
 	:precision="0"
  @change="handleChange"
></dc-input-number>

// 不显示按钮，对齐左  默认居中 align="left" center、right
<dc-input-number
  v-model="num"
  :min="1"
  :max="10"
  label="描述文字"
 	:controls="false"
  align="left"
></dc-input-number>
```


## InputNumber Attributes

| 属性 | 说明 |
| ---- | ---- |
| v-model    |    |
| align    |  当controls=false时，按钮不显示，InputNumber输入框文本内容位置显示   |
| width    |  表单控件长度，100、'100'、100%、'auto' （默认180px）   |

