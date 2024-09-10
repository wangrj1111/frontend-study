<template>
    <div class="monkey-king">
    <h1>{{Name}}</h1>
    <h2>{{ title }}</h2>
    <p>{{description}}</p>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const Name=ref<string>('孙悟空')
const title=ref<string>('齐天大圣')
const description=ref<string>('孙悟空是中国古典名著《西游记》中的主要角色之一，由明代作家吴承恩所著。孙悟空是一只从石头中诞生的猴子，因在花果山成为众猴之王而被称为“美猴王”。他具有极高的智慧和武艺，后来拜菩提祖师为师，学得七十二变和筋斗云等神通。')
</script>

<style scoped>
.monkey-king {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
}

.name {
    color: #8b4513;
    font-size: 2.5em;
    text-align: center;
    margin-bottom: 0.5em;
}

.title {
    color: #cd853f;
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 1em;
}

.description {
    color: #333;
    font-size: 1em;
    line-height: 1.6;
    text-align: justify;
}
</style>