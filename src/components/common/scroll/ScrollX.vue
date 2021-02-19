<template>
<!-- 父组件使用时要在scroll标签上添加
.hot-class-wrapper {
  width: calc(100vw - 40px);
  overflow: hidden;
  padding: 5px;
}

子元素可能会被挤压 在列表处添加flex-shrink:0
 -->
  <div class="tab" ref="wrapper">
    <div class="tab_content" ref="content">
      <slot></slot>
    </div>
  </div>
</template>
  <script>

import BScroll from "better-scroll";
export default {
  props: {
    // 传入要横向滚动的数组
    itemList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.InitTabScroll();
    });
  },
  methods: {
    InitTabScroll() {
      let width = 0;
      let marginR = 0;
      marginR = getComputedStyle(this.$slots.default[0].elm);

      for (let i = 0; i < this.itemList.length; i++) {
        let itemWidth = this.$slots.default[0].elm.getBoundingClientRect()
          .width;
        console.log(itemWidth);
        width += itemWidth; //getBoundingClientRect() 返回元素的大小及其相对于视口的位置
      }

      // 宽度可能要加上margin
      if (marginR.marginRight) {
        this.$refs.content.style.width =
          width + parseFloat(marginR.marginRight) * this.itemList.length + "px";
      } else {
        this.$refs.content.style.width = width + "px";
      }

      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            startX: 0,
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: "vertical",
          });
        } else {
          this.scroll.refresh();
        }
      });
    },
  },
};
</script>
  <style lang="less" scoped>
.tab_content {
  display: flex;
}
// }
</style>
