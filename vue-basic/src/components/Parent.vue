<template>
    <div>
        <Child @notify="handleNotification" />
        <p>{{ message }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Childfrom'./Child.vue'
// 定义接收的消息状态
const message = ref<string>('等待子组件通知')
// 处理来自子组件的通知
const handleNotification = (msg: string): void => { message.value = msg }
</script>

<style scoped></style>