<template>
    <div>
        <p>年薪：{{ yearlySalary }}</p>          
    </div>
</template>

<script setup lang="ts">
import { ref , computed } from 'vue'

// 定义月薪状态
const monthlySalary = ref<number>(5000)

// 计算年薪，并使用TypeScript 显式声明返回值类型
const yearlySalary = computed<number>(() => {
    return monthlySalary.value * 12
})

</script>

<style scoped>

</style>