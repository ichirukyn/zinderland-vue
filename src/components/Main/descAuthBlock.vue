<template>
  <div class="main block row">
    <div class="block-desc column">
      <div class="description">
        <span>Zinderland - Что это?</span>
        <p class="text">
          hey! cölywn syc mosloqritrey vat ðistem. nuy rit ðytritrey buy vötgil.
          ywn prötotnötdan ðis. but wot ðat viz key. ywn nötnyd wot dan
          nuykroritniq. but wot cif wot ywn dan, lösðat viz gwd. ðat vynviz
          vergwd. cif wot ywn kan wot sey buy vötgil, nuy wön wot non ywn!
          (jekcif wot ywn viz vötgwdprs, jor sumxiq) but wot nuy prövölnon cöl
          wis prs non vötgil. vötgil viz wim nötlötprssis non leq
        </p>
      </div>
    </div>
    <div class="user_auth column">
      <authForm v-if="isLoggedIn"/>
      <div class="column" v-if="!isLoggedIn">
          <span>Приветствуем {{ userData.login }}!</span>
          <button class="btn">
            <router-link to="/game">Играть!</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import authForm from "./authForm.vue";

export default {
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
    userData: function() {
      return this.$store.getters.userData;
    },
    userUpdate : function(){
        if(this.isLoggedIn){return this.updateUserData()}
        else{return null}
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

<style scoped>
.block-desc {
  width: 35%;
  max-width: 350px;
}

.description {
  max-width: 350px;
  height: 250px;
}

.user_auth {
  width: 50%;
  margin-left: 20px;
}
</style>