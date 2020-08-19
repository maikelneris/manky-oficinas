<template>
  <div>
    <component :is="selectedView" @performLogin="performLogin($event)"></component>
  </div>
</template>

<script>
import Auth from "./components/Auth";
import Login from "./pages/Login";

export default {
  data: function () {
    return {
      selectedView: localStorage.login,
    };
  },
  components: { Auth, Login },
  methods: {
    performLogin(event) {
      if (event) {
        localStorage.login = "Auth";
        this.selectedView = "Auth";
      } else {
        localStorage.login = "Login";
        this.selectedView = "Login";
      }
    },
  },
  mounted() {
    console.log(localStorage.login);
    console.log(this.selectedView);
  },
  beforeCreate() {
    if (!localStorage.login) localStorage.login = "Login";
  },
};
</script>

<style lang="scss" scoped>
div {
  height: 100%;
  width: 100%;
}
</style>