<template>
  <div>
    <el-row class="collapse-title" :class="{expand: sharePointsExpand}" type="flex" justify="space-between">
      <span>亮点功能推荐</span>
      <span
        class="cursor-pointer"
        @click="sharePointsExpand=!sharePointsExpand"
      >{{sharePointsExpand ? '收起' : '展开'}}</span>
    </el-row>
    <transition name="collapse">
      <el-row v-if="sharePointsExpand" class="collapse-area" type="flex" justify="space-between">
        <div class="shine-point">
          <div class="title">用户行为轨迹</div>
          <el-row class="preview-contain" type="flex" justify="center" align="middle">
            <img src="../assets/trace.gif" class="preview" />
          </el-row>
        </div>
        <div class="shine-point">
          <div class="title">页面质量检测</div>
          <el-row class="preview-contain" type="flex" justify="center" align="middle">
            <img src="../assets/source-detail.png" class="preview" />
          </el-row>
        </div>
        <div class="shine-point">
          <div class="title">转化漏斗</div>
          <el-row class="preview-contain" type="flex" justify="center" align="middle">
            <img src="../assets/funnel.png" class="preview" />
          </el-row>
        </div>
      </el-row>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sharePointsExpand: true
    };
  }
};
</script>
<style lang="scss" scoped>
.collapse-title {
  font-size: 14px;
  border-bottom: 1px solid transparent;
  &.expand {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom-color: #dbdbdb;
  }
}
.collapse-area {
  transform-origin: top;
}
.collapse-enter-active,
.collapse-leave-active {
  transition: all 0.5s ease;
}
.collapse-enter,
.collapse-leave-to {
  transform: scaleY(0);
}
.collapse-enter-to,
.collapse-leave {
  transform: scaleY(1);
}
.shine-point {
  .title {
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    margin-bottom: 14px;
    color: #858585;
  }
}
.preview-contain {
  width: 338px;
  height: 324px;
  background: #fefefe;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.06);
  padding: 0 13px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.6);
  }
}
.preview {
  width: 312px;
}
</style>