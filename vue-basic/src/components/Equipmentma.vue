<template>
    <div>
      <h1>装备管理</h1>
      <form @submit.prevent="addEquip">
        <input type="text" v-model="equip.name" placeholder="装备名称" />
        <button type="submit">添加装备</button>
      </form>
      <ul>
        <li v-for="equipment in equipments" :key="equipment.id">
          {{ equipment.name }}
          <button @click="removeEquip(equipment.id)">删除</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  // 定义装备
  interface Equip {
    id: number;
    name: string;
  }
  
  // 装备库
  const equipments = ref<Equip[]>([]);
  
  // 定义单个装备
  const equip = ref<Equip>({ id: 0, name: '' });
  
  // 添加装备
  const addEquip = () => {
    if (equip.value.name.trim()) {
      equip.value.id = equipments.value.length+1; 
      equipments.value.push(equip.value);
      equip.value = { id: 0, name: '' }; // 清空输入框
    }
  };

// 删除装备
const removeEquip = (id: number) => {
  equipments.value = equipments.value.filter(equipment => equipment.id !== id);
};
  
  </script>
  
  <style scoped>
  /* 容器样式 */
  div {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  /* 标题样式 */
  h1 {
    text-align: center;
    color: #333;
  }
  
  /* 表单样式 */
  form {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  /* 输入框样式 */
  input[type="text"] {
    flex-grow: 1;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
  
  /* 按钮样式 */
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  /* 列表样式 */
  ul {
    list-style: none;
    padding: 0;
  }
  
  /* 列表项样式 */
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  
  li:last-child {
    border-bottom: none;
  }
  
  li:hover {
    background-color: #f5f5f5;
  }
  
  /* 删除按钮样式 */
  .delete-button {
    background-color: #ff4d4d;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 14px;
  }
  
  .delete-button:hover {
    background-color: #cc0000;
  }
  </style>