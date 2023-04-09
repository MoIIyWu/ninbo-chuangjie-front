<template>
  <section class="footer">
    <div class="wrap">
      <div class="container">
        <ul class="menu">
          <li
            @click="$router.push('/home')"
            :class="$route.path === '/home' ? 'active' : ''"
          >
            首页
          </li>
          <li
            @click="$router.push('/about')"
            :class="$route.path === '/about' ? 'active' : ''"
          >
            关于我们
          </li>
          <li
            @click="$router.push('/news')"
            :class="$route.path === '/news' ? 'active' : ''"
          >
            新闻中心
          </li>
          <li
            @click="$router.push('/products')"
            :class="$route.path === '/products' ? 'active' : ''"
          >
            产品展示
          </li>
          <li
            @click="$router.push('/application')"
            :class="$route.path === '/application' ? 'active' : ''"
          >
            行业应用
          </li>
          <li
            @click="$router.push('/contact')"
            :class="$route.path === '/contact' ? 'active' : ''"
          >
            联系我们
          </li>
        </ul>
        <div class="footer-contact">
          <p class="p-01">总机</p>
          <p class="tel"><a href="#">13968311010</a></p>
          <!--
                <p class="p-02">                        周一至周日 09:00-20:00
                </p> <p> <span class="span-01"><a href="#">售后服务/投诉处理</a></span> </p>-->
        </div>
      </div>
      <div class="copyright">
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
</template>

<script>
export default {
  name: 'FooterPage',
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 20px;
  background: #333;
  overflow: hidden;
}
.footer .wrap {
  display: flex;
  flex-direction: column;
  .container {
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
    .menu {
      display: flex;
      color: #fff;
      line-height: 26px;
      li {
        margin-right: 50px;
        cursor: pointer;
        font-size: 17px;
        &.active {
          font-weight: bold;
          font-size: 22px;
        }
        &:hover {
          color: #fff;
          text-decoration: underline;
          font-size: 22px;
          margin-bottom: 15px;
          transition: all 0.2s linear;
        }
      }
      a {
        color: #a5a5a5;
        display: block;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
        padding-right: 10px;
      }
    }
    .footer-contact {
      width: 200px;
      font-size: 18px;
      line-height: 30px;
      color: #fff;
      background: url(../assets/service.png) no-repeat left top;
      text-align: right;
      .p-01 {
        font-size: 16px;
      }
      .tel {
        font-size: 20px;
        margin-bottom: 17px;
        a {
          color: #fff;
        }
      }
    }
  }
  .copyright {
    color: #606060;
    padding: 28px 0 34px 0;
    overflow: hidden;
    font-size: 15px;
    border-top: 1px solid #3d3d3d;
    text-align: center;
  }
}
</style>
