// pages/index/components/menu-index/menu-index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
list:[
  {name:"热映中",icon:"video",id:1},
  {name:"高分榜",icon:"level",id:2},
  {name:"奖项",icon:"trophy",id:3},
  {name:"那年今日",icon:"riqi2",id:4},
],
icon:"video"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    test(e){
      console.log(e);
    }
  }
})