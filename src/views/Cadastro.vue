<template>
  <div>
    <h3>Cadastro do aluno</h3>

    <!-- Utilizando evento para cadastrar aluno -->
    <SingUp @eventCadastrarAluno="cadastrarAluno($event)" />
  </div>
</template>

<script>
import SingUp from "../components/SingUp";

export default {
  data() {
    return {
      //   alunos: [
      //     {
      //       nome: "João",
      //       email: "",
      //       pass: ""
      //     }
      //   ]
    };
  },
  components: {
    SingUp
  },
  methods: {
    cadastrarAluno: function($event) {
      console.log($event);
      // this.$store.commit("setAlunos", this.alunos);

      this.$store.dispatch("addAluno", $event.alunoRight);

      alert("Cadastro realizado com sucesso, realize o login");

      this.$router.replace({ name: "Tela de Login" });

      // this.alunos.push($event.alunoRight);
    }
  },
  computed: {
    alunos: {
      get() {
        return this.$store.state.alunos;
      }
    }
  }
};
</script>

<style></style>
