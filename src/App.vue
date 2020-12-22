<template>
  <div id="app">
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper blue darken-1">
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li>
              <router-link to="/login"> Login </router-link>
            </li>
            <li><router-link to="/cadastro"> Cadastro </router-link></li>
            <li><router-link to="/alunos"> Lista de Alunos </router-link></li>
          </ul>
        </div>
      </nav>
    </div>

    <div class="row">
      <div class="col s8 offset-s2">
        <router-view />
      </div>
    </div>
    <!-- <input type="text" v-model="inputTitle" /> -->
    <!-- <SingIn :title="inputTitle" />
    <SingIn title="Cadastro 02" />
    <SingIn title="Cadastro 03" />
    <SingIn title="Cadastro 04" />
    <SingIn title="Cadastro 05" /> -->

    <!-- Passando props para alteração  -->
    <!-- <SingUp :alunos="alunos" /> -->

    <!-- Utilizando evento para cadastrar aluno -->
    <!-- <SingUp @eventCadastrarAluno="cadastrarAluno($event)" /> -->

    <!-- Utilizando loop em array -->
    <!-- <div v-for="(aluno, index) in alunos" :key="index"> -->

    <!-- Utilizando loop em array com computedPropers-->
    <!-- <div v-for="(aluno, index) in alunosOrd" :key="index">
      <ListAluno :aluno="{ nome: aluno.nome, email: aluno.email }" />
    </div> -->
  </div>
</template>

<script>
// import { component } from "vue/types/umd";
// import SingIn from "./components/SingIn";
// import SingUp from "./components/SingUp";
// import ListAluno from "./components/ListAluno";
import M from "materialize-css";

export default {
  name: "app",
  data() {
    return {
      inputTitle: ""
    };
  },
  // components: {
  //   SingIn,
  //   SingUp,
  //   ListAluno
  // },
  // methods: {
  //   cadastrarAluno: function($event) {
  //     console.log($event);
  //     this.alunos.push($event.alunoRight);
  //   }
  // },
  // // Variáveis montadas dinamicamente
  // computed: {
  //   alunosOrd: function() {
  //     // slice = Clona Array
  //     let alunosSorted = this.alunos.slice().sort((a, b) => {
  //       // Ordena de forma crescente
  //       if (a.nome > b.nome) {
  //         return 1;
  //       }
  //       if (a.nome < b.nome) {
  //         return -1;
  //       }

  //       return 0;
  //     });

  //     return alunosSorted;
  //   }
  // },
  mounted() {
    M.AutoInit();
  }
};
</script>

<style></style>
