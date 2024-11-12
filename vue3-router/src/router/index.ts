import { createRouter, createWebHashHistory } from "vue-router";

// 引入组件
import Layout from "../view/Layout.vue";
import Login from "../view/Login.vue";

const routes = [
    {
        path: '/',
        name: 'layout',
        component: Layout,
        redirect: '/home', // 重定向到 home 页面
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('../view/Home.vue')
            },
            {
                path: 'articles',
                name: 'articleList',
                component: () => import('../view/ArticleList.vue')
            },
            {
                path: 'articles/:id',
                name: 'articleDetail',
                component: () => import('../view/ArticleDetail.vue'),
                children: [
                    {
                        path: 'comments',
                        name: 'articlecomments',
                        component: () => import('../view/comments.vue')
                    }
                ]
            },
            {
                path: 'user',
                component: () => import('../view/UserDashboard.vue'),
                redirect: '/user/profile',
                children: [
                    {
                        path: 'profile',
                        name: 'userProfile',
                        component: () => import('../view/UserProfile.vue')
                    },
                    {
                        path: 'setting',
                        name: 'userSetting',
                        component: () => import('../view/UserSetting.vue')
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
];



const router = createRouter({
    history: createWebHashHistory(),
    routes,
    
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});

router.beforeEach((to, from, next) => {
    // 要去的路由是/user开头的
    if (to.path.startsWith("/user") && !sessionStorage.getItem("token")) {
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