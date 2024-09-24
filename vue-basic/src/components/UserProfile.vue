<template>
    <div class="user-profile">
    <h3>用户信息</h3>
    <h3>姓名：{{user.name}}</h3>
    <h3>年龄：{{ user.age }}</h3>
    <h3>邮箱：{{user.email}}</h3>
    </div>
</template>

<script setup lang="ts">

const props=defineProps<{
    user:{
        name:string;
        age:number;
        email:string;
    }
}>()
</script>

<style scoped>
.user-profile{
    min-width: 300px;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid #ccc;
}

</style>