// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    postForm: {
      name: '',
      desc: '',
      maxNumber: '',
      startTime: '',
      endTime: ''
    },
    date: '',
    time1: '',
    time2: '',
    submitFlag: false,
    loading: true
  },
  getCache () {
    return new Promise(resolve => {
      app.wechat.getStorage('last_splash_data').then(res => {
        // 有缓存，判断是否过期
        if (res.data.expires < Date.now()) {
          // 已经过期
          console.log('storage expired')
          return resolve(null)
        }
        return resolve(res.data)
      }).catch(e => resolve(null))
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    this.getCache().then(cache => {
      if (cache) {
        return this.setData({ movies: cache.movies, loading: false })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    // TODO: onReady
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // TODO: onShow
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    // TODO: onHide
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    // TODO: onUnload
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    // TODO: onPullDownRefresh
  },
  /**
   * 日期变更处理函数
   */
  bindDateChange (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  /**
   * 时间变更处理函数
   */
  bindTimeChange1 (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time1: e.detail.value
    })
  },
  bindTimeChange2 (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time2: e.detail.value
    })
  },
  /**
   * 发布活动
   */
  submit () {
    this.setData({
      submitFlag: true
    })
  }
})
