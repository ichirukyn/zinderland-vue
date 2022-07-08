<template>
  <div>
    <div class="description">
      <div>
        <span>Zinderland </span><span> - Что это? </span>
      </div>
      <p class="text">
        Lorem Ipsum — это просто текст-пустышка полиграфической и наборной индустрии. 
        Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов, 
        когда неизвестный печатник взял гранку шрифта и перемешал ее, 
        чтобы сделать книгу образцов шрифтов. Он пережил не только пять столетий, 
        но и скачок в электронику, когда неизвестный печатник взял гранку шрифта 
        и перемешал ее, чтобы сделать книгу образцов шрифта. Он пережил не только 
        пять столетий, но и скачок в электронную Ъ ъ б6 ь 
      </p>
    </div>
    <div class="user_auth">
      <authForm v-if="isLoggedIn"/>
      <!-- <div v-if="!isLoggedIn">
          <span>Приветствуем {{ userData.login }}!</span>
          <button class="btn">
            <router-link to="/game">Играть!</router-link>
        </button>
      </div> -->
    </div>
  </div>
</template>

<script>
import authForm from "./authForm.vue";

export default {
  computed: {
    isLoggedIn: function () {
      return !this.$store.getters.isLoggedIn;
    },
    userData: function() {
      return this.$store.getters.userData;
    },
    userUpdate : function(){
        if (this.isLoggedIn) return this.updateUserData()
        else return null
    }
  },
  components: {
    authForm,
  },
  methods: {
    updateUserData(){
      this.$store.dispatch('userDataGet', this.$store.getters.userAuth);
    }
  },
}
</script>

<style lang="less" scoped>
@import "./src/assets/less/var";
@import "./src/assets/less/mixin";

.description {
  align-items: self-start;
  width: 35%;

  & > div > span:first-child {
    color: @main_color;
  }

  & > div > span {
    font-size: @header_4;
  }

  & > p {
    text-align: justify;
    margin: @mg_vbig 0 0 0;
  }

}

.user_auth {
  .column(center);
  width: 50%;
}
</style>