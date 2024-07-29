// pages/index/components/search-index/search-index.js
const app = getApp()
Component({
  lifetimes:{
    ready(){
      console.log(app.globalData);
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    isTop:{
      type:Boolean,
      value:true
}
  },
  /**
   * 组件的初始数据
   */
  data: {
    // 获取导航栏高度,占位防止后续节点元素被覆盖住
    headerBarH: app.globalData.headerBarH,
    statusBarH: app.globalData.statusBarH,
    titleBarH: app.globalData.titleBarH,
    searchBarH: app.globalData.capsuleH,
    capsuleW: app.globalData.capsuleW,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toSearch(){
     wx.navigateTo({
       url: '/pages/search/search',
     })
    }
  },
  options:{
    addGlobalClass:true
  }
})