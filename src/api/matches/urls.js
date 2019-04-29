import baseUrl from '../baseUrl'
export default {
  matches: baseUrl + '/api/yw/app/case/home-list',
  news : baseUrl + '/api/yw/app/news/home-list',
  teacher: baseUrl+ '/api/yw/app/teacher/home-list',
  question: baseUrl+ '/api/yw/app/troubleshooting/home-list',
//详情页调用api 新闻 案例
  newArt: baseUrl + '/api/yw/app/news/',
  //调用api 新闻列表
  newsAll:baseUrl+'/api/yw/app/news/list-all',
  caseArt: baseUrl +'/api/yw/app/case/',
  //调用api 热点新闻
  hotlist:baseUrl + '/api/yw/app/news/hot-list',
  //调用api 热点课程
  hotclass:baseUrl+'/api/yw/app/course/home-list',
}
