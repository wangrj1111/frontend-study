
<template>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/articles">articles</router-link>
      <router-link to="/user">个人中心</router-link>
    </nav>
    <router-view v-slot="{ Component }" >
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </template>
  
  <style scoped>
  a {
    margin: 10px;
    text-decoration: none;
    color: aqua;
    padding: 5px  10px;
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
  