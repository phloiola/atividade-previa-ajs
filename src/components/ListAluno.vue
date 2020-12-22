<template>
  <li class="collection-item avatar">
    <i class="material-icons circle green">assignment_ind</i>
    <span class="title">{{ aluno.nome }}</span>
    <p>
      e-mail:
      {{ aluno.email | outputLower }}
    </p>

    <!-- {{ `Nome: ${aluno.nome}  e-mail: ${aluno.email}` }} -->
    <!-- Nome: {{ aluno.nome }} e-mail: {{ aluno.email | outputLower }} -->
  </li>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    aluno: Object
  },
  filters: {
    outputLower: function(value) {
      return value.toLowerCase();
    }
  }
};
</script>

<style scoped></style>
