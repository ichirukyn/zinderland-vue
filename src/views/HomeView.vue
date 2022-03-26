<template>
  <div class="home">
    <Header />
    <div class="column">
      <newsBlock />
      <descAuthBlock/>
      <carouselBlock />
      <footerBlock />
    </div>
  </div>
</template>

<script>
import Header from "../components/Main/headerBlock.vue";
import descAuthBlock from "../components/Main/descAuthBlock.vue";
import newsBlock from "../components/Main/newsBlock.vue";
import footerBlock from "../components/Main/footerBlock.vue";
import carouselBlock from "../components/Main/carouselBlock.vue";

export default {
  name: "HomeView",
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  components: {
    Header,
    descAuthBlock,
    newsBlock,
    footerBlock,
    carouselBlock
  }
};
</script>

<style>

/* .btn-start{
  background: #DB6F15;
  width: 180px;
  height: 45px;
  padding: 5px;
  border: none;
  border-radius: 5px;
}

.btn-start > a{
  font-family: 'ComfortaaLight';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  -webkit-text-fill-color: #fff!important;
  border: none!important;
} */
</style>