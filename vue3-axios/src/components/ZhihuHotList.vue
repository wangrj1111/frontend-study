<template>
    <div>
    <h2>知乎热榜</h2>
    <ul >
        <li v-for="item in HotList" :key="item.id">
            <img :src="item.img" alt="image"/>
            <h3>{{item.title}}</h3>
            <p>{{item.excerpt}}</p>
            <p>热度：{{item.hotIndex}}</p>
            <a :href="item.url" target="_blank">查看详情</a>
            <hr></hr>
        </li>
    </ul>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import type { HotItem } from '../types/zhihu';
import { ref,onMounted } from 'vue';

const HotList=ref<HotItem[]>();

const fetchList=async()=>{
    const res =await axios.get('http://api.zhihu.com/hot');
    HotList.value=res.data.data;
}

onMounted(()=>{
    fetchList();
})
</script>

<style scoped>

</style>