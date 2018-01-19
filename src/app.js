/**
 * WeChat API 模块
 * @type {Object}
 * 用于将微信官方`API`封装为`Promise`方式
 * > 小程序支持以`CommonJS`规范组织代码结构
 */
const wechat = require('./api/wechat.js')
const user = require('./api/user.js')

// /**
//  * Douban API 模块
//  * @type {Object}
//  */
// const act = require('./utils/act.js')

App({
  /**
   * Global shared
   * 可以定义任何成员，用于在整个应用中共享
   */
  data: {
    name: 'Activity Apply',
    userInfo: {},
    version: '0.1.0',
    currentCity: '北京'
  },

  /**
   * WeChat API
   */
  wechat: wechat,

  /**
   * 生命周期函数--监听小程序初始化
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch () {
    wechat.login().then(res => {
      console.log(res)
      user.bindUser(res.code)
      return wechat.getUserInfo()
    }).then(res => {
      console.log(res)
      this.data.userInfo = res.userInfo
    }).catch(err => {
      this.data.currentCity = '北京'
      console.error(err)
    })
  }
})
