import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import VueResource from "vue-resource"
import request from "./request/request"
import Toast from './utils/Toast'
import message from './utils/messagebox.js'
import elementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import './style/elm_style.css';
import './style/ol.css';
import urlConfig from './urlConfig'

Vue.prototype.config = urlConfig
Vue.use(message);
Vue.use(Toast);
// ELComponentConfig(Vue);
Vue.use(elementUI)
Vue.config.productionTip = false
Vue.use(VueResource);
//修正post请求
Vue.http.options.emulateJSON = true;
// Vue.http.options.emulateHTTP = true;

let app=new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});
request.app=app;

/*
router.beforeEach(function (to,from,next) {
    //判断是否需要登录  如果需要登录则跳转到登录页面
    if (to.meta.auth){
        let timeNow =new Date().getTime();
        let exitTime=window.localStorage.getItem("userInfoTime");
        console.log(timeNow, exitTime)
        if(!exitTime||parseInt(exitTime)<timeNow||!app.$store.getters.token||app.$store.getters.token.length==0){
            Vue.prototype.$toast('请登录后浏览');
            let route = {"name": "Login"};
            next(route);
        }else
            next();
    }else
        next();
});*/
