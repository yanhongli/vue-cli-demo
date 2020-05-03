<template>
  <div class="host"></div>
</template>
<script>
import echarts from "echarts";
export default {
  props: ["data"],
  data() {
    return {
      chart: null
    }
  },
  methods: {
    draw() {
      let option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true
          }
        ]
      };
      let line = echarts.init(this.$el);
      line.setOption(option);
      this.chart = line;
    }
  },
  mounted() {
    this.resizeHandle = () => {
      this.chart.resize()
    };
    this.draw();
    window.addEventListener('resize', this.resizeHandle)
    this.$once('hook:beforeDestroy', () => {
      console.log('hook:beforedestroy')
      window.removeEventListener('resize', this.resizeHandle)
    })
  },
  watch: {
    data: "draw"
  }
};
</script>
<style lang="scss" scoped>
.host {
  height: 500px;
}
</style>