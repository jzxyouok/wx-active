import config from 'config'
/**
 * 抓取远端API的结构
 * https://developers.douban.com/wiki/?title=movie_v2
 * @param  {String} path   请求路径
 * @param  {Object} params 参数
 * @param  {String} method 请求方式
 * @return {Promise}       包含抓取任务的Promise
 */
module.exports = function (path, params, method) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.api + '/' + path,
      data: Object.assign({}, params),
      header: { 'Content-Type': 'json' },
      success: resolve,
      fail: reject
    })
  })
}
