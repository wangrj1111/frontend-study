<template>
    <div>
     <h2>文章列表</h2>
     <div style="height: 2000px;">
        <p>这是一篇非常长的文章</p>
     </div>
     <ul>
        <li v-for="article in articles" :key="article.id">
        <router-link :to="'/articles/'+article.id">
            {{article.title}}
        </router-link>
        </li>
     </ul>
    </div>
</template>

<script setup lang="ts">

const articles=[{
    id :1,
    title:'我的博客',
},
{
    id:2,
    title:'我的博客2'

}
]
</script>

<script lang="ts">
export default {
    beforeRouteEnter(to,from,next){
        console.log(to,from)
        console.log('进入该页面的检查')
        next()
    }

}
</script>
