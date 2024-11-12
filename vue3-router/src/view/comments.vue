<template>
    <div>
      <h2>评论</h2>
      <ul>
        <li v-for="c in comment?.contents" :key="c.id">
          {{ c.content }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const articleId = route.params.id as string;
  
  const comments = [
    {
      id: 1,
      contents: [
        {
          id: 1,
          content: '文章1评论内容1'
        },
        {
          id: 2,
          content: '文章1评论内容2'
        },
        {
          id: 3,
          content: '文章1评论内容3'
        }
      ]
    },
    {
      id: 2,
      contents: [
        {
          id: 1,
          content: '文章2评论内容1'
        },
        {
          id: 2,
          content: '文章2评论内容2'
        },
        {
          id: 3,
          content: '文章2评论内容3'
        }
      ]
    }
  ];
  
  // 查询id为 articleId 的评论
  const comment = comments.find((a) => a.id === Number(articleId));
  </script>
  
  <style scoped>
  /* 可以在这里添加样式 */
  </style>