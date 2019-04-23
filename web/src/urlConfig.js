var type = 0; //0是https的，1是http，2是本地演示环境
const config = {
  authUrl:"https://license.getcube.cn/auth/license/get",
  //请求
  apiUrl:function () {
      if (type==0){
        return "https://hby.zlxdbj.com.cn/tiger/";
      }else if (type==1){
        return "http://hby.zlxdbj.com.cn/tiger/";
      }else if (type==2){
        return "http://127.0.0.1:8081/tiger/";
      }
  },
  patrolUrl:function () {
    if (type==0){
      return "https://hby.zlxdbj.com.cn/Patrol1/";
    }else if (type==1){
      return "http://hby.zlxdbj.com.cn/Patrol1/";
    }else if (type==2){
      return "http://127.0.0.1:8081/Patrol1/";
    }
  },
  //地图底图
  // mapServer:function () {
  //   if (type==0){
  //     return "https://175.25.177.128:8080/";
  //   }else if (type==1){
  //     return "http://175.25.177.128:8080/";
  //   }else if (type==2){
  //     return "http://127.0.0.1:8080/";
  //   }
  // },
  LOCALTMS:function () {
    return config.gisServer()+"tms"
  },
  LOCALSTK:function () {
    return config.gisServer()+"stkmap"
  },
  //主界面地图、视频地图位置
  gisServer:function () {
    if (type==0){
      return 'https://gis.zlxdbj.com.cn/';
    }else if (type==1){
      return 'http://gis.zlxdbj.com.cn/';
    }else if (type==2){
      return 'http://127.0.0.1/';
    }
  },
  //虎豹详情位置
  tigerlocationWmsUrl:function(){
    return config.gisServer()+"geoserver/hby/wms";
  },
  //虎豹图片
  picUrl:function () {
    return config.apiUrl();
  },
  //边界
  wmsUrl:function(){
    return config.gisServer()+"geoserver/hby/wms";
  },

  //其他地图服务
  gisServer1:function () {
    if (type==0){
      return 'https://gis1.zlxdbj.com.cn';
    }else if (type==1){
      return 'http://gis1.zlxdbj.com.cn';
    }else if (type==2){
      return 'http://127.0.0.1';
    }
  },
  wmsUrl_1:function(){
    return config.gisServer1()+"/geoserver/hby/wms";
  },
  //小班
  wmtsUrl:function(){
    return config.gisServer1()+"/geoserver/gwc/service/wmts";
  },

  //wfs 查询服务
  owsUrl:function(){
    return config.gisServer1()+"/geoserver/hby/ows";
  },

  vehiclePicUrl() {
    return config.gisServer1()+":8083/"
  },

  videoUrl() {
    return "wss://gis1.zlxdbj.com.cn:443/video-server"
  },
  projectUrl() {
    if (type==0){
      return "https://hby.zlxdbj.com.cn/HNdatian";
    }else if (type==1){
      return "http://hby.zlxdbj.com.cn/HNdatian";
    }else if (type==2){
      return "http://127.0.0.1:8081/HNdatian";
    }
  },

  loginVideoUrl() {
    if (type==0){
      return "https://hby.zlxdbj.com.cn/loginVideo/";
    }else if (type==1){
      return "http://hby.zlxdbj.com.cn/loginVideo/";
    }else if (type==2){
      return "http://127.0.0.1:8081/loginVideo/";
    }
  },
  newVideoWebSocketUrl(){
    return 'wss://natural.zlxdbj.com.cn:442/websocket/InvadeVideoMessage';
  }
}
export default config;
