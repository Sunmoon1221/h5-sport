<template>
  <div class="profile">
    <header class="header">
      <div class="header-content">
        <div class="username">
          {{ user.username }}
        </div>
        <div class="userInfo">
          <img :src="user.avatar" alt="" />
          <div class="info">
            <span class="focus">{{ user.focus }}</span>
            <span>关注</span>
          </div>
          <div class="info">
            <span class="follower">{{ user.follower }}</span>
            <span>粉丝</span>
          </div>
          <div class="info">
            <span class="artical">{{ user.artical }}</span>
            <span>动态</span>
          </div>
        </div>
      </div>
    </header>

    <div class="data">
      <van-row type="flex" justify="space-around">
        <van-col span="10">
          <div class="sport-data" @click="changToOtherPage('sportdata')">
            <div class="icon">
							<img src="../../assets/image/profile/sportData.png" alt="">
						</div>
            <p>运动数据</p>
            <div class="detail-data">
              <p>总运动</p>
              <span class="data-text">
                {{ user.sportData.total }} </span
              >分钟
              <!-- <span>分钟</span> -->
            </div>
          </div>
        </van-col>
        <van-col span="10">
          <div class="health-data">
            <div class="icon">
							<img src="../../assets/image/profile/health.png" alt="">
						</div>
            <p>健康数据</p>
            <div class="detail-data">
              <p>体重</p>
              <span class="data-text">
                {{ user.healthData.weight }}
              </span>
              <span>分钟</span>
            </div>
          </div>
        </van-col>
      </van-row>
    </div>

    <!-- 功能 -->
    <div class="feature">
      <van-cell
        size="large"
        icon="location-o"
        title="我的课程"
        is-link
        to="sport"
      />
      <van-cell
        size="large"
        icon="location-o"
        title="身体测试"
        is-link
        to="index"
      />
      <van-cell
        size="large"
        icon="location-o"
        title="我的收藏"
        is-link
        to="index"
      />
      <van-cell
        size="large"
        icon="location-o"
        title="我的订单"
        is-link
        to="index"
      />
      <van-cell
        size="large"
        icon="location-o"
        title="帮助中心"
        is-link
        to="index"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 用户信息
      user: {
        username: "cyan",
        avatar: require("../../assets/image/shop/goods/1.png"),
        focus: 20,
        follower: 50,
        artical: 66,
        sportData: { total: 5000,resume:12000,day:59,totalDay:100,mysports:[{name:'run',chineseName:'跑步',total:30,everyDay:[{date:'2020-12-2',number:20},{date:'2020-12-3',number:10},{date:'2020-12-4',number:22},{date:'2020-12-5',number:12}]}]},
        healthData: { weight: 48.6, height: 160 },
        myClass: ["run", "yoga", "swim"],
        myFav: ["101", "202"],
        myBuy: ["001"],
      },
    };
  },
  methods: {
    changToOtherPage(page) {
      this.$router.push(`/profile/${page}`);
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  background-color: #fff;
}
.header-content {
  position: relative;
  height: 160px;
  background-color: #00a48c;
  border-radius: 0 0 40px 40px;
  padding: 16px;
  box-sizing: border-box;

  // 设置按钮
  &::after {
		position: absolute;
    top: 16px;
    right: 16px;
    content: "";
    width: 32px;
		height:32px;
		background-image: url('../../assets/image/profile/setting.png');
    // background-color: #fff;
  }

  .username {
    color: #fff;
    font-size: 26px;
    margin-bottom: 20px;
    margin-left: 20px;
  }

  .userInfo {
    display: flex;
    justify-content: space-around;
    img {
      width: 70px;
      height: 70px;
      border-radius: 10px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      color: #fff;
      font-size: 20px;
      font-weight: 700;
      padding: 4px;

      span:last-child {
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
}

// 数据
.health-data,
.sport-data {
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #f3f5f4;
  padding: 10px;
  font-size: 12px;
  color: rgb(119, 119, 119);
  > p,
  .data-text {
    font-size: 18px;
    font-weight: 700;
  }

  .icon img{
    height: 30px;
    width: 30px;
    // background-color: red;
  }
}

// feature
.feature {
  font-size: 14px;

  .van-cell__title {
    margin-left: 10px;
  }
}
</style>