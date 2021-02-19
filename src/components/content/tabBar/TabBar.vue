<template>
  <van-tabbar v-model="active" active-color="#00a38b" inactive-color="#cecece" fixed>
    <van-tabbar-item icon="home-o" to="/social">圈子 </van-tabbar-item>
    <van-tabbar-item icon="award-o" to="/sport">运动</van-tabbar-item>
    <van-tabbar-item icon="shop-o" to="/shop">商店</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="/profile">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
	data() {
		return {
			active: 0,
		}
	},
	methods: {
	}
};
</script>

<style>

</style>