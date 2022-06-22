import { createWebHistory, createRouter } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Gist - ${to.meta.title}`;

  next();
});

export default router;