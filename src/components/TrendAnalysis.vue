<template>
  <div>
    <el-row class="title">趋势分析</el-row>
    <el-row class="condition" type="flex" justify="space-between">
      <div>
        <label>指标：</label>
        <el-select v-model="indicator" placeholder="请选择">
          <el-option
            v-for="item in indicatorSelects"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <customer-date-picker :date.sync="date"></customer-date-picker>
    </el-row>
    <el-row>
      <line-chart></line-chart>
    </el-row>
  </div>
</template>
<script>
import LineChart from '../components/charts/LineChart'
import DatePicker from './DatePicker'
export default {
  components: {
    LineChart,
    CustomerDatePicker: DatePicker
  },
  data() {
    return {
      indicator: 0,
      indicatorSelects: [
        {
          label: "浏览量",
          value: 0
        },
        {
          label: "访客量",
          value: 1
        },
        {
          label: "转化量",
          value: 2
        },
        {
          label: "转化率",
          value: 3
        },
        {
          label: "平均停留时长",
          value: 4
        },
        {
          label: "跳出率",
          value: 5
        }
      ],
      date: new Date()
    };
  },
  watch: {
    date: function(v, o) {
      console.log(v, o)
    }
  }
};
</script>
<style lang="scss" scoped>
    .title {
        border-bottom: 1px solid #dbdbdb;
        padding-bottom: 20px;
        margin-bottom: 20px;
    }
</style>