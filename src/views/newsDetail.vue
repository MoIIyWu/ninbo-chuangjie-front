<template>
  <div class="news-detail wrap">
    <h1 class="title">{{ newsDetailList.title }}</h1>
    <div class="info">
      <span class="date">时间：{{ $moment(newsDetailList.createTime).format('YYYY-MM-DD') }}</span>
      <span class="source">来源 ：{{ newsDetailList.source }}</span>
      <span class="click_count">点击次数： {{ newsDetailList.clickCount }}次</span>
    </div>
    <div class="nr">
      <p v-html="newsDetailList.content">
      </p>
    </div>
    <ul class="list-page-news">
      <li>上一篇：电磁脉冲阀的维护与保养</li>
      <li>下一篇：没有了</li>
    </ul>
  </div>
</template>

<script>
import {getNewsDetail} from '@/api/api'
export default {
  name: 'newsDetail',
  mounted(){
    this.getNewsDetail()
  },
  data() {
    return {
        id: this.$route.params.id,
        newsDetailList:{}
    }
  },
  methods:{
    async getNewsDetail(){
         const res = await getNewsDetail(this.id)
         this.newsDetailList = res.data
    }
  }
}
</script>

<style lang="scss" scoped>
.news-detail {
  margin: 50px auto;
  .title {
    font-size: 40px;
    color: #222;
    text-align: center;
    margin: 20px auto;
  }
  .info {
    display: flex;
    justify-content: space-around;
    padding: 13px 0 0 0;
    line-height: 27px;
    font-size: 14px;
    color: #9f9f9f;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  .nr {
    padding: 34px 0;
    font-size: 15px;
    color: #4f4f4f;
    line-height: 26px;
    p {
      border: 0px;
      margin-top: 0px;
      margin-bottom: 0px;
      padding: 10px 0px 20px;
      color: rgb(25, 25, 25);
      font-family: 'PingFang SC', Arial, 微软雅黑, 宋体, simsun, sans-serif;
      white-space: normal;
      background-color: rgb(255, 255, 255);
    }
  }
  .list-page-news {
    display: flex;
    justify-content: space-between;
    padding: 30px 50px;
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #e7e7e7;
    li {
      text-align: center;
      cursor: pointer;
      &:hover{
        color: rgb(29, 108, 218);
      }
    }
  }
}
</style>
