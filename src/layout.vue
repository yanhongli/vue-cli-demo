<template>
  <el-container>
    <el-header>{{userInfo.name}}</el-header>
    <el-container>
      <el-aside>
        <el-menu>
          <template v-for="(menu, index) in menus">
            <template v-if='menu.children && menu.children.length'>
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
  data() {
    return {
      icons: ['el-icon-location','el-icon-menu','el-icon-document','el-icon-setting','el-icon-s-custom','el-icon-tickets','el-icon-document-checked']
    }
  },
  computed: {
    ...mapGetters({ menus: "GET_ROUTES", userInfo: "GET_USERINFO" })
  },
  mounted() {
    
  }
};
</script>

<style>
</style>
