<template>
  <div class="login">
    <img src="../../assets/image/login/1.png" alt="" />
    <p class="title">欢迎来到nKeep健身</p>
    <!-- 登录表单 -->
    <van-tabs @change="changeTab" v-model="active" animated>
      <van-tab
        v-for="(item, index) in ['密码登录', '验证码登录']"
        :key="item"
        :title="item"
      >
        <!-- 账号密码登录 -->
        <van-form v-if="index === 0" @submit="onSubmit" ref="loginFormRef">
          <van-field
            clearable
            v-model="loginForm.username"
            name="username"
            placeholder="请输入手机号码"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="loginForm.password"
            type="password"
            name="password"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px">
            <van-button
              :disabled="loginBtnDisabled"
              :color="loginBtnColor"
              round
              block
              type="info"
              native-type="submit"
              >登录</van-button
            >
          </div>
        </van-form>
        <!-- 验证码登录 -->
        <van-form v-if="index === 1" @submit="onSubmit" ref="codeLoginFormRef">
          <van-field
            clearable
            v-model="codeLoginForm.username"
            name="username"
            placeholder="请输入手机号码"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="codeLoginForm.code"
            name="code"
            placeholder="请输入验证码"
            :rules="[{ required: true, message: '请填写密码' }]"
          >
            <template #button>
              <van-button
                v-if="!showCountdown"
                @click="getSmsCode"
                plain
                hairline
                round
                size="small"
                type="primary"
                >发送验证码</van-button
              >
              <van-button
                v-else
                @click="getSmsCode"
                plain
                hairline
                round
                size="small"
                type="primary"
                ><van-count-down
                  :time="time"
                  style="color: #777; font-size: 12px"
                  @finish="countDownFinish"
                  format=" ss 秒后重试"
              /></van-button> </template
          ></van-field>
          <div style="margin: 16px">
            <van-button
              :disabled="loginBtnDisabled"
              :color="loginBtnColor"
              round
              block
              type="info"
              native-type="submit"
              >登录</van-button
            >
          </div>
        </van-form>
      </van-tab>
    </van-tabs>

    <!-- 分割线 -->
    <van-divider
      :style="{
        marginTop: '0px',
        color: '#adacacd4',
        borderColor: '#adacac',
        fontSize: '14px',
      }"
      >其它方式</van-divider
    >
		<!-- 第三方登录 -->
    <div class="oAuth">
      <img src="../../assets/image/login/QQ.png" alt="" />
      <img src="../../assets/image/login/wechat.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // tab默认值
      active: 0,
      // 表单数据
      loginForm: {
        username: "15333333333",
        password: "123456",
      },
      codeLoginForm: {
        username: "",
        code: "",
      },
      // 登录按钮颜色
      loginBtnColor: "#00a48c",
      // 是否显示倒计时
      showCountdown: false,
      //倒计时的时间  毫秒级 60秒要*10000
      time: 60 * 1000,
    };
  },
  methods: {
    onSubmit(values) {
			console.log("submit", values);
			// 向后端发起登录请求
			// token test 
			let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWFAcXEuY29tIiwiaWF0IjoxNjEzMDQ0ODEzLCJleHAiOjE2MTMwNDQ4MjN9.urrT8NW_qxgeQ5MV_hF8t5z61B_PCt-RqrtL0eB4AiM"
			window.sessionStorage.setItem('token',token)
			this.$router.push('/social')
    },
    getSmsCode() {
      this.$refs.codeLoginFormRef[0]
        .validate("username")
        .then((res) => {
          // 验证成功
          // 发送验证码
          this.showCountdown = true;
        })
        .catch((err) => {
          this.showCountdown = false;
        });
    },
    countDownFinish() {
      //倒计时结束后的方法
      this.showCountdown = false; //隐藏倒计时
    },
    changeTab(name) {
      if (name === 0) {
        this.$refs.codeLoginFormRef[0].resetValidation();
        // this.codeLoginForm.username = "";
        // this.codeLoginForm.code = "";
      } else {
        this.$refs.loginFormRef[0].resetValidation();
        // this.loginForm.username = "";
        // this.loginForm.code = "";
      }
    },
  },
  mounted() {},
  computed: {
    loginBtnDisabled() {
      return this.loginForm.username !== "" && this.loginForm.password !== ""
        ? false
        : true;
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  padding: 10px;

  img {
    display: block;
    width: 350px;
    // height: 200px;
    margin: 0 auto;
    border-radius: 10px;
  }

  .title {
    font-size: 20px;
    text-align: center;
    font-weight: 700;
    color: rgb(88, 88, 88);
    margin-bottom: 20px;
  }
}
// 第三方登录
.oAuth {
  padding: 0 20px;
  height: 40px;
  display: flex;

  img {
    width: 40px;
  }
}
// 文本框
// 字体
/deep/.van-field__body .van-field__control {
  font-size: 14px;
}
// 文本框背景颜色
/deep/.van-cell {
  background-color: #f9f9f9;
}
// 隐藏错误信息提示
/deep/.van-field__error-message {
  display: none;
}

// tab
/deep/.van-tab {
  background-color: #f9f9f9;
}
</style>