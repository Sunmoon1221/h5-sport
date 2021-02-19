<template>
  <div class="social">
    <!-- 导航 -->
    <nav-bar>
      <template #text>圈子</template>
    </nav-bar>
    <div>
      <!-- <scroll class="content"> -->
      <div class="content-body">
        <van-tabs v-model="active" animated swipeable>
          <van-tab v-for="(item, index) in tabItems" :title="item" :key="index">
            <!-- <scroll class="content"> -->
            <!-- tab1 -->
            <template v-if="index === 0">
              <focus></focus>
            </template>
            <!-- tab2 -->
            <template class="recommend" v-else>
              <recommend></recommend>
            </template>
            <!-- </scroll> -->
          </van-tab>
        </van-tabs>
      </div>

      <!-- </scroll> -->
      <!-- 标签页 -->
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar.vue";
import Focus from "./childComps/Focus.vue";
import Recommend from "./childComps/Recommend.vue";
import Scroll from "@/components/common/scroll/Scroll";

export default {
  components: { NavBar, Focus, Recommend, Scroll },
  data() {
    return {
      tabItems: ["关注", "推荐"],
      active: 0,
    };
  },
  created() {
    console.log(window.innerHeight);
  },
};
</script>

<style lang="less" scoped>
// 页面的样式
// .content {
// 	margin-top: 100px;
// 	background-color: red;
// }
.content-body {
	margin-top: 72px;
}
// 选项卡的样式
/deep/.van-tabs__nav {
  position: relative;
}
/deep/.van-tabs__nav::after {
  position: absolute;
  content: "";
  bottom: 16px;
  left: 0;
  display: block;
  width: 100%;
  height: 1px;
  background-color: #eee;
}
</style>