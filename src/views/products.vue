<template>
  <div class="wrap">
    <div class="newpro">
      <div class="newpro_l">
        <div class="newpro_lcon">
          <div class="newpro_l_top">产品中心</div>
          <ul>
            <li>
              <a><i class="fa fa-angle-right"></i> 电磁脉冲阀 </a>
              <div class="prodrop">
                <a> 袋式淹没型 </a>
              </div>
            </li>
          </ul>
          <img src="@/images/weChatCode.jpg" />
        </div>
      </div>
      <div class="newpro_r">
        <ul class="product-list">
          <li>
            <img src="@/images/product.jpg" alt="" />
          </li>
          <li>
            <img src="@/images/product.jpg" alt="" />
          </li>
          <li>
            <img src="@/images/product.jpg" alt="" />
          </li>
          <li>
            <img src="@/images/product.jpg" alt="" />
          </li>
          <li>
            <img src="@/images/product.jpg" alt="" />
          </li>
          <li>
            <img src="@/images/product.jpg" alt="" />
          </li>
          <li>
            <img src="@/images/product.jpg" alt="" />
          </li>
          <li>
            <img src="@/images/product.jpg" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsShow',
}
</script>

<style lang="scss" scoped>
.newpro {
  margin: 100px 20px;
  display: flex;
  justify-content: space-between;
  .newpro_l {
    width: 20%;
    .newpro_lcon {
      border: 1px solid #ccc;
      .newpro_l_top {
        width: 100%;
        height: 60px;
        line-height: 60px;
        padding-left: 20px;
        color: #fff;
        font-size: 30px;
        background-color: #c51f17;
      }
    }
    ul li a {
      width: 100%;
      display: block;
      padding: 15px 0;
      border-bottom: 1px solid #ccc;
      color: #000;
      padding-left: 20px;
      transition: all ease 0.4s;
    }
  }

  .newpro_r {
    width: 80%;
    .product-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-left: 20px;
      li {
        width: 300px;
        margin-bottom: 20px;
        cursor: pointer;
      }
    }
  }
}
</style>
