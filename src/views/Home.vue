<template>
  <div>
    <el-card class="mb-20">
      <shine-points></shine-points>
    </el-card>
    <el-card class="mb-20">
      <today-summary></today-summary>
    </el-card>
    <el-card>
      <trend-analysis></trend-analysis>
    </el-card>
  </div>
</template>

<script>
import ShinePoints from "../components/ShinePoints"
import TodaySummary from "../components/TodaySummary"
import TrendAnalysis from "../components/TrendAnalysis"
export default {
  components: {
    ShinePoints,
    TodaySummary,
    TrendAnalysis
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
