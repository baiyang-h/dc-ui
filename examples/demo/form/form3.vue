<template>
  <div>
    <dc-form
      ref="form"
      v-model="form"
      :option="option"
    >
      <template slot="slot1">
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </template>
      <template slot="slot2">
        <el-form-item label="活动名称" prop="name">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </template>
    </dc-form>
    <div>
      <el-button type="primary" @click="getFieldsValue">获取数据</el-button>
    </div>
  </div>
</template>

<script>
// 自定义组件，1.插槽
export default {
  data() {
    return {
      form: {
        name: 'a',
        region: 'shanghai',
      },
      option: [
        {
          type: 'input',
          key: 'input',
          label: '文本'
        },
        {
          type: 'slot',
          name: 'slot1',
          label: '插槽1'
        },
        {
          type: 'slot',
          name: 'slot2',
          label: '插槽2'
        }
      ]
    }
  },
  methods: {
    getFieldsValue() {
      console.log(this.$refs['form'].getFieldsValue())
    }
  }
}
</script>
