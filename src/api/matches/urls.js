import baseUrl from '../baseUrl'
export default {
  matches: baseUrl + '/api/yw/app/case/home-list',
  news : baseUrl + '/api/yw/app/news/home-list',
  teacher: baseUrl+ '/api/yw/app/teacher/home-list',
  question: baseUrl+ '/api/yw/app/troubleshooting/home-list',
//详情页调用api 新闻 案例
  newArt: baseUrl + '/api/yw/app/news/',
  newlistid:baseUrl + '/api/yw/app/news/list-id',
  //调用api 新闻列表
  newsAll:baseUrl+'/api/yw/app/news/list-all',
  //调用api 老师列表
  teacherAll:baseUrl+'/api/yw/app/teacher/list-all',
  //调用api 案例列表
  caseAll:baseUrl+'/api/yw/app/case/list-all',
  //学生信息列表分页
  studentAll:baseUrl+'/api/yw/app/student/list-all',
  //达人信息列表分页
  darenAll:baseUrl+'/api/yw/app/talent/list-all',
  //案例详情页
  caseArt: baseUrl +'/api/yw/app/case/',
  //调用api 热点新闻
  hotlist:baseUrl + '/api/yw/app/news/hot-list',
  //调用api 热点课程
  hotclass:baseUrl+'/api/yw/app/course/home-list',
  StudentA:baseUrl + '/api/yw/app/student/list-best',
  //根据分类调用课程信息
  classCase:baseUrl+'/api/yw/app/course/list-category',
  //首页留言接口
  indexMessage:baseUrl+'/api/yw/app/message/home-save',
  //调用案例展示四条信息
  caseFour:baseUrl + '/api/yw/app/case/list-best',
  //调用案例展示八条
  caseEight:baseUrl+'/api/yw/app/case/list-v',
  //调用公司基本信息
  companyMessage: baseUrl+ '/api/yw/app/cooperation/list-all',
  //公司配置信息
  companyGobel:baseUrl+'/api/yw/app/config/find-value',
  //首页banner
  indexBanner:baseUrl+'/api/yw/app/banner/shuffling'
}
