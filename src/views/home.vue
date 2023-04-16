<template>
  <div class="container">
    <ul class="wrap">
      <li v-for="item in productList" :key="item.id" @click="$router.push(`/productDetail/${item.id}`)">
        <img v-imagerror="defaultImg" :src="`${baseUrl}/common/open/download?name=${item.fileUrl}`" alt="" />
        <p>{{ item.fileName }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { getProductList } from '@/api/api'
export default {
  name: 'HomePage',
  data() {
    return {
      defaultImg: require('@/assets/erroImg.png'),
      pageInfo: {
        page: 1,
        pageSize: 6,
        keyword: '',
      },
      productList:[]
    }
  },
  mounted() {
    this.loadProductList()
  },
  methods: {
    async loadProductList() {
      const res = await getProductList(this.pageInfo)
      this.productList = res.data.records
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li {
      margin: 15px 10px;
      border: 1px solid #ccc;
      cursor: pointer;
      img {
        width: 280px;
        height: 300px;
      }
      p {
        padding: 16px;
        font-size: 16px;
        text-align: center;
      }
    }
  }
}
</style>
