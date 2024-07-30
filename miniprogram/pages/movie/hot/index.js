import {
  getHot
} from "../../../api/api"
Page({

  data: {
    params: {
      page: 1,
      per_page: 10,
      order: 'desc'
    },
    list: [],
    isShowSkeleton:true
  },


  async onLoad(options) {
    const item = await getHot(this.data.params)
    // console.log(item);
    this.setData({
      list: item.data,
      isShowSkeleton:false
    })
  },


  onReady() {

  },


  onShow() {

  },


  onHide() {

  },


  onUnload() {

  },

  onPullDownRefresh() {

  },


  async onReachBottom() {
    let { page } = this.data.params;
    page += 1;
    this.setData({
      'params.page': page,  
    });
    let {data} = await getHot(this.data.params)
   console.log(data);
    this.setData({
      list:[...this.data.list, ...data]
    })
    console.log(this.data.list);
  },


  onShareAppMessage() {

  }
})