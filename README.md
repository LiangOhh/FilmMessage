# FilmMessage

## 依赖库

iconfont 

[Vant UI](https://vant-ui.github.io/vant-weapp/#/home)

## 项目模块

### 封装字体组件

**注意**: 封装组件时需开启样式穿透

#### 组件目录

js文件:

```js
// components/i-icon/i-icon.js
Component({
  properties: {
    //接收iconfont名称
      name:{
      type:String
    }
  },
  options:{
    addGlobalClass:true
  }
})
```

wxml文件:

```html
<!--components/i-icon/i-icon.wxml-->
<text class="iconfont icon-{{name}}"></text>
```

## 封装网络请求

[接口文档](https://doc.ixook.com/doc/movie-mobile-test/api?api=readme)

![image-20240728214311964](https://raw.githubusercontent.com/LiangOhh/MyPic/master/test/pic202407282143703.png)
封装主体

```js
new Promise((resolve,reject)=>{
    wx.request({
        url,
        data,
        method,
        header,
        success:()=>{
            resolve()
        },
        fail:()=>{
            reject()
        }	
    })
})
```



## 首页

### 自定义头部导航栏

1. json文件下配置`"navigationStyle" : custom`

2. 获取用户状态栏高度(用户手机时间信号展示那块的区域)

   [getSystemInfo](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfo.html)(异步,不建议使用,停止维护)或者[getWindowInfo](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getWindowInfo.html)  获取状态栏高度`statusBarHeight`,后续进行占位

   ```js
   const info = wx.getWindowInfo()
   //const info = wx.getSystemInfo()
   const statusBarHeight = info.statusBarHeight
   
   ```

3. 获取标题栏高度

   通过右上角胶囊按钮位置进行获取,[getMenuButtonBoundingClientRect](https://developers.weixin.qq.com/miniprogram/dev/api/ui/menu/wx.getMenuButtonBoundingClientRect.html)

   ```js
   const capsule = wx.getMenuButtonBoundingClientRect()
   //获取标题栏高度titleBarH
   const titleBarH = capsule.height + (capsule.top-statusBarHeight)*2
   ```

4. 获取标题栏宽高度

   ```js
   const capsuleH = capsule.height
   const capsuleW = capsule.width
   ```

5. 通过fixed定位进行总体占位

   ```js
   //头部总区域fixed占位
   const headerH = titleBar+statusBarHeight
   
   ```

以下为图例:

![image-20240729013537651](https://raw.githubusercontent.com/LiangOhh/MyPic/master/test/pic202407290135469.png)





