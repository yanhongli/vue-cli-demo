<template>
  <el-date-picker
    v-model="value"
    align="right"
    type="date"
    placeholder="选择日期"
    :picker-options="pickerOptions"
    @change="$emit('update:date', value)"
  ></el-date-picker>
</template>
<script>
export default {
  props: ['date'],
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value: this.date
    };
  }
};
</script>