<template>
  <div class="focus">
    <scroll class="content">
      <article class="tab-item">
        <!-- 头部 -->
        <section class="user-info">
          <div class="user">
            <!-- 头像 -->
            <van-image
              round
              width="1.5rem"
              height="1.5rem"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <!-- 昵称 -->
            <span>爱健身的小仙女</span>
          </div>
          <span class="upload-time"> 5分钟前 </span>
        </section>
        <!-- 内容 -->
        <section class="user-content">
          <p>
            健身是一种体育项目，如各种徒手健美操、韵律操、形体操以及各种自抗力动作，体操，瑜伽可以增强力量、柔韧性，增加耐力，提高协调，控制身体各部分的能力，从而使身体强健。如果要达到缓解压力的目的，至少一周锻炼3次。
          </p>
        </section>
        <!-- 评论点赞分享 -->
        <section class="user-func"></section>
      </article>
      <article class="tab-item">
        <!-- 头部 -->
        <section class="user-info">
          <div class="user">
            <!-- 头像 -->
            <van-image
              round
              width="1.5rem"
              height="1.5rem"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <!-- 昵称 -->
            <span>爱健身的小仙女</span>
          </div>
          <span class="upload-time"> 5分钟前 </span>
        </section>
        <section class="user-content">
          <p>
            健身是一种体育项目，如各种徒手健美操、韵律操、形体操以及各种自抗力动作，体操，瑜伽可以增强力量、柔韧性，增加耐力，提高协调，控制身体各部分的能力，从而使身体强健。如果要达到缓解压力的目的，至少一周锻炼3次。
          </p>
        </section>
      </article>
      <article class="tab-item">
        <!-- 头部 -->
        <section class="user-info">
          <div class="user">
            <!-- 头像 -->
            <van-image
              round
              width="1.5rem"
              height="1.5rem"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <!-- 昵称 -->
            <span>爱健身的小仙女</span>
          </div>
          <span class="upload-time"> 5分钟前 </span>
        </section>
        <section class="user-content">
          <p>
            健身是一种体育项目，如各种徒手健美操、韵律操、形体操以及各种自抗力动作，体操，瑜伽可以增强力量、柔韧性，增加耐力，提高协调，控制身体各部分的能力，从而使身体强健。如果要达到缓解压力的目的，至少一周锻炼3次。
          </p>
        </section>
      </article>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
export default {
  components: {
    Scroll,
  },
};
</script>

<style lang="less" scoped>
// @clientHeight: widows.innerHeight;
.focus {
  // height: calc(100vh - 185.984px);
  // overflow-y: scroll;
}
// 关注的样式
.tab-item {
  width: 100%;
  background-color: #fff;
  // margin-bottom: 20px;
  // 用户信息-头部
  .user-info {
    display: flex;
    padding: 40px 10px 0;
    justify-content: space-between;
    align-items: center;
    height: 36px;

    // 头像昵称
    .user {
      display: flex;
      align-items: center;

      span {
        margin-left: 10px;
        font-size: 16px;
      }
    }

    .upload-time {
      font-size: 14px;
      color: rgb(160, 158, 158);
    }
  }
  .user-content {
    padding: 20px;
    p {
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 16px;
      color: rgb(160, 158, 158);
      line-height: 1.5;
    }
  }
}
// scroll的容器高度
.content {
  height: calc(100vh - 185.984px);
  overflow: hidden;
}
</style>