<template>
  <div class="hello">
    <div id="waveEchart" ref="waveEchart" class="wave-echart"></div>
  </div>
</template>

<script>
import chart from "echarts-liquidfill";
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  mounted() {
    this.initWave("waveEchart");
  },
  methods: {
    initWave(ref) {
      // this.log("hello");
      let _this = this;
      setTimeout(() => {
        _this.chart = this.$echarts.init(_this.$refs[ref]);
        // 把配置和数据放这里
        _this.chart.setOption({
          title: {
            // 标题
            text: "补贴资金剩余",
            textStyle: {
              // 标题的样式
              color: "#888", // 字体颜色
              fontFamily: "Microsoft YaHei", // 字体
              fontSize: 14,
              fontWeight: "400",
              align: "center", // 文字的水平方式
              baseline: "middle",
              position: "inside",
              verticalAlign: "middle" // 文字的垂直方式
            },
            left: "center", // 定位
            top: "20%"
          },
          series: [
            {
              type: "liquidFill",
              radius: "95%",
              waveAnimation: true,
              data: [
                {
                  value: 0.6,
                  direction: "left",
                  itemStyle: {
                    normal: {
                      color: "#1890ff"
                    }
                  }
                }
              ],
              outline: {
                // show: true , //是否显示轮廓 布尔值
                borderDistance: 1, // 外部轮廓与图表的距离 数字
                itemStyle: {
                  borderColor: "#1890ff", // 边框的颜色
                  borderWidth: 3 // 边框的宽度
                  // shadowBlur: 5 , //外部轮廓的阴影范围 一旦设置了内外都有阴影
                  // shadowColor: '#000' //外部轮廓的阴影颜色
                }
              },
              itemStyle: {
                opacity: 0.9, // 波浪的透明度
                shadowBlur: 0 // 波浪的阴影范围
              },
              backgroundStyle: {
                color: "#fff" // 图表的背景颜色
              },
              label: {
                // 数据展示样式
                show: true,
                color: "#000",
                insideColor: "#fff",
                fontSize: 20,
                fontWeight: 400,
                align: "center",
                baseline: "middle",
                position: "inside"
              }
            }
          ]
        });
      }, 0);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wave-echart {
  margin: 0 auto;
  width: 200px;
  height: 200px;
}
</style>
