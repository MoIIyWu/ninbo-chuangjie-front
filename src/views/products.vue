<template>
  <div class="wrap">
    <div class="newpro">
      <div class="newpro_l">
        <div class="newpro_lcon">
          <div class="newpro_l_top">产品中心</div>
          <ul>
            <!-- <li v-for="item in productCateList" :key="item.id">
              <i class="fa fa-angle-right"></i>
              <p>{{ item.groupName }}</p>
            </li> -->

            <Menu>
              <template>
                <li
                  v-for="menu in productCateList"
                  :key="menu.id"
                  class="menu_item"
                >
                  <MenuItem :key="menu.id" v-if="!menu.children">{{
                    menu.groupName
                  }}</MenuItem>
                  <!--这部分是如果有孩子节点则会循环这部分操作，所以要单独提取出来-->
                  <!-- <SubMenu v-else>
                    <template #title>{{menu.title}}</template>
                    <template v-for="child in menu.children">
                        <MenuItem>{{child.title}}</MenuItem>
                    </template>
                </SubMenu>-->
                  <ReSubMenu
                    :key="menu.groupName"
                    v-else
                    :data="menu"
                    @getProductGroup="getProductGroup"
                  ></ReSubMenu>
                </li>
              </template>
            </Menu>
          </ul>
          <img src="@/assets/weChatCode.jpg" />
        </div>
      </div>
      <div class="newpro_r">
        <ul class="product-list">
          <li
            v-for="item in productGroup"
            :key="item.id"
            @click="$router.push(`/productDetail/${item.id}`)"
          >
            <img
              :src="`${baseUrl}/common/open/download?name=${item.fileUrl}`"
              alt=""
            />
            <p>{{ item.fileName }}</p>
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
import { getAllProductCateTree, getProductList } from '@/api/api'
import pager from '@/components/Pager.vue'
import Menu from '@/components/Menu.vue'
import MenuItem from '@/components/MenuItem'
import ReSubMenu from '@/components/ReSubMenu'
export default {
  name: 'ProductsShow',
  components: {
    pager,
    Menu,
    MenuItem,
    ReSubMenu,
  },
  data() {
    return {
      productCateList: [],
      productGroup: [],
      pageInfo: {
        page: 1,
        pageSize: 6,
        keyword:
          this.$route.query.keyword == undefined
            ? ''
            : this.$route.query.keyword,
      },
      defaultImg: require('@/assets/erroImg.png'),
      totalPage: '', //总页数
      index: 1, //当前页码,
      initPager: true, //是否立即初始化组件
    }
  },
  mounted() {
    this.loadProductCateTree()
    this.loadProductList()
  },
  methods: {
    async loadProductCateTree() {
      const res = await getAllProductCateTree()
      this.productCateList = res.data
    },
    changeIndex(pagerIndex) {
      this.pageInfo.page = pagerIndex
      this.loadProductList()
    },
    async loadProductList() {
      const res = await getProductList(this.pageInfo)
      this.productGroup = res.data.records
      this.totalPage = res.data.total
    },
    getProductGroup(data) {
      this.productGroup = data.records
      this.totalPage = data.total
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
    // ul li {
    //   padding: 15px 0;
    //   border-bottom: 1px solid #ccc;
    //   padding-left: 20px;
    //   .menu_item {
    //     display: inline;
    //     width: 100%;
    //     color: #000;
    //     transition: all ease 0.4s;
    //   }
    // }
    ul li {
      // padding: 15px 0;
      // border-bottom: 1px solid #ccc;
      // padding-left: 20px;

      .menu_item {
        display: inline;
        width: 100%;
        color: #000;
        transition: all ease 0.4s;
        &:hover {
          background-color: rgb(188, 219, 252);
        }
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
        border: 1px solid #ccc;
        img {
          width: 300px;
          height: 185px;
        }
        p {
          padding: 16px;
          font-size: 16px;
          text-align: center;
        }
      }
    }
  }
}
.paper-page {
  text-align: center;
  padding-bottom: 50px;
}
</style>
