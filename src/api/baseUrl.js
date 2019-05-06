let baseUrl = 'http://172.18.106.160:9201' // 本地代理
switch (process.env.NODE_ENV) {
  case 'dev':
    baseUrl = 'http://172.18.106.160:9201' // 测试环境url
    break
  case 'pre':
    baseUrl = 'http://172.18.106.160:9201' // 预上线环境url
    break
  case 'production':
    baseUrl = 'http://172.18.106.160:9201' // 生产环境url
    break
}

export default baseUrl