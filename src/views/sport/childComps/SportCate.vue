<template>
  <div class="sport-cate">
		<!-- src和span中的内容动态prop -->
    <img class="sport-image" src="../../../assets/image/sports/1.jpg" alt="" />
    <span class="sport-desc">跑步</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
// 每个类别的样式
.sport-cate {
  position: relative;
  margin-bottom: 30px;
  width: 306px;
  height: 100px;
  background-color: #fff;
  border-radius: 10px;

  &::after {
    position: absolute;
    right: 20px;
    top: 15px;
    z-index: 99;
    content: "进入";
    display: block;
    background-color: #fff;
    padding: 4px 6px;
    border-radius: 10px;
    font-size: 16px;
  }

  .sport-image {
    width: 306px;
    height: 100px;
    object-fit: cover;
    border-radius: 14px;
  }

  .sport-desc {
    position: absolute;
    bottom: 32px;
    left: 30px;
    color: rgba(255, 255, 255, 0.733);
    font-weight: 1000;
    font-size: 22px;
  }
}
</style>