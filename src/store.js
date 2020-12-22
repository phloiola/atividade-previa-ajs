import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    alunos: [
      // {
      //   nome: "",
      //   email: "",
      //   pass: ""
      // }
    ]
  },
  actions: {
    addAluno({ commit }, aluno) {
      commit("setAlunos", aluno);
    }
  },
  mutations: {
    setAlunos(state, payload) {
      console.log(state);
      console.log("Passou", payload, state);
      state.alunos.push(payload);
    }
  }
});

export default store;
