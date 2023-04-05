import request from '@/utils/request'

// 关于我们页面的文字部分
export const getAboutText = () => {
  return request({
    method: 'GET',
    url: '/fromWe/open/getAbout',
  })
}

// 商品列表分页
export const getProductList = (page, pageSize, keyword) => {
  return request({
    method: 'GET',
    url: `/product/open/getProduct?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
  })
}
