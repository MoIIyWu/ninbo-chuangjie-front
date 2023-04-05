<template>
  <div class="container">
    <ul class="wrap">
      <li>
        <img src="@/images/test.jpg" alt="" />
        <p>DMFY40SC</p>
      </li>
      <li>
        <img src="@/images/test.jpg" alt="" />
        <p>DMFY40SC</p>
      </li>
      <li>
        <img src="@/images/test.jpg" alt="" />
        <p>DMFY40SC</p>
      </li>
      <li>
        <img src="@/images/test.jpg" alt="" />
        <p>DMFY40SC</p>
      </li>
      <li>
        <img src="@/images/test.jpg" alt="" />
        <p>DMFY40SC</p>
      </li>
      <li>
        <img src="@/images/test.jpg" alt="" />
        <p>DMFY40SC</p>
      </li>
      <li>
        <img src="@/images/test.jpg" alt="" />
        <p>DMFY40SC</p>
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
      page: 1,
      pageSize: 5,
      keyword: '',
    }
  },
  mounted() {
    this.loadProductList()
  },
  methods: {
    async loadProductList() {
      const res = await getProductList(this.page, this.pageSize, this.keyword)
      console.log(res, '商品列表')
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
      margin: 30px 10px;
      border: 1px solid #ccc;
      cursor: pointer;
      img {
        width: 300px;
        height: 330px;
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
