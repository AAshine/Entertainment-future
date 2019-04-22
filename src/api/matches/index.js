// 有些接口需要在header中添加token或是其他，可以按如下配置。
import api from '../index'
import urls from './urls'
const header = {}

export default {
  matches(params) {
    // return出去了一个promise
    return api.get(urls.matches,params, header)
  },
  news(params) {
    // return出去了一个promise
    return api.get(urls.news,params, header)
  },
  teacher(params) {
    // return出去了一个promise
    return api.get(urls.teacher,params, header)
  },
  question(params) {
    // return出去了一个promise
    return api.get(urls.question,params, header)
  }
}
