// 获取全局应用程序实例对象
const app = getApp()
console.log(app)
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    loading: true
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  }
})
