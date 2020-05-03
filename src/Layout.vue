<template>
  <el-container>
    <top-header :userInfo="userInfo"></top-header>
    <el-container>
      <left-menu :menus="menus"></left-menu>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer class="footer">
      <el-row type="flex" align="middle" style="height: 100%;" justify="center">2020-2030&copy;liyanhong</el-row>
    </el-footer>
  </el-container>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "./components/Header"
import Menu from "./components/Menu"
export default {
  components: {
    topHeader: Header,
    leftMenu: Menu
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({ menus: "GET_ROUTES", userInfo: "GET_USERINFO" })
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.main {
  overflow: auto;
  min-height: calc(100vh - 120px)
}
.footer {
  border-top: 1px solid #dbdbdb;
  background: white;
}
</style>
