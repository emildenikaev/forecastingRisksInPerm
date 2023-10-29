<template>
  <header>
    <div class="header">
      <div class="left">
        <router-link :to="{ name: 'mainPage' }" class="header__info">
          Команда Зумеры и Бумеры
        </router-link>
      </div>
      <div class="right">
        <img src="../../assets/img/mchs.png" alt="мчс" class="img" />
        <img src="../../assets/img/perm.png" alt="Пермь" class="img perm" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "v-header",
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  width: 100%;
  top: 0;
  left: 0;

  .img {
    margin-right: 15px;
  }

  &__info {
    margin-right: 30px;
  }

  &__logo {
    margin-right: 30px;
  }

  .left {
    display: flex;
    align-items: center;
    font-size: 26px;

    h2 {
      margin: 0;
    }
  }

  .perm {
    height: 65px;
    width: auto;
    margin-left: 10px;
  }

  .right {
    display: flex;
    align-items: center;

    a:visited {
      color: white;
    }

    button:visited {
      color: white;
    }

    .btn:visited {
      color: white;
    }
  }

  img {
    width: 65px;
    border-radius: 50%;
  }

  .btn {
    border-radius: 10px;
    background-color: #02458d;
    border-color: #02458d;
    color: white;

    &-revert {
      border-radius: 10px;
      background: white;
      color: #02458d;
      border-color: white;
      border: 1px solid #02458d;
    }
  }
}

@media (max-width: 1000px) {
  .left {
    h2 {
      display: none;
    }
  }

  .right {
    display: flex;
  }
}
</style>
