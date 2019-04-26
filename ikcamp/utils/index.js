import config from './config'
import * as Mock  from './mock'      //* as Mock 引入export抛出的所有

const DEFAULT_REQUEST_OPTIONS = {
    url: '',
    data:{},
    header:{
        "Content-Type":"application/json"
    },
    method:"GET",
    dataType:"json"
}
let util = {
    isDev:config.isDev,
    log(){
        this.isDev && console.log(...arguments)    //...arguments  解构数组
    },
    alert(title = "提示",content = config.defaultAlertMessage){
        if('object' === typeof content){
            content = this.isDev && JSON.stringify(content)
        }
        wx.wx.showModal({
            title: title,
            content: content
        })
    },
    getStorageDate(key,cb){
        let Self = this
        wx.getStorage({
            key:key,
            success(res){
                cb && cb(res.data)
            },
            fail(err){
                let msg = err.errMsg || '';
                if(/getStorage:fail/.test(msg)){
                    self.getStorageDate(key)
                }
            }
        })
    },
    setStorageData(key,value = '',cb){
        wx.setStorage({
            key:key,
            data:value,
            success() {
                cb && cb();
            }
        })
    }
}