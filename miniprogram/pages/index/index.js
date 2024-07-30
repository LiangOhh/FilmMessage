import https from "../../https/index";
import {getIndex} from "../../api/api";
Page({
  data: {
    isTop:true,
    isReady:false,
    swiper:[]
  },
  // https://test-h5-api.ixook.com/user
  async getIndex (){
    const { code, data } = await getIndex();
    // console.log(code);
    // console.log(data);
    if(code===200){
      const {swiper} = data
      this.setData({
        swiper
      })
    }
  },
  async test(){
    // console.log(this.data.swiper);
   /*  wx.reLaunch({
      url: '../user/user',
      
    }) */
    wx.navigateTo({
      // url: '../movie/hot/index',
      url:"/pages/movie/hot/index"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    await this.getIndex()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      isReady:true
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  onPageScroll({
    scrollTop
  }) {
    const threshold = 60; // 滚动变化的阈值
    if (scrollTop > threshold && this.data.isTop) {
      console.log(1);
      this.setData({
        isTop: false
      })
    } else if (scrollTop <= threshold && !this.data.isTop) {
      this.setData({
        isTop: true
      })
    }
  }
})