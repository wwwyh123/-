export let constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: '登录',
      hidden: true
    }
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: true
        }
      },
      {
        path: '/404',
        component: () => import('@/views/404/index.vue'),
        meta: {
          title: '404',
          hidden: false
        }
      }
    ],
    meta: {
      title: 'layout',
      hidden: false
    }
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true
    },
  },
  {
    path: '/:pathMath(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: 'any',
      hidden: false
    }
  }
]