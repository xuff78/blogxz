/**
 * Created by 屁屁熊 on 2018/7/27.
 */
import  messageBoxVue from '../components/messagebox.vue'
export default {
  install(Vue){
    let messageBox = Vue.extend(messageBoxVue);
    let $messageBox = new messageBox();
    document.body.appendChild($messageBox.$mount().$el);
    Vue.prototype.$messageBox = (model => {
      let messageModel = {
          show: true,
          title: '提示',
          showCancel: false,
          outsideCancel: true,
      }
      if(model.title)
        messageModel.title=model.title;
      if(model.text)
        messageModel.text=model.text;
      if(model.showCancel)
        messageModel.showCancel=model.showCancel;
      if(model.callback)
        messageModel.callback=model.callback;
      if(model.top)
        messageModel.top=model.top;
      if(model.hasOwnProperty("outsideCancel"))
        messageModel.outsideCancel=model.outsideCancel;
      $messageBox.model=messageModel;
    });
  }
}
