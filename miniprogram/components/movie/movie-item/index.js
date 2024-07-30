// components/movie/movie-item/index.js
Component({
  lifetimes:{
    attached(){
      console.log('组件挂载');
      console.log(this.data.movie);
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    movie: {
      type: Object,
      required: true,
    }
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

  }
})