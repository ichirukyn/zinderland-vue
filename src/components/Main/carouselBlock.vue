<template>
  <div class="main block row">
    <swiper
      :slides-per-view="2"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide><img src="/1.jpg" /></swiper-slide>
      <swiper-slide><img src="/2.jpg" /></swiper-slide>
      <swiper-slide><img src="/3.jpg" /></swiper-slide>
      <swiper-slide><img src="/4.jpg" /></swiper-slide>
      <swiper-slide><img src="/5.jpg" /></swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

<style scoped>

img{
  width: 500px;
  height: 320px;
  border-radius: 5px;
}
.swiper{
  align-self: center;
  width: 95%;
}
</style>