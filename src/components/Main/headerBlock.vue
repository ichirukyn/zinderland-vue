<template>
    <div v-if="this.isVisible" class="logo">
      <img src="/logo_big.svg">
      <h2>Welcome to the <b>Zinderland</b></h2>
    </div>
  <header>
      <div class="text">Zinderland</div>
      <nav>
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/news">Новости</router-link></li>
        <li><router-link to="/forum">Форум</router-link></li>
      </nav>
      <button>
        <router-link to="/room">Играть!</router-link>
      </button>
  </header>
</template>

<script>
export default {
  props: ['isVisible'],
  methods:{
    logout: function () {
      this.$store.dispatch('logout')
      .then(() => {
        this.$router.push('/')
      })
    }
  }
};
</script>

<style lang="less" scoped>
@import "./src/assets/less/var";
@import "./src/assets/less/mixin";

header{
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: @block_bg;

  & > button{
    .btn();
  }
}

.logo {
  .column(center);
  height: 750px;
  // background: url("/background.png");
  background-size: cover;
  
  & > h2 {
    font-size: @header_2;
    text-align: center;
  }
  & > h2 > b{
    font-size: @header_2;
    text-align: center;
    color: @main_color;
  }
}

.text{
  color: @main_color;
  font-size: @header_4;
}

nav {
    display: flex;

  & > li{
    margin: @mg_base;
  }
}

.router-link-active{
  color: @main_color;
	border-bottom: solid 1px @main_color;
}
</style>
