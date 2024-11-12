<template>
    <div class="book-list-container">
      <h2>图书列表</h2>
      <ul class="book-list">
        <li v-for="book in books" :key="book.id" class="book-item">
          <router-link :to="'/books/' + book.id" class="book-link">{{ book.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>

<script setup lang="ts">

const  books=[{
    id:1,
    name:'第一行代码'
},
{
    id:2,
    name:'JavaScript高级程序设计'
},
{
    id:3,
    name:'JavaScript从入门到精通'
},
{
    id:4,
    name:'JavaScript设计模式与开发实践'
}
]

</script>

<style scoped>
.book-list-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  background-color: #f9f9f9;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.book-list {
  list-style: none;
  padding: 0;
}

.book-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.book-item:last-child {
  border-bottom: none;
}

.book-link {
  color: #4CAF50;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease;
}

.book-link:hover {
  color: #45a049;
}
</style>