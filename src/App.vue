<template>
  <div id="app">
    <div class="content">
			<router-view></router-view>
		</div>
    <!-- tabbar -->
		<!-- 登录页不显示tabbar -->
    <tab-bar v-if="$route.fullPath!=='/login'"></tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/content/tabBar/TabBar";
export default {
  data() {
    return {};
  },
  components: {
    TabBar,
  },
	methods: {},
	created() {
		console.log(this.$route)
	}
};
</script>

<style lang="less">
@import url("./assets/css/normalize.css");
@import url("./assets/css/global.css");
.content {
	overflow: hidden;
}
</style>
