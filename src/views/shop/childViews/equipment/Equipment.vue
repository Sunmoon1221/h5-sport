<template>
  <div class="equipment">
    <!-- 导航 -->
    <nav-bar @click-left="clickLeft">
      <template #left><van-icon color="#fff" name="arrow-left" /></template>
      <template #text>运动设备</template>
    </nav-bar>

    <div class="content-body">
      <scroll class="content">
        <!-- 搜索框 -->
        <van-search v-model="value" placeholder="请输入搜索关键词" />

        <!-- 产品区域 -->
        <van-tabs
          v-model="active"
          swipeable
          line-width="0"
          title-active-color="#00a48c"
        >
          <van-tab v-for="(item, index) in tabList" :key="item" :title="item">
            <!-- 内容区 -->
            <div class="goods" v-if="index === 0">
              <good-item
                :style="{ width: '170px', 'margin-bottom': '10px' }"
                v-for="index in 6"
                :key="index"
              >
                <template #image>
                  <img
                    :style="{ width: '170px', height: '200px' }"
                    src="../../../../assets/image/shop/goods/1.png"
                    alt=""
                  />
                </template>
                <template #title>
                  <span
                    >Keep跳绳减肥基础燃脂跳绳
                    运动健身考试器材男女PVC不缠绕耐磨可调长度 黑色</span
                  >
                </template>
                <template #price>
                  <span>￥39.00</span>
                </template>
                <template #feature>
                  <span>月销235</span>
                </template>
              </good-item>
            </div>
            <div class="goods" v-else-if="index === 2">
              <good-item
                :style="{ width: '170px', 'margin-bottom': '10px' }"
                v-for="index in 6"
                :key="index"
              >
                <template #image>
                  <img
                    :style="{ width: '170px', height: '200px' }"
                    src="../../../../assets/image/shop/goods/1.png"
                    alt=""
                  />
                </template>
                <template #title>
                  <span
                    >Keep跳绳减肥基础燃脂跳绳
                    运动健身考试器材男女PVC不缠绕耐磨可调长度 黑色</span
                  >
                </template>
                <template #price>
                  <span>￥59.00</span>
                </template>
                <template #feature>
                  <span>月销235</span>
                </template>
              </good-item>
            </div>
            <div class="goods" v-else>
              <good-item
                :style="{ width: '170px', 'margin-bottom': '10px' }"
                v-for="index in 6"
                :key="index"
              >
                <template #image>
                  <img
                    :style="{ width: '170px', height: '200px' }"
                    src="../../../../assets/image/shop/goods/1.png"
                    alt=""
                  />
                </template>
                <template #title>
                  <span
                    >Keep跳绳减肥基础燃脂跳绳
                    运动健身考试器材男女PVC不缠绕耐磨可调长度 黑色</span
                  >
                </template>
                <template #price>
                  <span>￥49.00</span>
                </template>
                <template #feature>
                  <span>月销235</span>
                </template>
              </good-item>
            </div>
          </van-tab>
        </van-tabs>
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar.vue";
import GoodItem from "@/components/content/good/GoodItem";
import Scroll from "@/components/common/scroll/Scroll";
export default {
  components: {
    NavBar,
    GoodItem,
    Scroll,
  },
  data() {
    return {
      value: "",
      active: 0,
      tabList: ["塑性", "减脂", "增肌"],
    };
  },
	methods: {
		clickLeft() {
			this.$router.back()
		}
	}
};
</script>

<style lang="less" scoped>
.content-body {
  margin-top: 72px;
}

/* 内容区 */
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

/* 滚动区域 */
.content {
  height: calc(100vh - 121.98px);
  overflow: hidden;
}
</style>