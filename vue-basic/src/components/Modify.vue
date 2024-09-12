<template>
    <div>
        <input v-model.lazy="name" placeholder="请输入姓名" />
        <p>您输入的姓名是：{{ name }}</p>
        <input v-model.number="age" type="number" placeholder="请输入年龄"/>
        <p>您的年龄是：{{age}}</p>
        <input v-model.trim="username"placeholder="请输入用户名"/>
        <p>您的用户名是：{{username}}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 定义姓名的状态
const name = ref<string>('')// 初始值为空字符串

// 定义年龄的状态
const age=ref<number|null>(null)

// 定义用户名的状态
const username=ref<string>('')// 初始值为空字符串
</script>

<style scoped></style>