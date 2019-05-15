const pageAble = require('./pageAble.js');
const trendings = (data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://github-trending-api.now.sh/repositories',
      data,
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      }
    })
  })
}
const events = () => {
  return {
    get(){
      const promise = new Promise((reslove,reject) => {
        wx.request({
          url:'http://api.github.com/events',
          success:res =>{
            reslove({
              data:res.data,
              headers:res.header
            });
          },
          fail:error =>{
            reject(err);
          }
        })
      })
      return pageAble.wrap(promise);
    }
  }
}
module.exports = {
  trendings,
  events
}