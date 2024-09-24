<template>
    <div>
     <form @submit.prevent="submitForm">
        <input type="text" placeholder="请输入用户名" v-model="form.username">
        <input type="text" placeholder="请输入邮箱" v-model="form.email">
        <input type="password" placeholder="请输入密码" v-model="form.password">
        <button type="submit">提交</button>
     </form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';


const form=reactive({
    username:"",
    email:"",
    password:""
})

//定义 emits 事件
const emit= defineEmits<{"submit-form":any}>()

//阻止了表单的默认提交，自定义了表单的提交函数
const submitForm=()=>{
    // console.log("表单提交",form)

    // 子组件通过 emit('submit-form', form) 触发 submit-form 事件，并将表单数据传递给父组件；
    emit("submit-form",form)
}
</script>

<style scoped>

</style>