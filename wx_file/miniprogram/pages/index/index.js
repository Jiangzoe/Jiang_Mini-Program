const db = wx.cloud.database();
const userInfo = db.collection('userInfo');
Page({
  data: {
    userList: []
  },
  getUserInfo(e) {
    console.log(e);
    wx.cloud.callFunction({
      name: 'getOpenId',
      complete: res => {
        console.log(res);
        userInfo
          .where({
            _openid: res.result.openId
          }).count()
          .then(res => {
            if (res.total == 0) {
              //新用户
              userInfo.add({
                data: e.detail.userInfo
              })
                .then(res => {
                  wx.navigateTo({
                    url: '../add/add'
                  })
                })
            } else {
              console.log('已经存在了');
              wx.navigateTo({
                url: '../add/add'
              })
            }
          })
      }
    })


    // })
    // 把用户存到数据库中，解决database 搞定用户表（核心表）
  },
  onLoad: function () {
    userInfo
      .get()
      .then(res => {
        console.log(res);
        this.setData({
          userList: res.data
        })
      })
  }
})