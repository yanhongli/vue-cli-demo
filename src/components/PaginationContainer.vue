<template>
  <div>
    <div style='margin-bottom: 20px;'>
      <slot></slot>
    </div>
    <div>
      <el-pagination
        @size-change="$emit('sizeChange', page)"
        @current-change="$emit('currentChange', page)"
        :current-page="page.current"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="page.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.total"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    page: {
      type: Object,
      required: true
    }
  }
};
</script>