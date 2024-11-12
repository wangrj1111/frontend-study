import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App);

app.config.globalProperties.$router = router;
app.use(router);
app.mount('#app');

localStorage.setItem('shopcars', JSON.stringify([]));
