// pages/search/components/search-bar/search-bar.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    value:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    cancel(){
      wx.navigateBack()
    },
    keywordChange(e){
      // console.log(e.detail.value);
      const value = e.detail.value
      // 组件通讯传递数据
      this.triggerEvent('input_value',value)
    }
  }

})