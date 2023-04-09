<template>
  <div class="wrap">
    <div class="newpro">
      <div class="newpro_l">
        <div class="newpro_lcon">
          <div class="newpro_l_top">产品中心</div>
          <ul>
            <li v-for="(item, index) in productCateList" :key="index">
              <i class="fa fa-angle-right"></i>
              <p>{{ item }}</p>
            </li>
          </ul>
          <img src="@/assets/weChatCode.jpg" />
        </div>
      </div>
      <div class="newpro_r">
        <ul class="product-list">
          <li>
            <img src="@/assets/product.jpg" alt="" />
          </li>
          <li>
            <img src="@/assets/product.jpg" alt="" />
          </li>
          <li>
            <img src="@/assets/product.jpg" alt="" />
          </li>
          <li>
            <img src="@/assets/product.jpg" alt="" />
          </li>
          <li>
            <img src="@/assets/product.jpg" alt="" />
          </li>
          <li>
            <img src="@/assets/product.jpg" alt="" />
          </li>
        </ul>
      </div>
    </div>
    <pager
      class="paper-page"
      :totalPage="totalPage"
      :index="index"
      @changeIndex="changeIndex"
      v-if="initPager"
    ></pager>
  </div>
</template>

<script>
import { getProductCate } from '@/api/api'
import pager from '@/components/Pager.vue'
export default {
  name: 'ProductsShow',
  components: {
    pager,
  },
  data() {
    return {
      productCateList: [],
      defaultImg: require('@/assets/erroImg.png'),
      totalPage: 10, //总页数
      index: 1, //当前页码,
      initPager: true, //是否立即初始化组件
    }
  },
  mounted() {
    this.loadProductCate()
  },
  methods: {
    async loadProductCate() {
      const res = await getProductCate()
      this.productCateList = res.data
    },
    changeIndex() {
      //当页码放生改变时你想要做什么
    },
  },
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
    ul li {
      padding: 15px 0;
      border-bottom: 1px solid #ccc;
      padding-left: 20px;
      p {
        display: inline;
        width: 100%;
        color: #000;
        transition: all ease 0.4s;
      }
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
.paper-page {
  text-align: center;
  padding-bottom: 50px;
}
</style>
