<template>
<!-- 商城分类 -->
  <div class="shop-cate-item">
    <div class="image"><slot name="image"></slot></div>
    <div class="title"><slot name="title"></slot></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.shop-cate-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60px;
  height: 80px;

  .image img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: 0px 0px 6px rgb(231, 230, 230);
    //  margin-bottom: 10px;
  }
  .title {
    font-size: 14px;
  }
}
</style>