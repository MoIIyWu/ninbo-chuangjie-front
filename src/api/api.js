import request from '@/utils/request'

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

// 新闻详情
export const getNewsDetail = (id) => {
  return request({
    method:'get',
    url:`/news/open/${id}`
  })
}

// 查询所有商品分类
export const getAllProductCate = () => {
  return request({
    method: 'get',
    url: 'group/open/getAllGroupName',
  })
}

// 查看商品详情
export const getProductDetail = (id) => {
  return request({
    method: 'get',
    url: `product/open/getProductById/${id}`,
  })
}

// 查询所有商品分类(父级和子级)
export const getAllProductCateTree = () => {
  return request({
    method: 'get',
    url: 'group/open/getAllGroup',
  })
}

// 根据分类查询商品
export const getProductPageByGroup = (pageNum,pageSize,groupId) => {
  return request({
    method: 'get',
    url: `product/open/getProductPageByGroup?pageNum=${pageNum}&pageSize=${pageSize}&groupId=${groupId}`,
  })
}