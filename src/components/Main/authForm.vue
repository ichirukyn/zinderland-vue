<template>
  <form class="form column" id="reg" @submit="submitReg('user.reg')">
    <p class="mini-header">Регистрация</p>
    <div class="form-input">
        <input
          placeholder="login"
          class="autofill"
          type="text"
          v-model="userData.login"
          required
        />
        <input
          placeholder="E-mail"
          class="autofill"
          type="email"
          v-model="userData.email"
          required
        />
        <input
          placeholder="Пароль"
          class="autofill"
          type="password"
          v-model="userData.password"
          required
        />
        <input
          placeholder="Повторите пароль"
          class="autofill"
          type="password"
          v-model="userData.passwordCheck"
          required
        />
        <input class="submit" value="Продолжить!" type="submit" />
        <a class="btn dis" v-on:click="authTab(true)">Авторизация</a>
      </div>
  </form>

  <form
    id="auth"
    class="form column"
    style="display: none"
    @submit.prevent="submitAuth('user.auth')"
  >
    <p class="mini-header">Авторизация</p>
    <div class="form-input">
      <input
        placeholder="Login"
        class="autofill"
        type="text"
        v-model="userData.login"
        required
      />
      <input
        placeholder="Пароль"
        class="autofill"
        type="password"
        v-model="userData.password"
        required
      />
      <input class="submit" value="Продолжить!" type="submit" />
      <a class="btn dis" v-on:click="authTab(false)">Регистрация</a>
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
    };
  },
  methods: {
    ...mapActions(["auth", "reg"]),
    // TODO
    // Переделать на vue
    authTab(boolen) {
      console.log(boolen);
      if (boolen) {
        document.getElementById("auth").style.display = "flex";
        document.getElementById("reg").style.display = "none";
      } else {
        document.getElementById("reg").style.display = "flex";
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
  },
};
</script>

<style scoped>

.form{
  width: 450px;
}
.form-input {
  display: flex;
  flex-wrap: wrap;
}

</style>