<template>
  <div class="home">
    <Header :isVisible="true" />
    <div class="content">
      <newsBlock />
      <descAuthBlock />
      <carouselBlock />
      <footerBlock />
    </div>
  </div>
</template>

<script>
import Header from "../components/Main/headerBlock.vue";
// import descAuthBlock from "../components/Main/descAuthBlock.vue";
// import newsBlock from "../components/Main/newsBlock.vue";
// import footerBlock from "../components/Main/footerBlock.vue";
// import carouselBlock from "../components/Main/carouselBlock.vue";

export default {
  name: "HomeView",
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  components: {
    Header,
    // descAuthBlock,
    // newsBlock,
    // footerBlock,
    // carouselBlock,
  },
};
</script>

<style lang="less" scoped>
@import "./src/assets/less/var";
@import "./src/assets/less/mixin";

.home {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.content {
  .column(center);
    
  & > div {
    .row();
    .block();
    .main();
  }
  
}
</style>