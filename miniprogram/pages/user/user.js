// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusH: 0,
    titleH: 0,
    headerBar: 0,
    capsuleH:0,
    capsuleW:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getView()
    console.log(this.data.titleH);
  },
  getView() {
    const info = wx.getWindowInfo()
    const statusH = info.statusBarHeight
    // console.log(statusH);
    const capsule = wx.getMenuButtonBoundingClientRect()
    // console.log(capsule);
    const titleH = (capsule.top - statusH) * 2 + capsule.height
    const headerBar = titleH + statusH
    const capsuleH = capsule.height
    const capsuleW = capsule.width
    this.setData({
      statusH,
      titleH,
      headerBar,
      capsuleH,
      capsuleW
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})