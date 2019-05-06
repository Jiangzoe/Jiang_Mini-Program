云开发是腾讯云在大力推广        
云开发可以快速上手

- 云开发提供可视化的mongodb云数据库     
连接数据库      
    ```
    const db = wx.cloud.database();
    const userInfo = db.collection('userInfo');
    ```
    支持直接存JSON      
    后端即服务 CRUD(增删改查)       
    add         
    要做列表，先建collection 先add 再get        
    where({})       
    count()     
    数据库里有吗？有，不存，没有，存