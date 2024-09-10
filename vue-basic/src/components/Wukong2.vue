<template>
    <div  class="status-container">
    <h2>当前状态：{{currentStatus}}</h2>
    <button @click="changeStatus">切换状态</button>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const currentStatus =ref<string>('齐天大圣')
const nextStatus =ref<string>('齐天大圣')
const lastStatus = ref<string>('斗战胜佛')
const status=ref<boolean>(true)
const changeStatus =() =>{
    status.value=!status.value
    currentStatus.value=(status.value==true)?nextStatus.value:lastStatus.value;
}
</script>

<style scoped>
.status-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    background-color: #f0f0f0;
}

h2 {
    margin: 0;
    font-size: 24px;
    color: #333;
}

button {
    padding: 10px 20px;
    margin-top: 20px;
    font-size: 16px;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}
</style>