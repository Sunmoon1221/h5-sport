<template>
  <div class="shop">
    <!-- 导航 -->
    <nav-bar>
      <template #text>商城</template>
    </nav-bar>
    <div class="content-body">
      <scroll class="content">
        <!-- 搜索框 -->
        <van-search v-model="value" placeholder="请输入搜索关键词" />

        <!-- 商城种类 -->
        <div class="shop-cate">
          <!-- 每个分类的组件 -->
          <shop-cate-item
            v-for="item in cateList"
            :key="item.id"
            @click.native="clickShopCate(item.name)"
          >
            <template #image>
              <!-- <img src="../../assets/image/shop/2.webp.jpg" alt="" /> -->
							<img :src="item.pic" alt="">
            </template>
            <template #title>
              <span class="title"> {{item.title}} </span>
            </template>
          </shop-cate-item>
        </div>

        <!-- 限时秒杀 -->
        <div class="kill-price-area">
          <div class="kill-price-title">
            <span class="title-text">限时秒杀</span>
            <van-count-down :time="time">
              <template #default="timeData">
                <span class="block">{{ timeData.hours }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.minutes }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.seconds }}</span>
              </template>
            </van-count-down>
          </div>
          <div class="kill-price">
            <good-item :style="{width:'106px'}" v-for="index in 3" :key="index">
              <template #image>
                <img src="../../assets/image/shop/goods/1.png" alt="" />
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
            </good-item>
            <!-- 防止flex对不齐 -->
            <!-- <div class="temp"></div> -->
          </div>
        </div>

        <div class="recommend-area">
          <!-- 拼团抢购 -->
          <div class="together-buy">
            <p class="title-text">拼团抢购</p>
            <p class="desc-text">低至4折</p>
            <div class="goods-area">
              <good-item
                :style="{
                  width: '80px',
                }"
                v-for="index in 2"
                :key="index"
              >
                <template #image>
                  <img
                    :style="{ width: '80px', height: '100px' }"
                    src="../../assets/image/shop/goods/1.png"
                    alt=""
                  />
                </template>
                <template #title>
                  <span :style="{ width: '80px' }"
                    >Keep跳绳减肥基础燃脂跳绳
                    运动健身考试器材男女PVC不缠绕耐磨可调长度 黑色</span
                  >
                </template>
                <template #price>
                  <span :style="{ 'font-size': '16px' }">￥39.00</span>
                </template>
              </good-item>
            </div>
          </div>

          <!-- 超值砍价 -->
          <div class="nice-price">
            <p class="title-text">超值秒杀</p>
            <p class="desc-text">低至9.9元</p>
            <div class="goods-area">
              <good-item
                :style="{
                  width: '80px',
                }"
                v-for="index in 2"
                :key="index"
              >
                <template #image>
                  <img
                    :style="{ width: '80px', height: '100px' }"
                    src="../../assets/image/shop/goods/1.png"
                    alt=""
                  />
                </template>
                <template #title>
                  <span :style="{ width: '80px' }"
                    >Keep跳绳减肥基础燃脂跳绳
                    运动健身考试器材男女PVC不缠绕耐磨可调长度 黑色</span
                  >
                </template>
                <template #price>
                  <span :style="{ 'font-size': '16px' }">￥39.00</span>
                </template>
              </good-item>
            </div>
          </div>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar.vue";
import ShopCateItem from "./childComps/ShopCateItem";
import GoodItem from "@/components/content/good/GoodItem";
import Scroll from "@/components/common/scroll/Scroll";
export default {
  components: {
    NavBar,
    ShopCateItem,
    GoodItem,
    Scroll,
  },
  data() {
    return {
      value: "",
      time: 30 * 60 * 60 * 1000,
      // 分类列表
      cateList: [
        {
          id: 1,
          pic: require("../../assets/image/shop/2.webp.jpg"),
          title: "运动装备",
          name: "equipment",
        },
        {
          id: 2,
          pic: require("../../assets/image/shop/2.webp.jpg"),
					title: "轻食代餐",
          name: "healthfood",
        },
        {
          id: 3,
          pic: require("../../assets/image/shop/2.webp.jpg"),
          title: "男子服装",
          name: "malecloths",
        },
        {
          id: 4,
          pic: require("../../assets/image/shop/2.webp.jpg"),
          title: "女子服装",
          name: "femalecloths",
        },
       
      ],
    };
  },
  methods: {
    clickShopCate(cateName) {
			console.log(cateName)
      this.$router.push(`/shop/${cateName}`);
    },
  },
};
</script>

<style lang="less" scoped>
// 公共
.title-text {
  font-size: 16px;
}
.desc-text {
  font-size: 12px;
  color: rgb(199, 199, 199);
}
.content-body {
  margin-top: 72px;
}
// 导航栏
.van-search {
  // margin-top: 72px;
}
// 商品分类
.shop-cate {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 120px;
  background-color: #fff;
  margin-bottom: 20px;
}

// 秒杀
.kill-price-area {
  background-color: #fff;
  padding: 10px 10px 20px 10px;
  border-bottom: 1px solid #eee;
  .kill-price-title {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    > span {
      margin-right: 16px;
    }
    // 倒计时组件的样式
    .colon {
      display: inline-block;
      margin: 0 4px;
      color: #f34545;
    }
    .block {
      display: inline-block;
      width: 22px;
      color: #fff;
      font-size: 12px;
      text-align: center;
      background-color: #f34545;
    }
  }
  .kill-price {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .temp {
    // position: relative;
    width: 106px;
    height: 160px;
    // background-color: #fff;
    content: "";
  }
}

.recommend-area {
  display: flex;
  background-color: #fff;
}
// 拼团抢购,超值秒杀
.together-buy,
.nice-price {
  flex: 1;
  background-color: #fff;
  padding: 4px 4px 10px 4px;
  margin-bottom: 49.984px;

  .goods-area {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}

// scroll的容器高度
.content {
  // height: calc(100vh - 141.98px);
  height: calc(100vh - 121.98px);
  overflow: hidden;
}
</style>