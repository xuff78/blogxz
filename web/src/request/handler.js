/**
 * Created by 屁屁熊 on 2018/3/7.
 */

import request from "./request.js"
import crypto from 'crypto'

export default{

  //<---------------徐义超 开始--------------->
  /**
   * 用户登陆
   * @param userName 用户名
   * @param password 密码
   * @returns {*}
   */
  login:function (userName, password, signCode) {
    var md5 = crypto.createHash("md5").update(password).digest('hex');
    let params = {
      userName: userName,
      password: md5,
      signCode: signCode,
    }
    return request.request(params, '/login/login');
  },
    //<---------------徐义超 开始--------------->
}
