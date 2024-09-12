<template>
    <div>
<!-- 绑定isDisabled属性 -->
     <button :disabled="isDisabled">点击</button>
     <!-- 绑定多个属性 -->
     <button v-bind="buttonAttrs">点击我</button>
     <img :src="URL"/>
    </div>
</template>

<script setup lang="ts">
import {ref,reactive} from 'vue'
const isDisabled=ref<boolean>(false)
// 定义一个包含多个属性的对象
const buttonAttrs= reactive({
    disabled:false,
    title:'按钮已禁用'
    ,id:'unique-button',})

const URL=ref<string>('https://tse4-mm.cn.bing.net/th/id/OIP-C.6ui-HETN38ItODNSjpy9lgHaQd?rs=1&pid=ImgDetMain')
</script>

