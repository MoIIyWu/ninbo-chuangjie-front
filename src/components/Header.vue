<template>
  <div class="header">
    <div class="wrap">
      <div class="logo">
        <a title="宁波市创捷正凯机械设备有限公司"
          ><img
            src="@/assets/20230328205810.png"
            alt="宁波市创捷正凯机械设备有限公司"
        /></a>
      </div>
      <div class="header-right">
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
        <!-- 伸缩式动态搜索框 -->
        <div class="header-search" @keyup.enter="onSearchProduct">
          <div class="search-box">
            <a class="search-btn">
              <i class="fa fa-search" aria-hidden="true"></i>
            </a>
            <input
              v-model="pageInfo.keyword"
              type="text"
              class="search-txt"
              placeholder="搜索产品"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
  data() {
    return {
      pageInfo: {
        page: 1,
        pageSize: 6,
        keyword: '',
      },
    }
  },
  methods: {
    async onSearchProduct() {
      this.$router.push({
        path: '/products',
        query: { keyword: `${this.pageInfo.keyword}` },
      })
      this.pageInfo.keyword = ''
    },
  },
}
</script>

<style lang="scss" scoped>
// 导航栏样式
.header {
  background: url('@/assets/head.jpg') no-repeat;
  background-size: cover;
}
.header .wrap {
  display: flex;
  justify-content: space-between;
  height: 120px;
  .logo {
    align-self: center;
  }
  .header-right {
    display: flex;
    justify-content: space-between;

    .nav {
      display: flex;
      justify-content: space-between;

      margin-right: 30px;
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
          font-size: 17px;
          cursor: pointer;
          color: #000;
          margin: 0 15px;
          &.active {
            font-weight: bold;
            font-size: 22px;
          }
          &:hover {
            transition: all 0.2s linear;
            font-weight: bold;
            font-size: 22px;
          }
        }
      }
    }
    .header-search {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .search-box {
        position: relative;
        background-color: white;
        box-shadow: 0 2px 25px 0 rgba(0, 0, 0, 0.1);
        height: 40px;
        padding: 10px;
        border-radius: 40px;
        display: flex;
        margin-right: 60px;

        &:hover .search-txt {
          width: 150px;
        }
        .search-txt {
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
        .search-btn {
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
      }
    }
  }
}
</style>
