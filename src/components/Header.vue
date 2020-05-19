<template>
  <el-header class="header">
    <el-row type="flex" justify="space-between" style="height: 100%">
      <el-row type="flex" align="middle">
        <span class="logo"></span>
      </el-row>
      <el-row type="flex" align="middle">
        <el-input placeholder="请输入搜索内容" class="mr-10" size="small" suffix-icon="el-icon-search"></el-input>
        <el-dropdown>
          <el-row type="flex" align="middle">
            <img :src="userInfo.avatar" class="resposive-img mr-10" height="30" />
            <a>{{userInfo.name}}</a>
          </el-row>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link to="/">设置</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/login">退出</router-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-row>
  </el-header>
</template>
<script>
export default {
  props: {
    userInfo: {
      type: Object,
      required: true,
      validator(v) {
        return v;
      }
    }
  }
};
</script>
<style lang="scss">
.header {
  border-bottom: 1px solid #dbdbdb;
  background: white;
}
</style>