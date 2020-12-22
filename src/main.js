import Vue from "vue";
import App from "./App.vue";
import router from "./routers";
import store from "./store";

// Importa biblioteca CSS Materialize
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/css/materialize.css";

new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store
});
