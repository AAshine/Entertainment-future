import baseUrl from '../baseUrl'
export default {
  matches: baseUrl + '/api/yw/app/case/home-list',
  news : baseUrl + '/api/yw/app/news/home-list',
  teacher: baseUrl+ '/api/yw/app/teacher/home-list',
  question: baseUrl+ '/api/yw/app/troubleshooting/home-list',
//详情页调用api 新闻 案例
  newArt: baseUrl + '/api/yw/app/news/',
  caseArt: baseUrl +'/api/yw/app/case/'
}
