<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';


const data=ref<string|null>(null);
const loading =ref(false);

//模拟异步请求
const fetchData =async()=>{
    loading.value=true;
    //模拟2s延迟
    await new Promise((resolve)=>setTimeout(resolve,2000))
    data.value="加载完成";
    loading.value=false;
}

//组件挂载的生命周期
onMounted(()=>{
    console.log("组件挂载，开始请求数据....")
    fetchData();
})

//组件卸载的生命周期，执行清空操作
onUnmounted(()=>{
    console.log("组件卸载，需要清空缓存")
})
</script>

<style scoped>

</style>