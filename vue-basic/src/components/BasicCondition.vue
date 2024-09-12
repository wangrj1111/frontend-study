<template>
    <div>
        <p v-if="isVisible">这个文本是可见的。</p>
        <p v-else>这个文本是隐藏的。</p>
        <button @click="toggleVisibility">切换显示状态</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 定义一个布尔状态来控制显示
const isVisible = ref<boolean>(true)

// 定义切换显示状态的方法
const toggleVisibility = (): void => {
    isVisible.value = !isVisible.value
}
</script>

<style scoped>

</style>