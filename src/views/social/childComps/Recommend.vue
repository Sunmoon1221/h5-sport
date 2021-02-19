<template>
  <div class="recommend">
    <vue-waterfall-easy
      :imgsArr="imgsArr"
      :gap="40"
      :mobileGap="20"
      :height="getInnerHeight"
      :loadingDotCount="3"
      :loadingDotStyle="{ backgroundColor: '#00a48c' }"
    >
      <template class="some-info" v-slot="props">
        <!-- {{props}} -->
        <p class="some-info">{{ props.value.info }}</p>
      </template>
    </vue-waterfall-easy>
  </div>
</template>

<script>
import vueWaterfallEasy from "vue-waterfall-easy";

export default {
  components: {
    vueWaterfallEasy,
  },
  data() {
    return {
      // 瀑布流的图片数据
      imgsArr: [
        {
          src:
            "http://img.mp.itc.cn/upload/20161024/29a8df5c62e64e33a104542292184ece_th.jpeg",
          href: "",
          info: "游泳、快走、慢跑、骑自行车，及一切有氧运动都能锻炼心脏。",
        },
        {
          src: "https://icweiliimg1.pstatp.com/weili/bl/475116394855137285.jpg",
          href: "",
          info:
            "有氧运动好处多:能锻炼心肺、增强循环系统功能、燃烧脂肪、加大肺活量、降低血压，甚至能预防糖尿病，减少心脏病的发生。",
        },
        {
          src:
            "http://img.mp.itc.cn/upload/20161107/f26db2fbfabb4c5c9ea410f9fec1e39b_th.jpg",
          href: "",
          info:
            "美国运动医学院建议，想知道有氧运动强度是否合适，可在运动后测试心率，以达到最高心率的60%~90%为宜。",
        },
        {
          src: "http://sc.68design.net/photofiles/201503/IrxS3lp9fB.jpg",
          href: "",
          info: "游泳、快走、慢跑、骑自行车，及一切有氧运动都能锻炼心脏。",
        },
        {
          src: "https://icweiliimg1.pstatp.com/weili/bl/55317460794082872.jpg",
          href: "",
          info: "游泳、快走、慢跑、骑自行车，及一切有氧运动都能锻炼心脏。",
        },
        {
          src: "https://icweiliimg1.pstatp.com/weili/bl/318448340194033694.jpg",
          href: "",
          info: "游泳、快走、慢跑、骑自行车，及一切有氧运动都能锻炼心脏。",
        },
      ],
    };
  },
  computed: {
    getInnerHeight() {
      return window.innerHeight - 185.984;
    },
  },
};
</script>

<style lang="less" scoped>

// 改变瀑布流的图片样式
/deep/.vue-waterfall-easy-container .vue-waterfall-easy a.img-wraper > img {
  width: 100%;
  display: block;
  border: none;
  border-radius: 10px;
}
/deep/.vue-waterfall-easy-container
  .vue-waterfall-easy
  a.img-inner-box[data-v-ded6b974] {
  border-radius: 10px;
}

.some-info {
  padding: 6px;
  margin: 0 auto;
  font-size: 12px;
  line-height: 1.5;
  color: rgb(153, 153, 153);
}


</style>