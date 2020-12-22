<template>
  <div>
    <!-- Utilizando loop em array com computedPropers-->
    <ul class="collection" v-for="(aluno, index) in alunosOrd" :key="index">
      <ListAluno :aluno="{ nome: aluno.nome, email: aluno.email }" />
    </ul>
  </div>
</template>

<script>
import ListAluno from "../components/ListAluno";

export default {
  computed: {
    alunosOrd: function() {
      // slice = Clona Array
      let alunosSorted = this.$store.state.alunos.slice().sort((a, b) => {
        // Ordena de forma crescente
        if (a.nome > b.nome) {
          return 1;
        }
        if (a.nome < b.nome) {
          return -1;
        }
        return 0;
      });
      console.log(alunosSorted);
      return alunosSorted;
    }
  },
  components: {
    ListAluno
  }
};
</script>

<style></style>
