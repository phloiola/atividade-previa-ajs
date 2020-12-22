<template>
  <!-- <div class="signInClass"> -->
  <!-- <div :class="{ signInClassOK: statusOk, signInClassNOK: !statusOk }"> -->

  <div>
    <h3>{{ title }}</h3>

    <!-- v-model -> Two way, ou seja, lê os dados do objeto e altera de forma automatica -->
    <label for="singinEmail"> E-mail:</label>
    <input type="email" v-model="email" placeholder="Digite seu e-mail" />
    <br />

    <!-- v-model -> Two way, ou seja, lê os dados do objeto e altera de forma automatica -->
    <label for="singinPass"> Password:</label>
    <input type="password" v-model="pass" placeholder="Informe a sua senha" />

    <br />
    <br />

    <button
      class="waves-effect waves-light btn btn-small blue lighten-2 col s2 offset-s3"
      type="submit"
      @click="goCadastro"
    >
      Criar conta
    </button>
    <button
      class="waves-effect waves-light btn btn-small blue lighten-2 col s2 offset-s1"
      type="submit"
      @click="login"
    >
      Entrar
    </button>

    <!-- v-bind -> one way, ou seja, apenas leitura -->
    <!-- <input type="text" v-bind:value="nome" />
    {{ nome }} -->

    <!-- v-model -> Two way, ou seja, lê os dados do objeto e altera de forma automatica -->
    <!-- <input type="text" v-model="email" />
    {{ email }} -->

    <br />
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: "",
      email: "",
      pass: "",
      statusOk: true
    };
  },
  props: {
    title: String,
    seque: Number,
    aluno: Object
  },
  methods: {
    goCadastro: function() {
      this.$router.replace({ name: "Tela de Cadastro" });
    },
    login: function() {
      const usuario = this.alunos.filter(
        line => line.email === this.email && line.pass === this.pass
      );

      if (usuario.length > 0) {
        this.$router.replace({ name: "Tela Lista de Alunos" });
      } else {
        alert("Usuário ou senha invalida");
      }
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

<style scoped>
.signInClassOK {
  color: white;
  background-color: #798ea4;
  padding: 1%;

  width: 600px;
  height: 180px;
  margin-top: 15px;
  margin-bottom: 30px;
}

.signInClassNOK {
  color: white;
  background-color: red;
  padding: 1%;

  width: 600px;
  height: 180px;
  margin-top: 15px;
  margin-bottom: 30px;
}
</style>
