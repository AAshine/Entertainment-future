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
  newlistid(params) {
    return api.get(urls.newlistid,params, header)
  },
  //获取24条优秀学生的信息
  StudentA(params){
    return api.get(urls.StudentA,params, header)
  },
  //4 条案例
  caseFour(params){
    return api.get(urls.caseFour,params, header)
  },
  companyMessage(params){
    return api.get(urls.companyMessage,params, header)
  },
    //8 条案例
  caseEight(params){
    return api.get(urls.caseEight,params, header)
  },
  //新闻总列表分页
  newsAll() {
    return urls.newsAll
  },
  //老师总列表分页
  teacherAll() {
    return urls.teacherAll
  },
  //案例总列表分页
  caseAll() {
    return urls.caseAll
  },
  //学生总列表分页
  studentAll() {
    return urls.studentAll
  },
   //学生总列表分页
   darenAll() {
    return urls.darenAll
  },
  //文章详情页
  newArt() {
    // return出去了一个api地址
    return urls.newArt
  },
  caseArt() {
    return urls.caseArt
  },
  indexMessage(){
    return urls.indexMessage
  },
  //根据分类调用课程信息
  classCase(){
    // return api.get(urls.classCase,params, header)
    return urls.classCase
  },
  //公司配置信息
  companyGobel(){
    return urls.companyGobel
  },
  //首页轮播
  indexBanner(params){
    return api.get(urls.indexBanner,params, header)
  },
}
