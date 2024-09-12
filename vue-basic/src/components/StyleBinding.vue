<template>
    <div>
      <p :style="paragraphStyle">这是一段文字</p>
      <button @click="toggleStyle">切换样式</button>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const isBold=ref<boolean>(false)
  const paragraphStyle=ref<{
    fontWeight:string;
    color:string;
  }>({
    fontWeight:'normal',
    color:'black'
  })

  //切换样式函数
  const toggleStyle= () =>{
    isBold.value=!isBold.value
    paragraphStyle.value={
      fontWeight:isBold.value?'bold':'normal',
      color:isBold.value?'blue':'black',
    }
  }
</script>

<style scoped>

</style>