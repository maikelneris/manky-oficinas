<template>
  <header>
    <div class="row align-items-center">
      <div class="col-sm-6">
        <h1 class="mb-0">{{ title }}</h1>
      </div>
      <div class="col-sm-6 d-sm-block d-none">
        <div class="profile">
          <div class="avatar"></div>
          <span>Maikel Neris</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
header {
  padding: 20px 20px 120px 20px;
  background: var(--secondary);
  background: linear-gradient(140deg, var(--primary) 0%, var(--secondary) 100%);
  margin-bottom: -50px;

  h1 {
    color: #fff;
    font-size: 26px;
    font-weight: bold;
  }

  .profile {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 14px;
    justify-content: flex-end;
  }

  .avatar {
    margin-right: 10px;
    width: 34px;
    height: 34px;
    border-radius: 20px;
    background: #fff;
  }
}

@media (max-width: 768px) {
  header {
    padding: 10px 10px 120px 10px;
  }
}
</style>