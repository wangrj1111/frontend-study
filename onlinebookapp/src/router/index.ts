import { createRouter, createWebHistory } from "vue-router";

// 弥补路径差异
import Layout from "../views/Layout.vue";
import Login from "../views/Login.vue";
const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path:'home',
        name: 'home',
        component: () => import('../views/home.vue')
      },
      {
        path: 'Books', // 子路由路径应相对于父路由
        name: 'Books',
        component: () => import('../views/BooksList.vue')
      }
      ,
      {
        path: 'Books/:id',
        name: 'BooksDetail',
        component: () => import('../views/BooksDetail.vue')
      },
      {
        path:'Cart',
        component: () => import('../views/CartDashBoard.vue'),
        redirect: '/Cart/ShoppCart',
        children: [
          {
            path: 'ShoppCart',
            name: 'ShoppCart',
            component: () => import('../views/ShopCar.vue')
          },
          {
            path: 'Order',
            name: 'Order',
            component: () => import('../views/Order.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
];



const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // 在这里返回false将阻止滚动行为
    return false;
  }
});


router.beforeEach((to, from, next) => {
  
  if (to.path.startsWith("/ShopCar") && !localStorage.getItem("token")) {
    // 没有token，提示请先登录
    alert("请先登录");
    // 跳到/login登录页面
    next("/login");
  } else {
    // 直接放行
    next();
  }
});

export default router;