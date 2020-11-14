<template>
  <div>
    <Header title="Perfil" />
  </div>
</template>

<script>
import Header from "../components/Header";
import ProfileService from "../services/profile";

export default {
  data() {
    return {
      profiledata: "",
    };
  },
  components: {
    Header,
  },
  methods: {},
};
</script>