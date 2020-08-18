<template>
  <div id="sidebar">
    <p class="mb-0 text-center">
      <img src="../assets/logo.svg" class="logo img-fluid d-md-inline-block d-none" />
      <img src="../assets/logo-mobile.svg" class="logo-mobile img-fluid d-md-none d-inline-block" />
    </p>
    <ul>
      <li>
        <router-link to="/" active-class="active" exact>
          <b-icon icon="grid1x2"></b-icon>
          <span class="d-md-inline-block d-none">Dashboard</span>
        </router-link>
      </li>
      <li>
        <router-link to="/orders" active-class="active">
          <b-icon icon="basket"></b-icon>
          <span class="d-md-inline-block d-none">Pedidos</span>
        </router-link>
      </li>
      <li>
        <router-link to="/reports" active-class="active">
          <b-icon icon="clipboard-data"></b-icon>
          <span class="d-md-inline-block d-none">Relatórios</span>
        </router-link>
      </li>
      <li>
        <router-link to="/profile" active-class="active">
          <b-icon icon="person"></b-icon>
          <span class="d-md-inline-block d-none">Meus dados</span>
        </router-link>
      </li>
      <li>
        <a href="#" @click="logout">
          <b-icon icon="box-arrow-left"></b-icon>
          <span class="d-md-inline-block d-none">Sair</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    logout(evt) {
      evt.preventDefault();
      this.$emit("performLogout");
    },
  },
};
</script>

<style lang="scss" scoped>
#sidebar {
  background: #fff;
  height: 100%;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0 0 30px 0;
  z-index: 2;
  position: relative;
  max-height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  .b-icon {
    margin-right: 10px;
  }

  ul {
    padding: 0;
    margin: 0;
    li {
      list-style-type: none;
      padding: 3px 0;
      a {
        display: inline-block;
        color: #707070;
        padding: 8px 15px;
        transition: 0.3s;
        border-radius: 50px;

        .b-icon {
          color: #ed6a5e;
        }

        &:hover,
        &.active {
          text-decoration: none;
          color: #fff;
          background: var(--primary);

          .b-icon {
            color: #fff;
          }
        }
      }
    }
  }
}

.logo {
  max-width: 140px;
  margin: 0 0 30px 0;
}

.logo-mobile {
  max-width: 30px;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  #sidebar {
    width: 100%;
    padding: 10px 0px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .b-icon {
      margin-right: 0;
    }

    ul {
      li {
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          padding: 0;
        }
      }
    }
  }
}
</style>
