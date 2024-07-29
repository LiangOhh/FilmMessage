import {
  HOST
} from "../config";
const app = getApp()
//封装request,默认为GET
function request(url, data = {}, header = {}, method = 'GET') {
  if (app.token) {
    header = Object.assign(header, {
      Authorization: `Bearer ${app.token}`
    })
    // console.log('有token', header);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${HOST}` + url,
      data,
      method,
      header,
      // 结构res中的data,statusCode
      success: ({
        data,
        statusCode
      }) => {
        // 无token跳转到登录接口
        if (statusCode === 401) {
          wx.showToast({
            title: '无用户token!',
            duration: 3000,
            icon: 'error',
            mask: true,
            complete: () => {
              setTimeout(() => {
                wx.reLaunch({
                  url: '/pages/user/user',
                })
              }, 1500)
            }
          })
        } else if (statusCode === 200) {
          if (data.code >= 400) {
            wx.showToast({
              title: String(data.message || 'system error'),
              icon: 'none',
              duration: 2000
            })
          }
          resolve(data)
        }
        // 其它 http 级异常，返回异常值
        resolve({
          code: statusCode,
          message: data.message,
          data: {}
        })

      },
      fail: (err) => {
        reject({
          code: err.errno || 400,
          message: err.errMsg,
          data: {}
        })
        wx.showToast({
          title: err.errMsg,
          icon: 'error',
          duration: 2000
        })
      }
    })
  })
}
export default {
  get(url, data) {
    return request(url, data)
  },
  post(url, data) {
    return request(url, data, 'POST')
  }
}