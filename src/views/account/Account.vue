<template>
  <el-card>
    <pagination-container :page="page">
      <el-table :data="data" style="width: 100%">
        <el-table-column prop="name" label="昵称"></el-table-column>
        <el-table-column prop="account" label="用户民"></el-table-column>
        <el-table-column prop="roleName" label="角色"></el-table-column>
        <el-table-column prop="createTime" label="添加时间"></el-table-column>
        <el-table-column prop="updateTime" label="最后一次登录时间"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <router-link to="/" :scope="scope">详情</router-link>
          </template>
        </el-table-column>
      </el-table>
    </pagination-container>
  </el-card>
</template>

<script>
import { accountList } from '../../api'
import PaginationContainer from '../../components/PaginationContainer'
export default {
  components: {
    PaginationContainer
  },
  data(){
    return {
      page: {
        size: 10,
        current: 1,
        total: 200
      },
      data: []
    }
  },
  async mounted() {
    let ret = await accountList({current: 1, size: 10})
    this.data = ret.records
    this.page.total = ret.total
  }
}
</script>

<style>

</style>