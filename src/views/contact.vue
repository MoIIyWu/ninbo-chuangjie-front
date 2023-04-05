<template>
  <div class="contact">
    <div class="second-nav">
      <div class="bt">联系我们</div>
      <div class="jsh">
        欢迎您浏览我们官网，如果您遇到的问题，请在下方寻找对应的联系方式
      </div>
    </div>
    <div class="contact-info">
      <div class="bt">地址</div>
      <div class="jsh">
        <div class="span">总机：<span>13968311010</span></div>
        <p>地址：浙江省宁波市江北区庄桥街道东邵村</p>
        <p>电话：13586622658</p>
      </div>
    </div>
    <div class="contact-list">
      <ul>
        <li>
          <div class="box">
            <div class="bt">联系我们</div>
            <div class="jsh">
              <p>
                <img
                  src="@/images/wechat1.jpg"
                  alt="1.jpg"
                />
              </p>
            </div>
          </div>
        </li>

        <li>
          <div class="box">
            <div class="bt">联系我们</div>
            <div class="jsh">
              <p>
                <img
                  src="@/images/wechat22.jpg"
                  alt="2.jpg"
                />
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
}
</script>

<style scoped>
.content {
  padding-top: 93px;
  min-height: 500px;
  padding-bottom: 88px;
}

.second-nav {
  margin-top: 40px;
  text-align: center;
}

.second-nav .bt {
  font-size: 40px;
  color: #333;
}

.second-nav .jsh {
  color: #777;

  margin-top: 30px;
  font-size: 20px;
}

.second-nav .jsh span {
  color: #c51f17;
}

.second-nav .jsh1 {
  color: #777;
  font-size: 15px;
  display: none;
}

.contact {
  background: url('../images/contact.png') no-repeat center 205px;
}

.contact .contact-info {
  width: 721px;
  margin: 151px auto 146px auto;
  padding: 20px 20px 48px 20px;
  position: relative;
  background: #fff;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
}

.contact .contact-info .bt {
  font-size: 30px;
  color: #494949;
  font-weight: bold;
  line-height: 35px;
  position: absolute;
  top: 55px;
  left: 70px;
}

.contact .contact-info .jsh {
  padding-left: 200px;
  font-size: 15px;
  color: #333;
  line-height: 36px;
}

.contact .contact-info .jsh .span {
  line-height: 77px;
}

.contact .contact-info .jsh span {
  color: #c51f17;
  font-size: 48px;
  vertical-align: middle;
  font-family: 'DINCond-Bold';
}

.contact .contact-info .jsh:before {
  content: '';
  display: block;
  height: 169px;
  width: 1px;
  background: #dedede;
  position: absolute;
  top: 57px;
  left: 164px;
}

.contact .contact-list {
  padding-bottom: 90px;
  border-bottom: 1px solid #ededed;
  margin-bottom: 90px;
  overflow: hidden;
}

.contact .contact-list ul {
  font-size: 0;
  margin: 0 -20px;
  text-align: center;
}

.contact .contact-list ul li {
  padding: 0 20px;
  width: 33.3333333%;
  display: inline-block;
  vertical-align: top;
}

.contact .contact-list ul li .box {
  padding: 45px 35px;
  overflow: hidden;
  min-height: 331px;
  background: #ededed;
}

.contact .contact-list ul li .bt {
  font-size: 28px;
  color: #333;
  margin-bottom: 21px;
}

.contact .contact-list ul li .jsh {
  font-size: 15px;
  color: #333;
  line-height: 24px;
}

.contact .contact-list ul li .jsh p {
  position: relative;
  padding-left: 0px;
  margin-bottom: 12px;
}

.contact .contact-list ul li .jsh p span {
  position: absolute;
  top: 0;
  left: 0;
}

.contact .contact-list ul li:hover .box {
  background: #c51f17;
}

.contact .contact-list ul li:hover .box .bt {
  color: #fff;
}

.contact .contact-list ul li:hover .box .jsh {
  color: #fff;
}
</style>
