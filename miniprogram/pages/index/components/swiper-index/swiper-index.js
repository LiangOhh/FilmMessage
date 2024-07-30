// pages/index/components/swiper-index/swiper-index.js;
import colorToRgba from "../../../../utils/bgColor";
Component({
  lifetimes:{
    ready(){
      console.log(this.properties.swiper);
    }
  },
 /*  pageLifetimes:{
    show(){
      
    }
  }, */
  /**
   * 组件的属性列表
   */
  properties: {
    swiper:{
      type:Array
    },
    isTop: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    swiperIndex: 0,
     backgroundStyle: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    swiperChange(e){
      const index = e ? e.detail.current : 0;
      const bgcolor = this.data.swiper[index].bgcolor;
      const bgcolorRgba = colorToRgba(bgcolor, 0);
      this.setData({
        swiperIndex: index,
        backgroundStyle: `background-image: linear-gradient(${bgcolor}, ${bgcolorRgba})`
      })
    }
  }
})