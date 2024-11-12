<template>
  <nav class="cart-navbar">
    <router-link to="/Cart/ShoppCart" class="nav-link">购物车</router-link>
    <router-link to="/Cart/Order" class="nav-link">订单</router-link>
  </nav>
  <router-view v-slot="{ Component }"  class="content">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
// 脚本部分保持不变
</script>

<style scoped>
.cart-navbar {
  background-color: #333;
  color: white;
  display: flex;
  justify-content: center;
  padding: 10px 0;
}

.nav-link {
  color: white;
  padding: 0 15px;
  text-decoration: none;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.nav-link:hover, .nav-link.router-link-active {
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