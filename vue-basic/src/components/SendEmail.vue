<template>
    <div>
    <EmailForm @submit-form="handleSumbit"/>
    <p v-if="submitData">邮件信息：{{submitData}}</p>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import EmailForm from './EmailForm.vue';
import axios from 'axios';

// const myEmail=ref({
//     useremail:"2531639447@qq.com",
//     title:"vue-basic学习",
//     context:"父子组件传递信息"
// })

//定义表单提交的数据对象
const submitData=ref(null)

//处理子组件传递的数据
const handleSumbit =(data:any)=>{
    submitData.value=data;
    axios.post("http://localhost:8080/mail",submitData.value).then((res)=>{
        console.log("邮件已发送")
    })
}
</script>

<style scoped>
/* 容器样式 */
div {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif; /* 设置字体 */
}

/* 提交数据的段落样式 */
p {
    color: #333;
    font-size: 16px;
    line-height: 1.5;
    background-color: #fff;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-top: 20px; /* 与容器顶部的间距 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影 */
    transition: transform 0.3s ease; /* 添加过渡效果 */
}

p:hover {
    transform: translateY(-5px); /* 鼠标悬停时上移 */
}

p:active {
    transform: translateY(0); /* 鼠标点击时回到原位 */
}

/* 响应式设计 */
@media (max-width: 768px) {
    div {
        margin: 10px;
        padding: 10px;
    }
    p {
        font-size: 14px;
        padding: 10px;
    }
}
</style>