import request from '@/utils/request'

// 商品列表分页
// export const getProductList = (page, pageSize, keyword) => {
//   return request({
//     method: 'GET',
//     url: `/product/open/getProduct?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
//   })
// }


// 首页内容
export const getProductList = (data) => {
  return request({
    method:'post',
    url:'/product/open/getProduct',
    data
  })
}


// 关于我们页面的文字部分
export const getAboutText = () => {
  return request({
    method: 'GET',
    url: '/fromWe/open/getAbout',
  })
}

// 新闻中心
export const getNewsList = (data) => {
  return request({
    method: 'post',
    url: '/news/open/queryByPage',
    data
  })
}

// 查询商品分类
export const getProductCate = () => {
  return request({
    method: 'get',
    url: '/product/open/getProductType',
  })
}