<template>
  <div class="shopping-cart">
    <h3>购物车</h3>
    <ul>
      <li v-for="(book, index) in books" :key="index" class="book-item">
        {{ book.id }} {{ book.name }}  
        <img v-if="book.image" :src="book.image" alt="Book cover" />
        <button class="remove-button" @click="removeBook(index)">删除</button>
      </li>
    </ul>

    <button class="logout-button" @click="handleLogout">退出登录</button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { onMounted, ref } from 'vue';

interface Book {
  id: number;
  name: string;
  image?: string;
}

const router = useRouter();
const books = ref<Book[]>([]);

const removeBook = (index: number) => {
  books.value.splice(index, 1);
  localStorage.setItem('shopcars', JSON.stringify(books.value));
};

const handleLogout = () => {
  try {
    localStorage.removeItem("token");
    router.push("/login");
  } catch (error) {
    console.error("Error logging out:", error);
  }
};

onMounted(() => {
  try {
    const storedArray = localStorage.getItem('shopcars');
    if (storedArray) {
      books.value = JSON.parse(storedArray) as Book[];
    }
  } catch (error) {
    console.error("Error parsing stored books:", error);
    localStorage.removeItem('shopcars');
  }
});
</script>

<style scoped>
.shopping-cart {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h3 {
  text-align: center;
  color: #333;
}

ul {
  list-style: none;
  padding: 0;
}

.book-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.book-item img {
  width: 50px;
  height: auto;
  margin-right: 10px;
  border-radius: 4px;
}

.remove-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;
}

.remove-button:hover {
  background-color: #e53935;
}

.remove-button:active {
  transform: translateY(2px);
}

.logout-button {
  display: block;
  width: 100%;
  background-color: #333;
  color: white;
  border: none;
  padding: 10px;
  margin-top: 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.1s ease;
}

.logout-button:hover {
  background-color: #1e1e1e;
}

.logout-button:active {
  transform: translateY(2px);
}

@media (max-width: 600px) {
  .shopping-cart {
    margin: 10px;
  }
}
</style>