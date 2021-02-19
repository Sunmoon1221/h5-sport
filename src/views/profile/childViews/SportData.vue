<template>
  <div class="sport-data">
    <!-- 导航栏 -->
    <nav-bar @click-left="clickLeft">
      <template #left><van-icon color="#fff" name="arrow-left" /></template>
      <template #text>运动数据</template>
    </nav-bar>
    <div class="content-body">
      <!-- 总数据 -->
      <div class="total">
        <!-- 头像 -->
        <div class="userInfo">
          <van-row type="flex" align="center">
            <van-col span="6" offset="">
              <img class="avatar" :src="user.avatar" alt="" />
            </van-col>
            <van-col span="10">总运动</van-col>
            <van-col span="8"
              ><span class="time">{{ user.sportData.total }}</span>
              分钟</van-col
            >
          </van-row>
        </div>
        <!-- 数据 -->
        <div class="total-data">
          <van-row type="flex" justify="space-between">
            <van-col span="6">
              <div class="total-item">
                <span>{{ user.sportData.resume }}</span>
                <span>消耗/千卡</span>
              </div>
            </van-col>
            <van-col span="6">
              <div class="total-item">
                <span>{{ user.sportData.day }}</span>
                <span>连续/天</span>
              </div>
            </van-col>
            <van-col span="6">
              <div class="total-item">
                <span>{{ user.sportData.totalDay }}</span>
                <span>累积/天</span>
              </div>
            </van-col>
          </van-row>
        </div>
      </div>

      <!-- 我的课程 -->
      <div class="my-class">
        <div class="class-item">
          <sport-data-item
            :sport="item"
            v-for="item in myClass"
            :key="item.id"
          ></sport-data-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar.vue";
import SportDataItem from "../childComps/SportDataItem";

export default {
  components: {
    NavBar,
    SportDataItem,
  },
  data() {
    return {
      user: {
        username: "cyan",
        avatar: require("../../../assets/image/shop/goods/1.png"),
        focus: 20,
        follower: 50,
        artical: 66,
        sportData: {
          total: 5000,
          resume: 12000,
          day: 59,
          totalDay: 100,
          mysports: [
            {
              id: 1001,
              name: "run",
              chineseName: "跑步",
              total: 30,
              everyDay: [
                { date: "2020-12-2", number: 20 },
                { date: "2020-12-3", number: 30 },
                { date: "2020-12-4", number: 22 },
                { date: "2020-12-5", number: 30 },
                { date: "2020-12-5", number: 12 },
              ],
            },
            {
              id: 1002,
              name: "exercise",
              chineseName: "健身",
              total: 199,
              everyDay: [
                { date: "2020-12-2", number: 30 },
                { date: "2020-12-3", number: 10 },
                { date: "2020-12-4", number: 20 },
                { date: "2020-12-5", number: 30 },
                { date: "2020-12-5", number: 12 },
              ],
            },
            {
              id: 1003,
              name: "yoga",
              chineseName: "瑜伽",
              total: 222,
              everyDay: [
                { date: "2020-12-2", number: 11 },
                { date: "2020-12-3", number: 20 },
                { date: "2020-12-4", number: 33 },
                { date: "2020-12-5", number: 30 },
                { date: "2020-12-5", number: 90 },
              ],
            },
          ],
        },
        healthData: { weight: 48.6, height: 160 },
        myClass: ["run", "yoga", "swim"],
        myFav: ["101", "202"],
        myBuy: ["001"],
      },
    };
  },
  computed: {
    myClass() {
      return this.user.sportData.mysports;
    },
  },
  created() {},
  mounted() {},
  methods: {
    clickLeft() {
      this.$router.back();
    },
  },
};
</script>

<style lang="less" scoped>
.content-body {
  margin-top: 72px;
  font-size: 16px;
  color: rgb(144, 144, 144);
}

/* 头部整块区域 */
.total {
  background-color: #fff;
  padding: 10px;

  .userInfo img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .total-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;
    height: 50px;

    span:first-child {
      color: rgb(78, 78, 78);
    }
    span:last-child {
      font-size: 12px;
    }
  }
}
.time {
  font-size: 30px;
  color: #000;
  font-weight: 700;
}
// 我的课程
.my-class {
  margin-top: 16px;
}
</style>