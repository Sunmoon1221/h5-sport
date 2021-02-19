<template>
  <div>
    <!-- 导航 -->
    <nav-bar @click-left="clickLeft">
      <template  #left><van-icon  color="#fff" name="arrow-left" /></template>
      <template #text>跑步计划</template>
    </nav-bar>

    <!-- 主体 -->
    <div class="body-content">
      <!-- 选择器 -->
      <div class="picker-title">
        <span>跑步距离</span> <span>完成天数</span>
      </div>
      <van-picker
        :columns="columns"
        @change="onChange"
        visible-item-count="4"
      />

      <!-- 保存计划按钮 -->
      <van-button @click="clickSave" round color="#00a48c" size="large">保存计划</van-button>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      columns: [
        // 第一列
        {
          values: ["10KM", "20KM", "30KM", "40KM", "50KM"],
          defaultIndex: 1,
        },
        // 第二列
        {
          values: ["2天", "3天", "5天", "10天", "20天"],
          defaultIndex: 1,
        },
      ],
    };
  },
  methods: {
    onConfirm(value, index) {},
    onChange(picker, value, index) {
      console.log(value);
    },
		onCancel() {},
		
		clickSave() {
			this.$toast.success('保存成功');
		},
		clickLeft() {
			this.$router.push('/sport')
		}
  },
};
</script>

<style lang="less" scoped>
.body-content {
	margin-top: 72px;
	background-color: #fff;
	height: 100vh;
}
// picker
.picker-title {
  padding-top: 40px;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  color: rgb(95, 95, 95);
  font-size: 18px;
}
/deep/.van-picker__columns {
  // margin-top: 72px;
  height: 200px;
}
/deep/.van-button--round {
  display: block;
  width: 240px;
  margin: 60px auto;
}
</style>