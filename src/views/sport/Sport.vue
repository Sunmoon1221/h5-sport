<template>
  <div class="sport">
    <!-- 导航 -->
    <nav-bar>
      <template #text>运动</template>
    </nav-bar>
    
    <div class="my-sports">
      <scroll class="content">
				<!-- 我加入的运动 -->
        <p class="sport-title">我加入的课程</p>
        <!-- 动态渲染sport-cate组件 -->
        <div class="sport-cate-area" >
          <sport-cate @click.native="clickMyClass" v-for="index in 6" :key="index"></sport-cate>
        </div>


        <!-- 热门课程 -->
        <p class="sport-title">热门课程</p>
        <scroll-x class="hot-class-wrapper" :item-list="itemList">
					<hot-sport @click.native="clickLesson" v-for="(item,index) in itemList" :key="index">
						<template #image>
							<img :src="item.image" alt="">
						</template>
						<template #title>
							<span>{{item.title}}</span>
						</template>
					</hot-sport>
        </scroll-x>
      </scroll>
    </div>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import ScrollX from "@/components/common/scroll/ScrollX";
import NavBar from "@/components/common/navBar/NavBar.vue";
import SportCate from "./childComps/SportCate";
import HotSport from './childComps/HotSport'
export default {
  components: { NavBar, Scroll, SportCate, ScrollX,HotSport },
  data() {
    return {
      itemList: [
        {
          image:
            "http://img.mp.itc.cn/upload/20161107/f26db2fbfabb4c5c9ea410f9fec1e39b_th.jpg",
          title: "瑜伽·腰腹塑形",
        },
        {
          image:
            "http://img.mp.itc.cn/upload/20161107/f26db2fbfabb4c5c9ea410f9fec1e39b_th.jpg",
          title: "人鱼线",
        },
        {
          image:
            "http://img.mp.itc.cn/upload/20161107/f26db2fbfabb4c5c9ea410f9fec1e39b_th.jpg",
          title: "平板支撑",
        },
        {
          image:
            "http://img.mp.itc.cn/upload/20161107/f26db2fbfabb4c5c9ea410f9fec1e39b_th.jpg",
          title: "瑜伽·腰腹塑形",
        },
        {
          image:
            "http://img.mp.itc.cn/upload/20161107/f26db2fbfabb4c5c9ea410f9fec1e39b_th.jpg",
          title: "瑜伽·腰腹塑形",
        },
        {
          image:
            "http://img.mp.itc.cn/upload/20161107/f26db2fbfabb4c5c9ea410f9fec1e39b_th.jpg",
          title: "瑜伽·腰腹塑形",
        },
      ],
    };
	},
	methods: {
		clickLesson() {
			this.$router.push('/sport/lesson')
		},
		clickMyClass() {
			this.$router.push('/sport/myclass')
		}
	}
};
</script>

<style lang="less" scoped>
.my-sports {
  margin-top: 72px;
  padding: 20px;

  // overflow: hidden;
}
.sport-cate-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
// scroll的容器高度
.content {
  height: calc(100vh - 141.98px);
  overflow: hidden;
}

// 热门课程
.sport-title {
  font-size: 18px;
}
.hot-class-wrapper {
  width: calc(100vw - 40px);
  overflow: hidden;
  padding: 5px;
}
</style>