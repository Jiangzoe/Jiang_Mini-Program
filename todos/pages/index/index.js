Page({
  data: {
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo:{},
    addShow: false,
    addText:'',
    todos:[]
  },
  addTodo:function(){
      // 输入框有内容
      if(!this.data.addText.trim()){return;}
      // todos 界面上一个wx:for的输出
      //设置setData() 重新绘制页面
      let todos = this.data.todos;
      todos.push({
        id:new Date().getTime(),
        title:this.data.addText,
        status:'0'
      })
      this.setData({
        todos
      })
      // 退出输入状态
      this.addTodoHide();

  },
  addInput:function(e){
    this.setData({
      addText:e.detail.value
    })
  },
  getUserInfo: function(e) {
    // console.log(e);
    this.setData({
      userInfo: e.detail.userInfo,
      // MVVM编程 响应式 状态
      hasUserInfo: true
    })
  },
  addTodoShow: function(e) {
    this.setData({
      addShow: true
    })
  },
  addTodoHide:function(e){
    this.setData({
      addShow:false
    })
  }
})
