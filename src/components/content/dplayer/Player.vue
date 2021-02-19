<template>
  <div id="player" ref="vedioRef"></div>
</template>

<script>
import DPlayer from "dplayer";
export default {
  props: {
    videoUrl: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      dp: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.dp) {
        this.dp = new DPlayer({
          container: this.$refs.vedioRef,
          video: {
            url: this.videoUrl,
          },
        });
      }
    });
  },
};
</script>

<style lang="less" scoped>
.player {
  // width: 140px;
  // height: 200px;
	// background-color: red;
	flex-shrink: 0;
}

</style>