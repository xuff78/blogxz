
import Vue from "vue"
import config from "../urlConfig"
// import * as types from "../store/mutation-types"
let request = {
  app:null,
  request:function (params, url) {
    let self=this;
    let apiUrl=config.apiUrl()+url;
    this.setOptions(params, this.app)
    // params.timestamp = parseInt(new Date().getTime()/1000);

    console.log(url + "=====>",params);
    document.body.style.cursor = "wait";
    let promise = new Promise(function (resolve,reject) {
      Vue.http.post(apiUrl, params).then((success)=>{
          document.body.style.cursor = "default";
          if (success.body){
            let result = success.body;
            console.log('response==== '+url + " =====>", result);
            if (result.status == 1){
              //增加超时时间
              let exitTime =new Date().getTime()+1000*3600*5;
              window.localStorage.setItem("userInfoTime",exitTime);
              return resolve(result);
            }else {
              if (result.status == 2){   //已被其他用户登陆，需要重新登陆
                // self.app.$store.commit(types.CLEAR_USERINFO)
                // self.app.$router.push('/Login');
                // self.app.$toast('在其他地点登录，请重新登录');
              }else
                self.app.$toast(result.msg);
              return reject(result);
            }
          }
        },
        function (error) {  //其他http错误
          document.body.style.cursor = "default";
          console.log(error);
          return reject({status: -1, msg: "服务器返回异常，请联系管理员！"});
        })
    })
    return promise;
  },
  setOptions: function (params){

    return params;
  }
}
export default request;
