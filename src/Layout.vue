<template>
  <el-container>
    <el-header style="border-bottom: 1px solid #dbdbdb;">
      <el-row type="flex" justify="space-between" style="height: 100%">
        <el-row type="flex" align="middle">
          <span class="logo"></span>
        </el-row>
        <el-row type="flex" align="middle">
          <el-input place-holder="请输入搜索内容" class="mr-10" suffix-icon="el-icon-search"></el-input>
          <el-dropdown>
            <el-row type="flex" align="middle" style="width: 80px;">
              <img :src="userInfo.avatar" class="resposive-img mr-10" height="30" />
              <a>{{userInfo.name}}</a>
            </el-row>

            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="/">设置</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/">退出</router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-row>
    </el-header>
    <el-container>
      <el-aside>
        <el-menu>
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
      icons: [
        "el-icon-location",
        "el-icon-menu",
        "el-icon-document",
        "el-icon-setting",
        "el-icon-s-custom",
        "el-icon-tickets",
        "el-icon-document-checked"
      ]
    };
  },
  computed: {
    ...mapGetters({ menus: "GET_ROUTES", userInfo: "GET_USERINFO" })
  },
  mounted() {}
};
</script>

<style>
</style>
