<template>
  <div id="login">
    <div class="login-box">
      <p class="text-center">
        <img src="../assets/logo.svg" class="img-fluid logo" />
      </p>

      <b-form @submit="onSubmit">
        <b-form-group id="input-group-1" label="Seu email:" label-for="email">
          <b-form-input id="email" v-model="form.email" type="email" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Senha:" label-for="input-2">
          <b-form-input type="password" id="input-2" v-model="form.name" required></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" class="btn-block">Entrar</b-button>

        <p class="text-center mt-3 mb-0">
          <a href="#">Esqueceu a senha?</a>
        </p>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
      },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$emit("performLogin", true);
    },
  },
};
</script>

<style lang="scss" scoped>
#login {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--secondary);
  background: linear-gradient(140deg, var(--primary) 0%, var(--secondary) 100%);
}

.login-box {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.26);
  padding: 20px;
  max-width: 380px;
  width: 100%;
}

.logo {
  max-width: 180px;
}
</style>