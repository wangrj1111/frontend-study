<template>
    <div>
        <!-- <h3>邮件信息</h3>
        <h3>收件人邮箱：{{email.useremail}}</h3>
        <h3>邮件主题：{{ email.title }}</h3>
        <h3>邮件内容：{{email.context}}</h3> -->

        <form @submit.prevent="submitForm">
            <input type="email" placeholder="收件人邮箱" v-model="EmailForm.useremail">
            <input type="text" placeholder="邮件主题" v-model="EmailForm.title">
            <input type="text" placeholder="邮件内容" v-model="EmailForm.context">
            <button type="submit">提交</button>
         </form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';


// const props=defineProps<{
//     email:{
//     useremail:string,
//     title:string,
//     context:string,
// }
// }>()

const EmailForm=reactive( {
    useremail:"",
    title:"",
    context:""
})
const emit= defineEmits<{"submit-form":any}>()
const submitForm=()=>{
    emit("submit-form",EmailForm)
}
</script>

<style scoped>
/* 容器样式 */
div {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
}

/* 标题样式 */
h3 {
    color: #333;
    margin-bottom: 10px;
    text-align: center; /* 居中对齐 */
}

/* 输入框和按钮样式 */
input[type="email"],
input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
    transition: border-color 0.3s ease; /* 过渡效果 */
}

input[type="email"]:focus,
input[type="text"]:focus {
    border-color: #007BFF; /* 聚焦时的边框颜色 */
    outline: none; /* 移除默认的聚焦轮廓 */
}

button {
    width: 100%;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.1s ease; /* 添加变换过渡 */
    margin-top: 10px; /* 与输入框的间距 */
}

button:hover {
    background-color: #0056b3;
}

button:focus {
    outline: none; /* 移除默认的聚焦轮廓 */
    transform: scale(1.02); /* 聚焦时放大 */
}

button:active {
    background-color: #003d82; /* 点击时的颜色 */
    transform: scale(0.98); /* 点击时缩小 */
}

/* 表单样式 */
form {
    display: flex;
    flex-direction: column;
    gap: 10px; /* 使用gap替代margin-bottom */
}

/* 邮件信息和表单之间的间距 */
h3 + form {
    margin-top: 20px;
}

/* 响应式设计 */
@media (max-width: 768px) {
    div {
        margin: 10px;
    }
}
</style>