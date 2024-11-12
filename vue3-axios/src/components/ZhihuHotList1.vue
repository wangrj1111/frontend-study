<template>
    <div>
        <h2>知乎热榜</h2>
        <button @click="addNewHotItem">添加热榜数据</button>
        <ul>
            <li v-for="item in pagedHotList" :key="item.id" >
                <img :src="item.img" alt="image" />
                <h3>{{ item.title }}</h3>
                <p>{{ item.excerpt }}</p>
                <P>热度：{{ item.hotIndex }}</P>
                <!-- <a :href="item.url" target="_blank" >查看详情</a> -->
                 <button @click="updateOldHotItem(item.id)">更新</button>
                 <button @click="removeHotItem(item.id)">删除</button>

                <hr />
            </li>
        </ul>

        <button @click="prevPage" :disabled="currentPage === 1">上一页</button>
        <button @click="nextPage" :disabled="currentPage === totalPages">下一页</button>

    </div>
</template>

<script setup lang="ts">

import { computed, onMounted, ref } from 'vue';

import {FetchHotList , addHotItem , updateHotItem , deleteHotItem} from '../api/zhihuApi'

import type { HotItem } from '../types/zhihu';

const hotList = ref<HotItem[]>([]);
const currentPage = ref(1);
const pageSize = ref(2);

const fetchList = async () => {
    const res = await FetchHotList();
    console.log(res.data.data);
    
    hotList.value = res.data.data;
};


// 添加热榜数据
const addNewHotItem = async () => {
    const newItem = {
        title:"新的热搜数据",
        excerpt: "这是一个新的添加热榜项"
    };
    const res = await addHotItem(newItem);
    console.log(res.data.messsage);
    hotList.value.unshift(res.data.data)
};

//更新数据

const updateOldHotItem = async(id:number) => {
    const updatedItem = {
        title:"更新后的热榜标题",
        excerpt:"更新后的热榜简介"
    }
    const res = await updateHotItem(id,updatedItem);
    console.log(res.data.messsage);

    //更新本地数据
    //从数组找到指定数据的元素索引
    const itemIndex = hotList.value.findIndex((item) => item.id === id);
    if(itemIndex !== -1){
        hotList.value[itemIndex].title = updatedItem.title;
        hotList.value[itemIndex].excerpt = updatedItem.excerpt;

    }
}
//删除数据

const removeHotItem = async(id: number) => {
    const res = await deleteHotItem(id);
    console.log(res.data.messsage);
    //从本地移除
    hotList.value = hotList.value.filter((item) => item.id !== id);
};

// 
const pagedHotList = computed(() => 
    hotList.value.slice(
        (currentPage.value - 1) * pageSize.value,
        currentPage.value * pageSize.value
    )
)

// 计算属性: 计算总页数
const totalPages = computed(() => 
    Math.ceil(hotList.value.length / pageSize.value)
);

const nextPage = () => {
    // 还不是最后一页
    if(currentPage.value < totalPages.value) {
        currentPage.value += 1;
    }
};

const prevPage = () => {
    if(currentPage.value > 1){
        currentPage.value -= 1;
    }
}; 





onMounted(fetchList);

</script>

<style scoped>

</style>