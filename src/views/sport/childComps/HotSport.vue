<template>
	<div class="hot-class"> 
		<div class="class-image"><slot name="image"></slot></div>
		<div class="class-title"><slot name="title"></slot></div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.hot-class {
    height: 200px;
    width: 140px;
    margin-right: 20px;
    position: relative;
    border-radius: 10px;

    .class-image img{
      height: 200px;
      width: 140px;
      border-radius: 10px;
    }
    .class-title {
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 16px;
      color: rgba(255, 255, 255, 0.76);
    }
  }
</style>