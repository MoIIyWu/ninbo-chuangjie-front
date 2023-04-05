<template>
  <div class="detail">
    <div class="wrap">
      <div class="container">
        <a>袋式淹没型</a>
        <a>袋式淹没型</a>
        <a>袋式淹没型</a>
        <a>袋式淹没型</a>
        <a>袋式淹没型</a>
        <a>袋式淹没型</a>
        <a>袋式淹没型</a>
        <a>袋式淹没型</a>
        <a>袋式淹没型</a>
        <a>袋式淹没型</a>
        <a>袋式淹没型</a>
        <a>袋式淹没型</a>
        <a>袋式淹没型</a>
        <a>袋式淹没型</a>
        <a>袋式淹没型</a>
        <a>袋式淹没型</a>
        <a>袋式淹没型</a>
        <a>袋式淹没型</a>
      </div>
      <div class="footer">
        <div class="img-content">
          <img src="@/images/bigImg.jpg" />
        </div>
        <div class="text">
          <div class="bt">DMFY50S</div>
          <div class="jsh">
            <p><b>&nbsp;&nbsp;口径</b>：<br /></p>
          </div>
          <div class="button">
            详情咨询
            <!--<div class="button2"> <a href="#">咨询客服</a> </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productDetail',
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.detail {
  padding: 9px 0;
  background: #ebebeb;
  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 30px;
    margin-bottom: 40px;
    a {
      margin-right: 80px;
      font-size: 17px;
      cursor: pointer;
      &:hover {
        color: red;
      }
    }
  }
  .img-content {
    width: 400px;
    padding: 10px;
    img {
      margin-top: 30px;
      height: 400px;
      border: 1px solid #d0d0d0;
      border-radius: 10px;
      background: #dfdfdf;
    }
  }
  .footer {
    display: flex;
    justify-content: space-evenly;
    background: #fff;
    .text {
      align-items: flex-start;
      padding-top: 81px;
      .bt {
        font-size: 36px;
        color: #333;
        margin-bottom: 8px;
      }

      .jsh {
        font-size: 15px;
        color: #666;
        line-height: 31px;
        margin-bottom: 27px;
      }
      .button {
        width: 200px;
        height: 50px;
        margin-right: 21px;
        font-size: 20px;
        text-align: center;
        line-height: 50px;
        color: #ebebeb;
        background: #c51f17 url('~@/images/more5.png') no-repeat right;
      }
    }
  }
}
</style>
