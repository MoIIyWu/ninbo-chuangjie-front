<template>
  <div class="detail">
    <div class="wrap">
      <div class="container">
        <a v-for="item in groupNameList" :key="item.id">{{ item.groupName }}</a>
      </div>
      <div class="footer">
        <div class="img-content">
          <img
            :src="`${baseUrl}/common/open/download?name=${productDetail.fileUrl}`"
            alt=""
          />
        </div>
        <div class="text">
          <div class="bt">{{ productDetail.fileName }}</div>
          <div class="jsh">
            <p><b>&nbsp;&nbsp;说明</b>：{{ productDetail.manual }}<br /></p>
          </div>
          <div class="button" @click="$router.push('/contact')">
            详情咨询
            <img src="@/assets/more5.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="pro-nav">
      <div class="container">
        <ul>
          <li class="sel">产品参数</li>
        </ul>
      </div>
    </div>
    <div class="img">
      <img
        :src="`${baseUrl}/common/open/download?name=${productDetail.productParam}`"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import { getProductDetail, getAllProductCate } from '@/api/api'
export default {
  name: 'productDetail',
  mounted() {
    this.loadProductDetail()
    this.loadllProductCate()
  },
  data() {
    return {
      id: this.$route.params.id,
      productDetail: {},
      groupNameList: [],
    }
  },
  methods: {
    async loadProductDetail() {
      const res = await getProductDetail(this.id)
      this.productDetail = res.data
    },
    async loadllProductCate() {
      const res = await getAllProductCate()
      this.groupNameList = res.data
    },
  },
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
        // background: #c51f17 url('~@/assets/more5.png') no-repeat right;
        background: #c51f17;
        cursor: pointer;
        img {
          margin-left: 30px;
        }
      }
    }
  }
  .pro-nav {
    background: #5f5f5f;
    .container {
      margin-right: auto;
      margin-left: auto;
      padding-right: 15px;
      padding-left: 30px;
      width: 100%;
      ul {
        li {
          width: 200px;
          text-align: center;
          line-height: 62px;
          border-right: 1px solid #fff;
          color: #fff;
        }
        .sel {
          background: #c51f17;
        }
      }
    }
  }
  .img {
    display: flex;
    justify-content: center;
    img {
      border: 0;
      max-width: 100%;
    }
  }
}
</style>
