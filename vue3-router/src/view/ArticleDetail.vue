<template>
    <div>
      <h2>{{ article?.title }}</h2>
      <h2>{{ article?.content }}</h2>
      <div style="height:1500px">
        <p>这是一篇非常长的文章</p>
      </div>
      <!-- 使用 router-link 来导航到评论页面 -->
      <router-link :to="'/articles/' + article?.id + '/comments'">查看评论</router-link>
      <!-- 使用 router-view 来渲染子路由视图 -->
      <router-view></router-view>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const articleId = route.params.id as string;
  
  const articles = [
    {
      id: 1,
      title: '我的博客',
      content: '我的博客内容'
    },
    {
      id: 2,
      title: '我的博客2',
      content: '我的博客内容2'
    }
  ];
  
  // 查询id为 articleId 的文章
  const article = articles.find((a) => a.id === Number(articleId));
  </script>
  
  <style scoped>
  /* 可以在这里添加样式 */
  </style>