// import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs';

export let constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: '登录',
      hidden: true,
      icon: 'Connection'
    }
  },
  {//登陆成功后展示数据的路由
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: '',
    redirect: '/home',
    meta: {
      title: '',
      hidden: false,
      icon: ''
    },
    children: [
      {
        path: '/home',
        component: () => import('@/layout/main/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
          icon: 'HomeFilled'
        }
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true,
      icon: 'DocumentDelete'
    },
  },
  {
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    name: 'Screen',
    meta: {
      title: '数据大屏',//右侧菜单栏需要展示的
      hidden: false,
      icon: 'Platform'
    }
  },
  {
    path: '/acl',
    component: () => import('@/layout/index.vue'),
    name: 'Acl',
    meta: {
      title: '权限管理',
      icon: 'Lock',
    },
    redirect: '/acl/user',
    children: [
      {
        path: '/acl/user',
        component: () => import('@/api/acl/user/index.vue'),
        name: 'user',
        meta: {
          title: '用户管理',
          icon: 'User'
        }
      },
      {
        path: '/acl/role',
        component: () => import('@/api/acl/role/index.vue'),
        name: 'Role',
        meta: {
          title: '角色管理',
          icon: 'UserFilled',
        },
      },
      {
        path: '/acl/permission',
        component: () => import('@/api/acl/permission/index.vue'),
        name: 'Permission',
        meta: {
          title: '菜单管理',
          icon: 'Monitor',
        },
      },
    ]
  },
  {
    path: '/product',
    component: () => import('@/layout/index.vue'),
    name: 'Product',
    meta: {
      title: '商品管理',
      icon: 'Goods',
    },
    redirect: '/product/trademark',
    children: [
      {
        path: '/product/trademark',
        component: () => import('@/views/product/trademark/index.vue'),
        name: 'Trademark',
        meta: {
          title: '品牌管理',
          icon: 'ShoppingCartFull',
        },
      },
      {
        path: '/product/attr',
        component: () => import('@/views/product/attr/index.vue'),
        name: 'Attr',
        meta: {
          title: '属性管理',
          icon: 'ChromeFilled',
        },
      },
      {
        path: '/product/spu',
        component: () => import('@/views/product/spu/index.vue'),
        name: 'Spu',
        meta: {
          title: 'SPU管理',
          icon: 'Calendar',
        },
      },
      {
        path: '/product/sku',
        component: () => import('@/views/product/sku/index.vue'),
        name: 'Sku',
        meta: {
          title: 'SKU管理',
          icon: 'Orange',
        },
      },
    ]
  }

]