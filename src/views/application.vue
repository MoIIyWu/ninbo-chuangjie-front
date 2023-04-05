<template>
  <div class="wrap">
    <div class="application">
      <div class="second-nav">
        <div class="bt">行业应用</div>
        <div class="jsh">CASE</div>
      </div>
      <ul class="case-list">
        <li>
          <div class="pic">
            <img
              src="@/images/industry.jpg"
              alt=""
              style="height: 100%; width: 100%"
            />
          </div>
          <div class="text">
            <div class="bt">电磁脉冲阀的适用领域</div>
            <div class="jsh">
              电磁是袋式除尘器清灰系统控制压缩空气的开关，受脉冲控制仪输出信号的控制，依次对滤袋进行喷吹清灰，使除尘器的阻力在设定范围内，以除尘器的除尘效率；直角式脉冲电磁阀工作原理进出口之间的夹角为90度，适合储气筒和除尘器喷吹管的安装连接，气流畅通，能提供符合要求的脉冲气流。造纸、木工、染料厂、除尘器及石油化工等设备配套及相关行业自动控制的产品，是布袋除尘、吹灰系统的产品。
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndustryApplication',
}
</script>

<style lang="scss" scoped>
.application {
  margin: 20px;
  .second-nav {
    text-align: center;
    margin-top: 40px;
    font-size: 40px;
    color: #333;
    padding-bottom: 100px;
    .jsh {
      color: #777;
      font-size: 15px;
    }
  }
  .case-list li {
    // width: 25%;
    // float: left;
    width: 600px;
    // height: 600px;
    padding: 0 6px;
    margin-bottom: 80px;
    img {
      width: 100%;
    }
    .text {
      padding-top: 25px;
      .bt {
        color: #333;
        font-size: 20px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-bottom: 6px;
      }
      .jsh {
        font-size: 15px;
        color: #666;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
}
</style>
