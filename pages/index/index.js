//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    paths: []
  },
  
  bindtap:function() {
    console.log(this.data.paths);
  },

  requestDatas: function(page) {
    rqurl = 'http://0.0.0.0:8080/jgz/' + page
    console.log(rqurl);
    var that = this
    wx.request({
      url: rqurl,
      success: function(res) {
        console.log(res.data[0]);
        that.setData({
          paths: res.data
        })
      }
    })
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    this.requestDatas(1)
    

  	//调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      that.update()
    })
  }
})
