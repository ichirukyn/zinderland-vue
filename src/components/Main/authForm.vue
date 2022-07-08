<template>
  <div v-if="isError" class="error">Ошибка: {{errorMesseage}}</div>
  <form id="reg" @submit="submitReg('user.reg')">
    <p>Регистрация</p>
    <div class="form-input">
      <input
        placeholder="login"
        type="text"
        v-model="userData.login"
        required
      />
      <input
        placeholder="E-mail"
        type="email"
        v-model="userData.email"
        required
      />
      <input
        placeholder="Пароль"
        type="password"
        v-model="userData.password"
        required
      />
      <input
        placeholder="Повторите пароль"
        type="password"
        v-model="userData.passwordCheck"
        required
      />
      <input value="Продолжить!" type="submit" />
      <a v-on:click="authTab(true)">Авторизация</a>
    </div>
  </form>

  <form id="auth" @submit.prevent="submitAuth('user.auth')">
    <p class="mini-header">Авторизация</p>
    <div class="form-input">
      <input
        placeholder="Login"
        type="text"
        v-model="userData.login"
        required
      />
      <input
        placeholder="Пароль"
        type="password"
        v-model="userData.password"
        required
      />
      <input class="submit" value="Продолжить!" type="submit" />
      <a v-on:click="authTab(false)">Регистрация</a>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      baseUrl: "http://c92521q7.beget.tech/",
      userData: {},
      errorMesseage: null,
    };
  },

  computed: {
    isError () {
      if (this.$store.getters.errorShow !== null) {
        this.setError(this.$store.getters.errorShow);
      }
      else {
        this.clearError();
      }
      return(this.$store.getters.errorShow !== null)  
    }
  },
  methods: {
    ...mapActions(["auth", "reg"]),
    // TODO
    // Переделать на vue

    authTab(boolen) {
      if (boolen) {
        document.getElementById("auth").style.display = "grid";
        document.getElementById("reg").style.display = "none";
      } else {
        document.getElementById("reg").style.display = "grid";
        document.getElementById("auth").style.display = "none";
      }
    },

    submitAuth(apiFunc) {
      this.userData.apiFunc = this.baseUrl + apiFunc;
      this.auth(this.userData);
    },

    submitReg(apiFunc) {
      this.userData.apiFunc = this.baseUrl + apiFunc;
      this.reg(this.userData);
    },

    setError (errorMesseage) {
      this.errorMesseage = errorMesseage;
    },

    clearError () {
      this.errorMesseage = null;
    }
  },
};
</script>

<style lang="less" scoped>
@import "./src/assets/less/var";
@import "./src/assets/less/mixin";

form {
  width: 100%;

  & > p {
    margin-bottom: @mg_big;
    font-size: @header_4;
  }
}

.form-input {
  .grid(1fr 1fr, auto, 20px);

  & > input,
  & > a {
    .input();
  }
  & > a {
    text-align: center;
    cursor: pointer;
  }
  & > input[type="submit"] {
    background: @main_color;
  }
}

#auth {
  display: none;
}

.error {
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  padding: @pd_vbig;
  border-radius: @radius_base;

  text-align: center;
  font-size: @header_4;

  background: @warning_d;
}
</style>