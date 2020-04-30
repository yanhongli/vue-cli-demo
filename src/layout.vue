<template>
  <el-container>
    <el-header>{{userInfo.name}}</el-header>
    <el-container>
      <el-aside>
        <el-menu>
          <el-submenu :index="menu.id | toString" v-for="menu in menus" :key="menu.id">
            <template slot="title">
              <i class="el-icon-location"></i>
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
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer>this is a footer</el-footer>
  </el-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ menus: "GET_ROUTES", userInfo: "GET_USERINFO" })
  },
  mounted() {
    
  }
};
</script>

<style>
</style>
