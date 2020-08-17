<template>
  <div id="sidebar">
    <p class="mb-0 text-center">
      <img src="../../assets/logo.svg" class="logo img-fluid" />
    </p>
    <ul>
      <li>
        <a href="#">Dashboard</a>
      </li>
      <li>
        <a href="#">Pedidos</a>
      </li>
      <li>
        <a href="#">Relatórios</a>
      </li>
      <li>
        <a href="#">Meus dados</a>
      </li>
      <li>
        <a href="#">Sair</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
#sidebar {
  height: 100%;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.16) 0 0 30px 0;
  z-index: 2;
  position: relative;
}

.logo {
  max-width: 140px;
}
</style>
