<template>
  <div>
    <header class="header">
      <!-- 头部视频 -->
      <player :video-url="url"></player>
      <!-- 加入训练按钮 -->
      <div class="addTrain">
        <van-button @click="clickAddTrain" color="#00a48c" round type="info">加入训练</van-button>
      </div>
    </header>

    <!-- 课程介绍 -->
    <div class="class-desc">
      <h2>课程介绍</h2>
      <p>
        肩颈理疗瑜伽是从根本上放松精神及身体上的压力，拉伸肌肉，改善血液循环，清除乳酸，减轻疼痛。对于肩颈理疗瑜伽，在瑜伽的学科里，叫做“人体观身的生理辩证”，意思就是说，先要“观心”，还要“观身”，针对久坐不动的人常常出现的肩颈问题每周一次的瑜伽理疗课程可以很好的改善办公室综合征带来的肩颈不适。
      </p>
    </div>
    <!-- 课程动作 -->
    <div class="class-action">
      <h2>课程动作</h2>
      <!-- <div class="action-list"> -->
      <scroll-x class="hot-class-wrapper" :item-list="itemList">
				<!-- flex-shrink:0 防止被挤压 -->
        <player v-for="item in itemList" :key="item.action"
          :video-url="item.url"
          :style="{ width: '140px', height: '200px',marginRight:'20px',flexShrink:'0' }"
        ></player>
      </scroll-x>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import Player from "@/components/content/dplayer/Player";
import ScrollX from "@/components/common/scroll/ScrollX";
export default {
  components: {
    Player,
    ScrollX,
  },
  data() {
    return {
      url: require("../../../assets/video/sport/02.mp4"),
			itemList: [
				{action:'001',url:require("../../../assets/video/sport/03.mp4")},
				{action:'002',url:require("../../../assets/video/sport/03.mp4")},
				{action:'003',url:require("../../../assets/video/sport/03.mp4")},
				{action:'004',url:require("../../../assets/video/sport/03.mp4")},
				{action:'005',url:require("../../../assets/video/sport/03.mp4")},
			]
    };
  },
  methods: {
		clickAddTrain() {
			this.$toast.success('加入成功');
		}
	}
};
</script>

<style lang="less" scoped>
.header {
  position: relative;
  height: 230px;
}
.video {
  margin-bottom: 20px;
}
.addTrain {
  position: absolute;
  z-index: 99;
  left: 50%;
  bottom: 0;
  transform: translate(-50%);
}
.video video {
  width: 375px;
}
/* 改变dplayer默认样式 */
header .dplayer {
  border-radius: 0 0 30px 30px;
}
/deep/.dplayer-controller {
  display: none;
}
// 课程描述
.class-desc {
  font-size: 14px;
  line-height: 1.5;
  color: rgb(180, 180, 180);
  padding: 10px;

  h2 {
    color: rgb(56, 56, 56);
  }
}
//课程动作
.class-action {
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 50px;
  padding: 10px;

  h2 {
    color: rgb(56, 56, 56);
  }

  .action-list {
    // display: flex;
  }
}
.hot-class-wrapper {
  width: calc(100vw - 40px);
  overflow: hidden;
  padding: 5px;
}
</style>