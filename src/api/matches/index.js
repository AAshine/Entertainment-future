// 有些接口需要在header中添加token或是其他，可以按如下配置。
import api from '../index'
import urls from './urls'
const header = {}
export default {
  matches(params) {
    return api.get(urls.matches,params, header)
  },
  news(params) {
    return api.get(urls.news,params, header)
  },
  teacher(params) {
    return api.get(urls.teacher,params, header)
  },
  question(params) {
    return api.get(urls.question,params, header)
  },
  hotlist(params) {
    return api.get(urls.hotlist,params, header)
  },
  hotclass(params) {
    return api.get(urls.hotclass,params, header)
  },
  //新闻总列表
  newsAll() {
    return urls.newsAll
  },
  //文章详情页
  newArt() {
    // return出去了一个api地址
    return urls.newArt
  },
  caseArt() {
    return urls.caseArt
  }
}
