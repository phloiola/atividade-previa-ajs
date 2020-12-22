<template>
  <div>
    <form action="">
      <label for="inputNome">Nome:</label>
      <input type="text" id="inputNome" v-model="aluno.nome" />
      <label for="inputEmail">E-mail:</label>
      <input type="email" id="inputEmail" v-model="aluno.email" />
      <label for="inputEmailConf">Confirmar E-mail:</label>
      <input type="email" id="inputEmailConf" v-model="aluno.emailConf" />

      <label for="inputPass">Senha:</label>
      <input type="password" id="inputPass" v-model="aluno.pass" />
      <label for="inputPassConf">Confirmar Senha:</label>
      <input type="password" id="inputPassConf" v-model="aluno.passConf" />

      <!-- <a class="waves-effect waves-light btn">button</a> -->
      <br />
      <br />
      <button
        class="waves-effect waves-light btn-small blue lighten-2 col s4 offset-s4"
        type="submit"
        v-on:click.prevent="cadastrarAluno"
      >
        Cadastrar
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aluno: {
        nome: "",
        email: "",
        emailConf: "",
        pass: "",
        passConf: ""
      }
    };
  },
  props: {
    // Props desativada para uso de evento
    //alunos: Array
  },
  methods: {
    cadastrarAluno: function(e) {
      // e.preventDefault();

      const validateEmail = function(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      };

      if (
        !this.aluno.nome ||
        !this.aluno.email ||
        !this.aluno.emailConf ||
        !this.aluno.pass ||
        !this.aluno.passConf
      ) {
        console.error("Preencha todos os campos");
        alert("Preencha todos os campos");
        return;
      }

      if (!validateEmail(this.aluno.email)) {
        alert("E-mail invalido");
        return;
      }

      if (this.aluno.email !== this.aluno.emailConf) {
        alert("E-mail diferente");
        return;
      }

      if (this.aluno.pass !== this.aluno.passConf) {
        alert("Senha não confere");
        return;
      }

      const alunoRight = {
        nome: this.aluno.nome,
        email: this.aluno.email,
        pass: this.aluno.pass
      };

      // Maneira antiga usando Props
      // this.alunos.push(alunoRight);

      this.$emit("eventCadastrarAluno", { alunoRight, component: this });
    }
  }
};
</script>

<style scoped></style>
