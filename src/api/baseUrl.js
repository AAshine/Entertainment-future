let baseUrl = 'http://test.haowaisp.cn' // 本地代理
switch (process.env.NODE_ENV) {
  case 'dev':
    baseUrl = 'http://test.haowaisp.cn' // 测试环境url
    break
  case 'pre':
    baseUrl = 'http://test.haowaisp.cn' // 预上线环境url
    break
  case 'production':
    baseUrl = 'http://test.haowaisp.cn' // 生产环境url
    break
}

export default baseUrl