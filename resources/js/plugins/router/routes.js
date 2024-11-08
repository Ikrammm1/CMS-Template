export const routes = [
  { path: '/', redirect: '/login' },
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/pages/dashboard.vue'),
      },
      {
        path: 'account-settings',
        component: () => import('@/pages/account-settings.vue'),
      },
      {
        path: 'typography',
        component: () => import('@/pages/typography.vue'),
      },
      {
        path: 'icons',
        component: () => import('@/pages/icons.vue'),
      },
      {
        path: 'cards',
        component: () => import('@/pages/cards.vue'),
      },
      {
        path: 'tables',
        component: () => import('@/pages/tables.vue'),
      },
      {
        path: 'form-layouts',
        component: () => import('@/pages/form-layouts.vue'),
      },

      //page Route
      { path: 'menuManagement', 
        name: 'Menu', 
        component: () => import('@/pages/menuManagement/Index.vue'),
        // component: () => import("./Pages/menuManagement/Index.vue")
       },

       //===============AUTHORIZATION GROUP=============== 

      { path: 'authorizationGroup', 
        name: 'Authorization', 
        // component: () => import("./Pages/authorizationGroup/Index.vue")
        component: () => import('@/pages/authorizationGroup/Index.vue'),
       },
       //===============AUTHORIZATION GROUP=============== 

      { path: 'report/byyear', 
        name: 'ReportByYear', 
        // component: () => import("./Pages/report/Index.vue")
        component: () => import('@/pages/form-layouts.vue'),
       },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/blank.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/pages/login.vue'),
      },
      {
        path: 'register',
        component: () => import('@/pages/register.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/[...error].vue'),
      },
    ],
  },
]
