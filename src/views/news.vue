<template>
  <div class="wrap">
    <div class="second-nav">
      <div>新闻中心</div>
      <div class="jsh">NEWS</div>
    </div>
    <ul class="news-list">
      <li class="news-box" v-for="item in newsList" :key="item.id">
        <img
          v-imagerror="defaultImg"
          :src="`${baseUrl}/common/open/download?name=${item.fileUrl}`"
          class="middleCenter"
          alt=""
        />
        <div class="text">
          <!-- <div class="date">{{ item.createTime }}</div> -->
          <div class="date">
            {{ $moment(item.createTime).format('YYYY-MM-DD') }}
          </div>
          <div class="bt">{{ item.title }}</div>
          <div class="jsh" v-html="item.content"></div>
          <div class="more"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getNewsList } from '@/api/api'
export default {
  name: 'NewsCenter',
  data() {
    return {
      pageInfo: {
        page: 1,
        pageSize: 5,
        keyword: '',
      },
      newsList: [],
      defaultImg: require('@/assets/erroImg.png'),
    }
  },
  mounted() {
    this.loadNewsList()
  },
  methods: {
    async loadNewsList() {
      const res = await getNewsList(this.pageInfo)
      console.log(res.data.records)
      this.newsList = res.data.records
    },
  },
}
</script>

<style lang="scss" scoped>
.second-nav {
  text-align: center;
  margin-top: 40px;
  font-size: 40px;
  color: #333;
  .jsh {
    color: #777;
    font-size: 15px;
  }
}
.news-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto 100px;
  padding-top: 50px;
  padding-bottom: 80px;
  .news-box {
    width: 300px;
    margin-bottom: 25px;
    cursor: pointer;
    &:hover {
      background-color: #fff;
      box-shadow: 5px 5px 5px 5px #777;
      transition: all 1s;
      .middleCenter {
        scale: 1.1;
        transition: all 2s;
      }
      .text {
        .more {
          background-color: rgb(208, 65, 65);
        }
      }
    }
    img {
      width: 300px;
      height: 300px;
    }

    .middleCenter {
      padding: 18px;
    }

    .text {
      padding: 0px 15px 30px 15px;
      transition: 0.5s;
      background: #fff;
      .more {
        background: url(../assets/more1.png) no-repeat center center;
        border: 1px solid #e0e0e0;
        width: 50px;
        height: 50px;
        margin: 8px;
        float: right;
      }
      .date {
        font-size: 18px;
        color: #1c1c1c;
        font-family: arial;
        margin-bottom: 10px;
      }
      .bt {
        font-size: 20px;
        color: #252525;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-bottom: 8px;
      }
      .jsh {
        font-size: 16px;
        color: #575757;
        line-height: 25px;
        height: 48px;
        overflow: hidden;
      }
    }
  }
}
</style>
