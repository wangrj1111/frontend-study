<template>
    <div class="hp-container">
      <div class="hp-bar">
        <div class="hp-bar-fill" :style="{ width: percentage + '%' }"></div>
      </div>
      <p class="hp-text">血量：{{ remainingHp }}/{{ totalHP }} ({{ percentage.toFixed(2) }}%)</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  
  // 定义总血量
  const totalHP = ref<number>(100)
  
  // 定义剩余血量
  const remainingHp = ref<number>(80)
  
  // 定义血量百分比
  const percentage = computed(() => {
    return (remainingHp.value / totalHP.value) * 100
  })
  </script>
  <style scoped>
  /* 容器样式 */
  .hp-container {
    font-family: 'Arial', sans-serif;
    color: #333;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 20px;
    text-align: center;
  }
  
  /* 血量文本样式 */
  .hp-text {
    font-size: 18px;
    font-weight: bold;
    color: #555;
  }
  
  /* 血量条样式 */
  .hp-bar {
    width: 100%;
    height: 20px;
    background-color: #ddd;
    border-radius: 10px;
    margin: 10px 0;
    overflow: hidden;
  }
  
  /* 血量条内的填充样式 */
  .hp-bar-fill {
    height: 100%;
    width: 0%; /* 初始宽度为0%，将通过Vue动态更新 */
    background-color: #4CAF50;
    border-radius: 10px;
    transition: width 0.3s ease-in-out;
  }
  </style>