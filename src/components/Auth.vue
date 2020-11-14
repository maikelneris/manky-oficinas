<template>
  <div id="auth-view">
    <Sidebar @performLogout="performLogin($event)" />
    <div id="dashboard">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";

export default {
  components: {
    Sidebar,
  },
  methods: {
    performLogin(event) {
      this.$emit("performLogin", event);
    },
  },
};
</script>

<style lang="scss" scoped>
#auth-view {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 240px auto;
}
#dashboard {
  background: #f6f7fc;
  max-height: 100vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: var(--primary);
  }
}

@media (max-width: 768px) {
  #auth-view {
    grid-template-columns: 45px auto;
  }
}
</style>
