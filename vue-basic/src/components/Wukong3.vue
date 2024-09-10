<template>
    <ul class="skills-list">
      <li v-for="skill in skills" :key="skill.id" class="skill-item">
          {{ skill.skill }} -
          <span :class="{ 'is-unlocked': skill.status }">{{ skill.status ? '已解锁' : '未解锁' }}</span>
      </li>
    </ul>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  interface Wukong {
    id: number
    skill: string
    status: boolean
  }
  
  const skills = ref<Wukong[]>([
    { id: 1, skill: '七十二变', status: false },
    { id: 2, skill: '火眼金睛', status: true }, 
    { id: 3, skill: '筋斗云', status: false } 
  ])
  
  </script>
  
  <style scoped>
  .skills-list {
    list-style-type: none;
    padding: 0;
    background-color: #f8f8f8;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    margin: 20px auto;
    overflow: hidden;
  }
  
  .skill-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    border-bottom: 1px solid #eaeaea;
    transition: background-color 0.3s;
  }
  
  .skill-item:hover {
    background-color: #eef;
  }
  
  .skill-name {
    font-size: 16px;
    color: #333;
    font-weight: 500;
  }
  
  .skill-status {
    display: flex;
    align-items: center;
  }
  
  .is-unlocked {
    color: #4caf50;
    font-weight: bold;
  }
  
  
  .skill-item span {
    margin-left: 10px;
    font-weight: bold;
  }
  
  .skill-item:last-child {
    border-bottom: none;
  }
  </style>