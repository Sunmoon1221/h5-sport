<template>
  <div class="good-item">
    <div class="good-info" style="">
      <div class="image">
        <slot name="image"></slot>
      </div>
      <div class="title">
        <slot name="title"></slot>
      </div>
    </div>
    <div class="price"><slot name="price"></slot>
		<slot name="feature"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    picWidth: {
      type: String,
      default: "",
    },
    picHeight: {
      type: String,
      default: "",
    },
    itemHeight: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="less" scoped>
.good-item {
  // width: 106px;
  // height: 170px;
  background-color: #fff;
  border-radius: 10px;
  // margin-top: 10px;

  .good-info {
    // width: 106px;
    // height: 140px;
    // overflow: hidden;

    font-size: 0;
    .image img {
      width: 106px;
      height: 104px;
      border-radius: 10px;
    }
    .title span {
      display: inline-block;
      // white-space: wrap;
      font-size: 14px;
			line-height: 1.5;
			padding: 4px;

      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  .price {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 4px;
	}
  .price span {
    display: inline-block;
    margin-top: 10px;
    color: #e57171;
		font-size: 18px;
		
		&:nth-child(2) {
			font-size: 12px;
			color: rgb(184, 184, 184);
		}
  }
}
</style>