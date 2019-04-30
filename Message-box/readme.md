## 组件思维
- 弹窗组合了一些标签，形成了独立的弹窗功能，在其他页面里也要用到，把它组合成一个独立的组件，组建名`<dialog />`        
- 页面是由组件拼装而成。
## 组件语法
同于Page 又有异
```
Componet({
    data:{},
    properties:{
        <!-- 属性类型定义 -->
        title:{
            type:String,
            value:'标题'
        }
    },
    methods:{

    }
})
```

## bind tap 区别
- bindtap 向外冒泡
- catchtap 不会