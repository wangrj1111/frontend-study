<template>
    <div>
<!-- 绑定isDisabled属性 -->
     <button :disabled="isDisabled">点击</button>
     <img :src="URL"/>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const isDisabled=ref<boolean>(false)
const URL=ref<string>('https://tse4-mm.cn.bing.net/th/id/OIP-C.6ui-HETN38ItODNSjpy9lgHaQd?rs=1&pid=ImgDetMain')
</script>

