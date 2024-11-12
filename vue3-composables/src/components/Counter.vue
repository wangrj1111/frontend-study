<template>
    <div>
      <p>当计算器的值：{{ count }}</p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useCounter } from '../composables/useCounter';
  const { count, increment, decrement } = useCounter(10);
  </script>
  
  <style scoped>
  </style>