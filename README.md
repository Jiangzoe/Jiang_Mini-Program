## 小程序
### 小程序代码结构与基本配置
- app.js
注册微信小程序应用
- app.json
进行微信小程序的全局配置（网络请求的超时时间，窗口的表现，页面的注册路径）
  - pages
  注册微信小程序的所有页面
  - tabBar
  如果小程序是一个多tab的应用，可以通过这个tabBar的配置项来制定我们tab栏的表现
  - networkTimeout
  设置我们各个网络请求的一个超时时间
  - debug
  通过开启debug模式，在微信的开发者工具控制台里面，打印出我们需要的调试信息
  - navigationStyle

**当我们的微信小程序的全局和单个页面的window的一些配置项重复了，页面的配置项会覆盖掉全局的配置项**
- app.wxss
设置微信小程序全局的样式
- pages
存放微信小程序所有的小程序页面
  - 每个小程序页面最多由四个文件组成
  1. js文件(处理微信小程序的一些逻辑和数据交互)
  2. json文件(配置微信小程序页面的配置信息)
  - backgroundColor
  - backgroundTextStyle 
  - onReachBottomDistance 页面上拉触底事件触发时距页面底部距离
  - enablePullDownRefresh 设置微信小程序全局或单个页面下拉刷新的一个表现
  - disableScroll 设置页面是否开启滚动
  3. wxml文件(用来战是小程序页面的一些元素和内容)
  4. wxss文件(设置小程序页面的元素的一些样式，描述我们页面上要有哪些内容)
- utils
存放一些工具的函数，达到代码复用的目的。
### app.js——是怎样注册微信小程序的应用
1. 创建一个app.js文件
2. 调用一个App函数 (主要传入一些生命周期钩子，事件处理函数，以及全局数据)
3. 创建一个app.json文件
4. 注册我们所有微信小程序所有页面的路径，通过pages属性来注册，它的值为一个list类型的值，list里面是我们所有页面的一个页面路径。
5. 创建wxml文件，写页面内容
6. 创建js文件，通过page函数帮我们注册
7. 创建json文件 至少传入一个空的配置对象
8. 创建wxss文件
**5789四个文件我们需要保持他们的名称一致**
