<template>
  <el-aside class="aside-menu">
    <el-menu class="menu-container" :collapse="isCollapse">
      <template v-for="(menu, index) in menus">
        <template v-if="menu.children && menu.children.length">
          <el-submenu :index="menu.id | toString" :key="menu.id">
            <template slot="title">
              <i :class="[icons[index]]"></i>
              <span>{{menu.name}}</span>
            </template>
            <template v-if="menu.children && menu.children.length">
              <el-menu-item
                :index="childMenu.id | toString"
                v-for="childMenu in menu.children"
                :key="childMenu.id"
              >
                <span>{{childMenu.name}}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :key="menu.id">
            <i :class="[icons[index]]"></i>
            <span slot="title">{{menu.name}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </el-aside>
</template>
<script>
export default {
  props: {
    menus: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      icons: [
        "el-icon-location",
        "el-icon-menu",
        "el-icon-document",
        "el-icon-setting",
        "el-icon-s-custom",
        "el-icon-tickets",
        "el-icon-document-checked"
      ],
      isCollapse: true
    };
  }
};
</script>
<style lang="scss" scoped>
.aside-menu {
  overflow: auto;
  width: 66px !important;
  min-height: calc(100vh - 120px);
  .menu-container {
    height: 100%;
  }
}
</style>