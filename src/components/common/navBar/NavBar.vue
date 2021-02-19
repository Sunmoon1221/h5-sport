<template>
  <div class="warp">
    <div class="nav-bar">
      <div class="left" @click="clickLeft"><slot name="left" ></slot></div>
      <div class="text">
        <span><slot name="text"></slot></span>
      </div>
      <div class="right"><slot name="right"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
	methods: {
		clickLeft() {
			this.$emit('click-left')
		}
	}
};
</script>

<style lang="less" scoped>
.warp {
	position: fixed;
	z-index: 999;
	top: 0;
	left: 0;
	background-color: #fff;
}
.nav-bar {
  display: flex;
  justify-content: space-between;
	align-items: center;
	width: 375px;
  height: 72px;
  background-color: #00a48c;
  border-radius: 0 0 30px 30px;
  padding: 20px;
  box-sizing: border-box;

  .left,
  .right {
    width: 30px;
    height: 30px;
    // background-color: #fff;
  }
  .text {
    font-size: 20px;
    color: #fff;
  }
}
</style>