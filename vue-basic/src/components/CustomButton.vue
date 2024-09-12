<template>
    <div>
        <button>{{customAttr}}</button>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

//使用 difineprops 声明自定义变量
defineProps<{
    customAttr:string
}>()
</script>

<style scoped>

</style>