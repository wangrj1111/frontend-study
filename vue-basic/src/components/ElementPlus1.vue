<template>
    <el-container>
      <!-- 头部导航栏 -->
      <el-header>
        <el-row>
          <el-col :span="12">
            <h2 style="color: white;">数据统计页面</h2>
          </el-col>
          <el-col :span="12">
            <el-menu
              default-active="1"
              class="el-menu-demo"
              mode="horizontal"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              style="float: right"
            >
              <el-menu-item index="1">首页</el-menu-item>
              <el-menu-item index="2">统计数据</el-menu-item>
              <el-menu-item index="3">用户管理</el-menu-item>
              <el-menu-item index="4">设置</el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-header>
  
      <el-main>
        <!-- 提交表单 -->
        <el-card style="margin-bottom: 20px;">
          <h3 style="text-align: center">添加新用户</h3>
          <el-form :model="newUser" ref="newUserForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="newUser.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="电子邮件" prop="email">
              <el-input v-model="newUser.email" placeholder="请输入电子邮件"></el-input>
            </el-form-item>
            <el-button type="primary" @click="handleSubmit">提交</el-button>
          </el-form>
        </el-card>
  
        <!-- 用户数据表 -->
        <el-table :data="paginatedUsers" style="width: 100%; margin-bottom: 20px">
          <el-table-column prop="id" label="ID" width="50" />
          <el-table-column prop="name" label="姓名" />
          <el-table-column prop="email" label="电子邮件" />
        </el-table>
  
        <!-- 分页器 -->
        <div class="pagination-container">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="totalUsers"
            :page-size="pageSize"
            :current-page="currentPage"
            @current-change="handlePageChange"
          />
        </div>
      </el-main>
    </el-container>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'SimplePaginationWithForm',
    setup() {
      // 模拟用户数据
      const users = ref([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
        { id: 3, name: 'Bob Smith', email: 'bob@example.com' },
        { id: 4, name: 'Alice Johnson', email: 'alice@example.com' },
        { id: 5, name: 'Charlie Brown', email: 'charlie@example.com' },
        { id: 6, name: 'Lucy Van Pelt', email: 'lucy@example.com' },
        { id: 7, name: 'Linus Van Pelt', email: 'linus@example.com' },
        { id: 8, name: 'Snoopy', email: 'snoopy@example.com' },
        { id: 9, name: 'Peppermint Patty', email: 'patty@example.com' },
        { id: 10, name: 'Schroeder', email: 'schroeder@example.com' },
      ]);
  
      // 新用户数据
      const newUser = ref({
        name: '',
        email: ''
      });
  
      // 分页数据
      const currentPage = ref(1);
      const pageSize = ref(5); // 每页显示的数据条数
      const totalUsers = ref(users.value.length);
  
      // 当前分页的用户数据
      const paginatedUsers = ref(users.value.slice(0, pageSize.value));
  
      // 分页处理
      const handlePageChange = (page: number) => {
        currentPage.value = page;
        const start = (page - 1) * pageSize.value;
        const end = start + pageSize.value;
        paginatedUsers.value = users.value.slice(start, end);
      };
  
      // 提交表单
      const handleSubmit = () => {
        if (newUser.value.name && newUser.value.email) {
          // 为新用户生成 ID
          const newId = users.value.length + 1;
          users.value.push({ id: newId, ...newUser.value });
          totalUsers.value = users.value.length;
          handlePageChange(currentPage.value); // 更新分页数据
          // 清空表单
          newUser.value.name = '';
          newUser.value.email = '';
        }
      };
  
      return {
        paginatedUsers,
        currentPage,
        pageSize,
        totalUsers,
        handlePageChange,
        newUser,
        handleSubmit,
      };
    },
  });
  </script>
  
  <style scoped>
  h2 {
    text-align: left;
    margin: 0;
    padding-left: 20px;
    line-height: 60px;
  }
  
  .el-header {
    background-color: #545c64;
    color: white;
    height: 60px;
    line-height: 60px;
  }
  
  .el-menu-demo {
    float: right;
    line-height: 60px;
  }
  
  .pagination-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .demo-ruleForm {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  
  .el-card {
    padding: 20px;
    background: #f9f9f9;
  }
  </style>
  