<template>
  <div id="logged-view">
    <Sidebar />
    <Dashboard />
  </div>
</template>

<script>
import Sidebar from "../Sidebar";
import Dashboard from "../Dashboard";

export default {
  components: {
    Sidebar,
    Dashboard,
  },
};
</script>

<style lang="scss" scoped>
#logged-view {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 240px auto;
}
</style>
