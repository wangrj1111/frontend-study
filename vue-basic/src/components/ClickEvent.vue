<template>
    <div>
        <h2>当前用户：{{ userName }}</h2>
        <button @click="changeName">变换</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const userName = ref<string>('杨三')
const changeName = () => {
    userName.value = '钻石杨老五'
}
</script>

<style scoped>

</style>