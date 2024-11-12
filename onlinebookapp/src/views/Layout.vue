<template>
   <nav class="navbar">
     <router-link to="/" class="nav-item">主页</router-link> |
     <router-link to="/Books" class="nav-item">书籍列表</router-link> |
     <router-link to="/Cart" class="nav-item">购物车</router-link>
   </nav>
   <router-view v-slot="{ Component }"  class="content">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
 </template>
 
 <style scoped>
 .navbar {
   background-color: #333;
   color: white;
   display: flex;
   justify-content: center;
   padding: 10px 0;
 }
 
 .nav-item {
   color: white;
   padding: 0 15px;
   text-decoration: none;
   font-size: 16px;
 }
 
 .nav-item:hover {
   background-color: #555;
 }
 
 .nav-item.router-link-active {
   background-color: #555;
 }
 
 .content {
   margin: 20px;
   padding: 20px;
   border: 1px solid #ddd;
   border-radius: 8px;
   box-shadow: 0 2px 5px rgba(0,0,0,0.2);
 }
 .router-link-active {
  background-color: blue;
  color: white;
  font-weight: bold;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
 </style>