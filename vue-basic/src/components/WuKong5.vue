<template>
    <div>
    基础攻击力：
    <input v-model="baseAttcak" type="number"/>
    </div>
    <div>
        装备加成：
        <input v-model="gearBonus" type="number"/>
    </div>
    <p>总攻击力：{{totalAttack}}</p>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const baseAttcak=ref<number>(50)
const gearBonus=ref<number>(20)
const totalAttack=computed(()=>baseAttcak.value+gearBonus.value)
</script>


<style scoped>
/* 容器样式 */
div {
    margin-bottom: 10px; /* 为每个输入框之间添加一些空间 */
    padding: 10px; /* 内边距 */
    background-color: #f9f9f9; /* 浅灰色背景 */
    border-radius: 5px; /* 圆角边框 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 轻微的阴影效果 */
}

/* 输入框样式 */
input[type="number"] {
    width: 100%; /* 输入框宽度占满容器 */
    padding: 8px; /* 内边距 */
    border: 1px solid #ccc; /* 边框颜色 */
    border-radius: 4px; /* 边框圆角 */
    font-size: 16px; /* 字体大小 */
}

/* 段落样式 */
p {
    font-size: 18px; /* 字体大小 */
    color: #333; /* 字体颜色 */
    margin-top: 20px; /* 与上一个元素的间距 */
}

/* 响应式设计：当屏幕宽度小于600px时，调整样式 */
@media (max-width: 600px) {
    input[type="number"] {
        font-size: 14px; /* 在小屏幕上减小字体大小 */
    }
    p {
        font-size: 16px; /* 在小屏幕上减小字体大小 */
    }
}
</style>