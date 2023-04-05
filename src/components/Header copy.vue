<template>
  <div>
    <!-- 头部 -->
    <header class="header header1">
      <div class="container">
        <div class="logo">
          <a title="宁波市创捷正凯机械设备有限公司"
            ><img src="@/images/logo1.png" alt="宁波市创捷正凯机械设备有限公司"
          /></a>
        </div>
        <div class="header-right">
          <!-- 伸缩式动态搜索框 -->
          <div class="header-search">
            <div class="search-box">
              <a class="search-btn">
                <i class="fa fa-search" aria-hidden="true"></i>
              </a>
              <input type="text" class="search-txt" placeholder="搜索" />
              <div class="search-line"></div>
            </div>
          </div>

          <nav class="nav">
            <ul>
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
          </nav>
        </div>
      </div>
    </header>
    <!-- 中间banner图 -->
    <div class="inbanner">
      <div class="inbanner-slick">
        <div class="item">
          <!-- <img src="~@/images/banner.jpg" alt="" /> -->
          <img src="~@/images/head.jpg" alt="" />
          <div id="Div1"></div>
        </div>
      </div>
      <div class="inbanner-slick-phone">
        <div class="item">
          <!-- <img src="~@/images/banner.jpg" alt="" /> -->
          <img src="~@/images/head.jpg" alt="" />
          <div id="Div2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
}
</script>

<style lang="scss" scoped>
// 导航栏样式
.header {
  z-index: 5;
  height: 120px;
  position: absolute;
  width: 100%;
  transition: 0.5s;
}

.container {
  margin-right: auto;
  margin-left: auto;
  width: 1200px;
}

#container {
  overflow: hidden;
}

.header .container {
  width: 100%;
}

.header .logo {
  padding: 43px 0 0 164px;
  overflow: hidden;
  float: left;
}

.header .logo a {
  display: block;
  position: relative;
}

.header .header-right {
  float: right;
  padding-top: 24px;
}

.header .header-right .header-search {
  float: right;
}

// 伸缩式动态搜索框样式
.header .header-right .header-search .search-line {
  position: absolute;
  // left: 30px;
  bottom: 15px;
  width: 0px;
  height: 2px;
  background-color: rgb(251, 121, 0);
  transition: 0.3s;
  margin: 25px 38px;
}
.header .header-right .header-search .search-box {
  // position: absolute;
  bottom: 30px;
  left: 30px;
  background-color: white;
  box-shadow: 0 2px 25px 0 rgba(0, 0, 0, 0.1);
  height: 40px;
  padding: 10px;
  border-radius: 40px;
  display: flex;
  margin-top: 5px;
  margin-right: 60px;
}
.header .header-right .header-search .search-txt {
  border: none;
  background: none;
  outline: none;
  padding: 0;
  color: #222;
  font-size: 16px;
  line-height: 40px;
  width: 0;
  transition: 0.4s;
}
.header .header-right .header-search .search-btn {
  color: #888888;
  font-size: 24px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.4s;
  margin-top: -10px;
}
.header .header-right .header-search .search-box:hover .search-txt {
  width: 200px;
  padding: 0 12px;
}
.header .header-right .header-search .search-box:hover .search-btn {
  background-color: #fff;
  animation: rotate 0.4s linear;
}
.header .header-right .header-search .search-txt:focus {
  width: 200px;
  padding: 0 12px;
}

.header .header-right .header-search .search-txt:focus + .search-line {
  width: 200px;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.header .header-right .search .btn-search-max {
  z-index: 2;
  position: relative;
}

.header .header-right .search .btn-search-max * {
  display: inline-block;
  vertical-align: middle;
}

.header .header-right .search .search-main {
  top: 120px;
  right: 50%;
  z-index: 9;
  width: 1000px;
  margin-right: -500px;
  display: none;
  padding: 0 30px 0 20px;
  position: absolute;
}

.header .header-right #search-closed {
  right: 0;
  top: 5px;
  max-width: 30px;
  position: absolute;
  cursor: pointer;
}

.header .header-right .nav {
  float: right;
  margin-right: 90px;
}

.header .header-right .nav ul li {
  font-size: 18px;
  cursor: pointer;
  float: left;
  text-transform: capitalize;
  margin-left: 16px;
  list-style: none;
}

.header .header-right .nav ul li {
  display: block;
  transition: all 0.16s;
  line-height: 50px;
  color: #000;
  margin: 0 20px;
  position: relative;
  text-decoration: none;
}

.header .header-right .nav ul .active {
  font-weight: bold;
  font-size: 22px;
}

.header .header-right .nav ul li:hover {
  height: 100px;
  transition: all 1s linear 0;
  font-weight: bold;
  font-size: 22px;
}

.header:hover .logo a:after {
  opacity: 1;
}

.header1 {
  height: 105px;
}

.header1 .logo {
  padding-top: 30px;
}

.header1 .header-right {
  padding-top: 25px;
}

.header1 .header-right .nav ul li .subnav {
  top: 104px;
}

// banner图样式
.inbanner {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.inbanner .inbanner-slick {
  overflow: hidden;
  position: relative;
}

.inbanner .inbanner-slick img {
  text-align: center;
  margin: 0 auto;
  width: 100%;
}

.inbanner #allmap {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.inbanner #allmap .BMap_mask {
  opacity: 0.6;
  background: #000;
  background: transparent;
}

.inbanner #allmap img {
  max-width: initial !important;
  max-height: initial !important;
}

.inbanner #allmap .anchorBL {
  display: none;
}

.inbanner #allmap1 {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.inbanner #allmap1 .BMap_mask {
  opacity: 0.6;
  background: #000;
  background: transparent;
}

.inbanner #allmap1 img {
  max-width: initial;
  max-height: initial;
}

.inbanner #allmap1 .anchorBL {
  display: none;
}

.inbanner .inbanner-slick-phone {
  display: none;
}

.inbanner .inbanner-slick-phone img {
  display: block;
}
</style>
