<template>
  <div class="class-item">
    <!-- 名称 -->
    <van-row type="flex">
      <van-col span="6">{{ sport.chineseName }}</van-col>
    </van-row>
    <!-- 数据 -->
    <van-row type="flex" justify="space-between">
      <van-col span="10">
        <div class="class-total">
          <span>{{ dataDesc }}</span>
          <span :style="{color:this.theme}">{{ sport.total }} {{ unit }}</span>
        </div>
      </van-col>
      <van-col span="14">
        <div class="chart" ref="chartRef"></div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  props: {
    sport: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      // user: {
      //   username: "cyan",
      //   avatar: require("../../../assets/image/shop/goods/1.png"),
      //   focus: 20,
      //   follower: 50,
      //   artical: 66,
      //   sportData: {
      //     total: 5000,
      //     resume: 12000,
      //     day: 59,
      //     totalDay: 100,
      //     mysports: [
      //       {
      //         name: "run",
      //         chineseName: "跑步",
      //         total: 30,
      //         everyDay: [
      //           { date: "2020-12-2", number: 20 },
      //           { date: "2020-12-3", number: 30 },
      //           { date: "2020-12-4", number: 22 },
      //           { date: "2020-12-5", number: 30 },
      //           { date: "2020-12-5", number: 12 },
      //         ],
      //       },
      //     ],
      //   },
      //   healthData: { weight: 48.6, height: 160 },
      //   myClass: ["run", "yoga", "swim"],
      //   myFav: ["101", "202"],
      //   myBuy: ["001"],
      // },
    };
  },
  computed: {
    // 横坐标数据
    date() {
      // 转换日期 + 截取后四位的数据
      let everyDayArr = [];
      this.sport.everyDay.forEach((item) => {
        let itemArr = item.date.split("-");
        let date = itemArr[1] + "/" + itemArr[2];
        everyDayArr.push(date);
      });
      return everyDayArr.slice(-4);
    },
    // 纵坐标数据
    sportData() {
      let sportDataArr = [];
      this.sport.everyDay.forEach((item) => {
        sportDataArr.push(item.number);
      });
      return sportDataArr.slice(-4);
    },
    // 描述
    dataDesc() {
      switch (this.sport.name) {
        case "run":
          return "总距离";
          break;
        case "exercise":
          return "总时长";
          break;
        case "yoga":
          return "总时长";
          break;
      }
    },
    // 单位
    unit() {
      switch (this.sport.name) {
        case "run":
          return "公里";
          break;
        case "exercise":
          return "分钟";
          break;
        case "yoga":
          return "分钟";
          break;
      }
		},
		// 表格的主题颜色
		theme() {
			 switch (this.sport.name) {
        case "run":
          return "rgba(0, 164, 140, 1)";
          break;
        case "exercise":
          return "rgba(105, 152, 234, 1)";
          break;
        case "yoga":
          return "#925ff6";
          break;
      }
		}
  },
  mounted() {
    let myChart = this.$echarts.init(this.$refs.chartRef);

    // 指定图表的配置项和数据
    let option = {
      xAxis: {
        data: this.date,
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            opacity: 0,
          },
        },
      },
      yAxis: {
        show: false,
      },
      series: [
        {
          name: "运动量",
          type: "bar",
          data: this.sportData,
          itemStyle: {
            color: this.theme,
            borderRadius: [20, 20, 0, 0],
          },
        },
      ],
      barWidth: 20,
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  },
};
</script>

<style lang="less" scoped>
// 我的课程
.class-item {
  padding: 20px;
  background-color: #fff;
	font-size: 18px;
	margin-bottom: 10px;

  .class-total {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    margin-top: 20px;
    color: rgb(184, 184, 184);

    span:last-child {
      margin-top: 6px;
      font-size: 18px;
      color: #00a48c;
    }
  }
  .chart {
    width: 200px;
    height: 100px;
  }
}
</style>