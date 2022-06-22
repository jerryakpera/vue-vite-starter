const routes = [
  {
    path: '/login',
    component: () => import('../layouts/UnauthenticatedLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../pages/LoginPage.vue'),
        meta: {
          title: 'Login',
        },
      },
    ],
  },

  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../pages/IndexPage.vue'),
        meta: {
          title: 'Home',
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/ErrorNotFound.vue'),
  },
];

export default routes;
