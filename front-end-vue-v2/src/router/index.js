import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'create',
    component: () => import('../components/pages/create-paciente/CreatePacienteComponent'),
  },

  {
    path: '/list-paciente',
    name: 'list',
    component: () => import('../components/pages/list-paciente/ListPacienteComponent'),
  },

  {
    path: '/edit-paciente/:id',
    name: 'update',
    component: () => import('../components/pages/edit-paciente/EditPacienteComponent'),
  },
];

/** BD */
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});


router.beforeEach((to, from, next) => {
  if (to.name) {
    /** Barra de carregamento de uma página */
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  /** Fim da brra de carregamento de uma página */
  NProgress.done();
});

export default router;
