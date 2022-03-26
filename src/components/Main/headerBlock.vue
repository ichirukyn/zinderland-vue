<template>
  <header>
    <div class="header-logo">
      <!-- <img src="../../assets/logo.jpg"> -->
      <div class="logo-text">Zinderland</div>
    </div>
    <div class="header-navList">
      <nav>
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/news">Новости</router-link></li>
        <li><router-link to="/forum">Форум</router-link></li>
      </nav>
    </div>
    <div class="header-start">
      <button class="btn">
        <router-link to="/room">Играть!</router-link>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderBlock",
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

<style scoped>

header{
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #171716;
}

header > div, header > div > li{
	background: #171716;
}

.header-logo img{
	background: #fff;
    width: 120px;
    margin: 5px;
}

.logo-text{
  line-height: 22px;
  color: #DB6F15;
  font-size: 24px;
}

.header-navList > nav{
	display: flex;
	flex-direction: row;
}

.header-navList > nav > li{
	padding: 5px;
	margin: 1px;
}

.router-link-active{
  line-height: 22px;
  color: #DB6F15;
	border-bottom: solid 1px #DB6F15;
}
</style>
