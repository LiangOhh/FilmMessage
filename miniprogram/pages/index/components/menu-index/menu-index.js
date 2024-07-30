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
    list: [{
        name: "热映中",
        icon: "video",
        id: 1,
        url: "/pages/movie/hot/index"
      },
      {
        name: "高分榜",
        icon: "level",
        id: 2,
        url: "/pages/movie/top/index"
      },
      {
        name: "奖项",
        icon: "trophy",
        id: 3,
        url: "/pages/award/index/index"
      },
      {
        name: "那年今日",
        icon: "riqi2",
        id: 4,
        url: "/pages/movie/today/index"
      },
    ],
    icon: "video"
  },

  methods: {
    toNavigate(e) {
      let url = e.currentTarget.dataset.url
      wx.navigateTo({
        url
      })
    }
  }
})