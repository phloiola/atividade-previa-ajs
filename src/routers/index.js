import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";
import Cadastro from "../views/Cadastro";
import Alunos from "../views/Alunos";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      name: "Tela de Login",
      path: "/login",
      component: Login
    },
    {
      name: "Tela de Cadastro",
      path: "/cadastro",
      component: Cadastro
    },
    {
      name: "Tela Lista de Alunos",
      path: "/alunos",
      component: Alunos
    },
    {
      name: "Home",
      path: "/",
      redirect: "/login"
    }
  ]
});

export default router;
