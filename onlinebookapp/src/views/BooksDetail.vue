<template>
    <div class="book-detail">
      <h2>{{ book?.name }}</h2>
      <div class="book-image">
        <img v-if="book" :src="book?.image" alt="Book cover" />
      </div>
      <button class="add-to-cart" @click="addbook()">添加到购物车</button>
    </div>
  </template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const bookId = route.params.id;

const books = [
    {
        id: 1,
        name: '第一行代码java',
        image: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.HY4MKFblGSeUwbVP_MzR4QHaIm?rs=1&pid=ImgDetMain'
    },
    {
        id: 2,
        name: 'JavaScript高级程序设计',
        image: 'https://ts1.cn.mm.bing.net/th/id/R-C.65e79b2f99aa01c8d00f99dce25ab47f?rik=dreHnFmLVRxApA&riu=http%3a%2f%2fimg35.ddimg.cn%2f76%2f19%2f20884225-1_u_2.jpg&ehk=%2fwPrcuk4GjMV4ke%2fS3hlIGJiNa5Bx5zVY95eW13zfdg%3d&risl=&pid=ImgRaw&r=0'
    },
    {
        id: 3,
        name: 'JavaScript从入门到精通',
        image: 'https://so1.360tres.com/t017132906438302557.jpg'
    },
    {
        id: 4,
        name: 'JavaScript设计模式与开发实践',
        image: 'https://ts1.cn.mm.bing.net/th/id/R-C.972798dff5a6bd712ba36da3475842d2?rik=M5u0Zljz7C8rGQ&riu=http%3a%2f%2fpic.j9p.com%2fup%2f2020-11%2f16048908667762327.png&ehk=mJ7rdewbRIQPLxY8w9Jw2B20hT%2fLcg2PAqzDWW%2fqLJM%3d&risl=&pid=ImgRaw&r=0'
    }
];

const book = books.find((a) => a.id === Number(bookId));

// const emit = defineEmits(['add']);
const addbook = () => {
    if (book) {
        // emit('add', book); // 触发 'add' 事件并传递 book 对象

        const shopcars = localStorage.getItem('shopcars');
        let shopcarbooks: any[];

        if (shopcars) {
            try {
                shopcarbooks = JSON.parse(shopcars);
            } catch (error) {
                shopcarbooks = []; // 在解析失败时提供默认值
                alert('添加失败');
            }
            shopcarbooks.push(book);
            localStorage.setItem('shopcars', JSON.stringify(shopcarbooks));
            alert('添加成功');
            router.push('/Cart');
        }else{
            alert('添加失败');
        }
    
    }
}

</script>

<style scoped>
.book-detail {
  max-width: 300px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.book-detail h2 {
  color: #333;
  margin-bottom: 10px;
}

.book-image img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 20px;
}

.add-to-cart {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.add-to-cart:hover {
  background-color: #45a049;
}

.add-to-cart:active {
  transform: translateY(2px);
}
</style>