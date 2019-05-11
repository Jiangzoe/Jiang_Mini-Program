## 开发流程和工艺
1. 细化模块，api模块        
request 封装好      
    ```
    module.exports = {
        api列表...
    }
    ```
    如果代码在重复，请封装
2. 前后端分离       
后端API 看文档       
url method data      
前后端怎么配合？

3. UI 选框架 


- 没有后台API怎么办？       
easymock
request 方法改写  database
- 选择weui（推荐）/ vant        
完成界面，小程序就是切页面
- 将每个页面，每个功能封装一个函数 unit