<template>
  <div>
    <component :is="selectedView" @performLogin="selectedView = $event"></component>
  </div>
</template>

<script>
import Auth from "./components/Auth";
import Login from "./pages/Login";

export default {
  data: function () {
    return {
      selectedView: "Login",
    };
  },
  components: { Auth, Login },
};
</script>

<style lang="scss" scoped>
div {
  height: 100%;
  width: 100%;
}
</style>