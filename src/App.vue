<template>
  <div class="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import HomeLayout from '@/layouts/HomeLayout.vue'
export default {
  computed:{
    layout() {
      console.log(this.$route.meta);
      return (this.$route.meta.layout || 'home') + '-layout'
    }
  },
  components: {
    HomeLayout
  }
}
</script>

<style lang="less">
@import "./src/assets/less/var";
@import "./src/assets/less/mixin";

@font-face {
  font-family: @main_font; 
  src: url(@font_path) format("truetype"); 
  font-style: normal; 
  font-weight: normal; 
} 

* {
  margin: 0px;
  padding: 0px;
  color: @white;
  font-family: @main_font;
  font-size: @text_base;
  transition: 0.3s;
  list-style: none;
  text-decoration: none;
  border: none;
}




//


body {
  background: @body_bg;
}

.app {
  .column(stretch);
}






// * {
//   margin: 0px;
//   padding: 0px;
//   color: @white;
//   font-family: @main_font;
//   font-size: @text_base;
//   transition: 0.3s;
// }

// li,a {
//   padding: @pd_small;
//   list-style: none;
//   text-decoration: none;
//   transition: 0.3s;
// }

// body {
//   background: @main_bg;
// }

// input {
//   border: 1px solid orange;
//   width: 100%;
//   max-width: 178px;
//   background: @main_bg;
//   outline: none;
//   padding: @pd_big;
//   margin: 5px;
//   border-radius: 5px;
// }

// select {
//   background: @main_bg;
//   outline: none;
//   border: none;
//   padding: 5px;
//   margin: 2px;
// }

// .app{
//   .column();
//   align-items: stretch;
// }

// .mini-header{
//   color: @white;
//   font-size: @header_4;
//   margin-bottom: 15px;
// }

// .user-info{
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: space-evenly;
//     width: 100%;
// }




// /* Block*/

// 



/* Scroll */
.scroll {
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scroll::-webkit-scrollbar {
  width: 0;
  height: 0;
}


// /* Text */
// .label{
//   padding: 5px;
//   margin: 5px;
//   font-size: 18px;
//   font-style: bold;
// }
// .text{
//   text-align: justify;
// }

// @font-face {
//   font-family: @main_font; 
//   src: url(@font_path) format("truetype"); 
//   font-style: normal; 
//   font-weight: normal; 
// } 




/* Tabs */
.item{
  margin: 5px;
  padding: 5px 15px;
  background: #242323;
  border-bottom: 1px solid #242323;
  border-radius: 5px;
}

.tab-panel {
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
}

.active {
  background: #171716 !important;
  border-bottom: solid 1px #DB6F15;
}
.active > a {
  line-height: 22px;
  color: #DB6F15;
}

.show{
  display:block!important;
}

/* Image */
img{
  border-radius: 5px;
  object-fit: cover;
}
.image-350 > img{
  max-width: 350px;
  height: 250px;
}
.image-50 > img{
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

// /* Form */
// .autofill:-webkit-autofill {
//     border: 1px solid orange;
//     -webkit-text-fill-color: #fff;
//     -webkit-box-shadow: 0 0 0px 50px #242323 inset;
//             box-shadow: 0 0 0px 50px #242323 inset;
//     color: #fff !important;
// }

// .submit{
//   background: #f35f0b;
//   max-width: 200px;
// }

// .btn{
//   text-align: center;
//   width: 180px;
//   outline: none;
//   border: none;
//   padding: 10px;
//   margin: 5px;
//   border-radius: 5px;
//   background: #DB6F15;
// }

// .dis{
//   background: #242323;
// }

// .btn > a{
//   -webkit-text-fill-color: #fff!important;
//   border: none!important;
// }

// /* .btn > a{
//   font-family: 'ComfortaaLight';
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 18px;
//   -webkit-text-fill-color: #fff!important;
//   border: none!important;
// } */
</style>