- wxml 是模板，{{}}是要被编译的。
- 用户看到的不是wxml，是wxml被js的data 填充编译后的页面。——Page  不是wxml 是wxml+js+wxss的合体 compile
- 
    ```
    setData({
        响应数据时
    }) 触发重新compile
    ```
- 我们会再wxml里把所有的逻辑及对数据的渴求都表达出来，在某一刻页面只会显示当前状态的页面状态 跟数据相关         
    状态 由数据决定     
    改变数据，setData 界面自动变，      
    数据驱动的界面 MVVM     
    只要数据和界面状态一一对应
- todos 添加要去做的事项        
    eg：健身        
    需要一个表单 再用js dom编程 添加todos[] appendChild     
    1. 
    ```
    data:{
        todos:[]
    }
    ```
    2. form submit **this.setDate()**
- {{js 运行区域}}
- input 里的数据添加到todos[]
    点击确认的时候 拿到表单的值添加进去