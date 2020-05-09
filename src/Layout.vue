<template>
  <el-container>
    <top-header :userInfo="userInfo"></top-header>
    <el-container>
      <left-menu :menus="menus"></left-menu>
      <el-main class="main">
        <!-- <transition name="slide"> -->
          <router-view></router-view>
        <!-- </transition>         -->
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
.slide-enter-active{
  transition: all 0.5s ease;
}
.slide-leave-active {
  transition: all 0.5s ease;
}
.slide-enter{
  transform: translateX(100%);
  opacity: 0.5;
} 
.slide-leave {
  transform: translateX(100%);
  opacity: 1;
}
.slide-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0.5;
}
</style>
