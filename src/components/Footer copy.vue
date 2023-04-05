<template>
  <div>
    <!-- 底部 -->
    <section class="footer">
      <div class="footer-top">
        <div class="container">
          <ul class="menu">
            <li><a href="Default.aspx" class="bt">首页</a></li>

            <li><a href="abuotus.aspx?ClassID=2" class="bt">关于我们</a></li>

            <li><a href="News.aspx?ClassID=3" class="bt">新闻中心</a></li>

            <li>
              <a href="Product.aspx" class="bt">产品展示</a>

              <a href="product.aspx?typeid=1" title="电磁脉冲阀"> 电磁脉冲阀</a>

              <a href="product.aspx?typeid=2" title="除尘布袋"> 除尘布袋</a>

              <a href="product.aspx?typeid=3" title="除尘配件"> 除尘配件</a>
            </li>

            <li><a href="PicList.aspx?ClassID=5" class="bt">行业应用</a></li>

            <li><a href="lxwm.aspx?ClassID=6" class="bt">联系我们</a></li>
          </ul>
          <div class="footer-contact">
            <p class="p-01">总机</p>
            <p class="tel"><a href="#">13968311010</a></p>
            <!--
                <p class="p-02">                        周一至周日 09:00-20:00
                </p> <p> <span class="span-01"><a href="#">售后服务/投诉处理</a></span> </p>-->
          </div>
        </div>
      </div>
      <div class="link">
        <div class="container"></div>
      </div>
      <div class="copyright">
        <div class="container">
          Copyright © 2023- 2023 宁波市创捷正凯机械设备有限公司&nbsp;&nbsp; All
          rights reserved 备案号：<a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            >浙ICP备2023005381号-1</a
          >
          <p>地址：浙江省宁波市江北区庄桥街道东邵村</p>
          <p>电话： 13586622658</p>
          <p>
            <a href="http://www.400301.com/" target="_blank"
              >腾云建站仅向商家提供技术服务</a
            >&nbsp;&nbsp;<a href="sitemap.xml" target="_blank">网站地图</a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FooterPage',
}
</script>

<style lang="scss" scoped>
// 底部样式

.footer {
  padding: 20px;
  background: #333;
  overflow: hidden;
}

.footer .footer-top {
  padding: 50px 0 50px 0;
  overflow: hidden;
}

.footer .footer-top .menu {
  overflow: hidden;
  width: 75%;
  float: left;
  color: #fff;
  line-height: 26px;
  margin-left: 50px;
}

.footer .footer-top .menu li {
  width: 16.666667%;
  float: left;
}

.footer .footer-top .menu a {
  color: #a5a5a5;
  display: block;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  padding-right: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.footer .footer-top .menu a:hover {
  color: #fff;
  text-decoration: underline;
  padding-left: 5px;
}

.footer .footer-top .menu a {
  font-size: 14px;
}

.footer .footer-top .menu a.bt {
  color: #fff;
  font-size: 20px;
  margin-bottom: 14px;
}

.footer .footer-top .footer-contact {
  width: 300px;
  float: right;
  font-size: 12px;
  line-height: 30px;
  color: #fff;
  background: url(../images/service.png) no-repeat left top;
  padding-left: 70px;
  text-align: right;
}

.footer .footer-top .footer-contact .p-01 {
  font-size: 16px;
  text-align: left;
}

.footer .footer-top .footer-contact .tel {
  font-size: 20px;
  font-family: 'DIN-Light';
  line-height: 1;
  margin-bottom: 17px;
  color: #fff;
  text-align: left;
}

.footer .footer-top .footer-contact .tel a {
  color: #fff;
}

.footer .footer-top .footer-contact .p-02 {
  margin-bottom: 5px;
  text-align: left;
}

.footer .footer-top .footer-contact .span-01 {
  display: block;
  height: 26px;
  line-height: 26px;
  font-size: 12px;
  text-align: center;
  background: #c51f17;
}

.footer .footer-top .footer-contact .span-01 a {
  font-size: 20px;
}

.footer .link {
  color: #bababa;
  overflow: hidden;
  line-height: 30px;
}

.footer .link .container {
  position: relative;
}

.footer .link p {
  padding-left: 74px;
  float: left;
}

.footer .link span {
  position: absolute;
  left: 0;
}

.footer .link a {
  color: #bababa;
  display: block;
  float: left;
  margin-right: 25px;
  max-width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.footer .link a:hover {
  text-decoration: underline;
  color: #fff;
}

.footer .copyright {
  color: #606060;
}

.footer .copyright .container {
  padding: 28px 0 34px 0;
  overflow: hidden;
  font-size: 15px;
  border-top: 1px solid #3d3d3d;
  text-align: center;
}
</style>
