
Date.prototype.format = function (fmt) {
  var o = {
    "M+" : this.getMonth()+1, //月份
    "d+" : this.getDate(), //日
    "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时
    "H+" : this.getHours(), //小时
    "m+" : this.getMinutes(), //分
    "s+" : this.getSeconds(), //秒
    "q+" : Math.floor((this.getMonth()+3)/3), //季度
    "S" : this.getMilliseconds() //毫秒
  };
  var week = {
    "0" : "/u65e5",
    "1" : "/u4e00",
    "2" : "/u4e8c",
    "3" : "/u4e09",
    "4" : "/u56db",
    "5" : "/u4e94",
    "6" : "/u516d"
  };
  if(/(y+)/.test(fmt)){
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  }
  if(/(E+)/.test(fmt)){
    fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[this.getDay()+""]);
  }
  for(var k in o){
    if(new RegExp("("+ k +")").test(fmt)){
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    }
  }
  return fmt;
}

Date.convertDateFromString = function(dateStr){
  let str = dateStr.replace(new RegExp("-","gm"),"/")
  return new Date(str);
}
String.prototype.startWith=function(str){
  var reg=new RegExp("^"+str);
  return reg.test(this);
}
Date.DateFromString = function (dateStr,format) {
  return getDateFromFormat(dateStr,format);
  // dateStr = dateStr + "";
  // console.log("要转换的字符串",dateStr,"格式化",format);
  // format = format || 'yyyy-MM-dd'; // default format
  // var parts = dateStr.match(/(\d+)/g),
  //   i = 0, fmt = {};
  // console.log("parts",parts);
  // // extract date-part indexes from the format
  // format.replace(/(yyyy|dd|MM|HH|mm|ss)/g, function(part) {console.log("返回值",part);fmt[part] = i++; });
  // console.log(fmt,"fmt 值",parts[fmt['yyyy']]);
  // var date = new Date(parts[fmt['yyyy']], parts[fmt['MM']]-1, parts[fmt['dd']]);
  // console.log("转换好后的日期",date);
  // return date;
}

function getDateFromFormat(val,format) {
  val=val+"";
  format=format+"";
  var i_val=0;
  var i_format=0;
  var c="";
  var token="";
  var token2="";
  var x,y;
  var now=new Date();
  var year=now.getYear();
  var month=now.getMonth()+1;
  var date=1;
  var hh=now.getHours();
  var mm=now.getMinutes();
  var ss=now.getSeconds();
  var ampm="";

  while (i_format < format.length) {
    // Get next token from format string
    c=format.charAt(i_format);
    token="";
    while ((format.charAt(i_format)==c) && (i_format < format.length)) {
      token += format.charAt(i_format++);
    }
    // Extract contents of value based on format token
    if (token=="yyyy" || token=="yy" || token=="y") {
      if (token=="yyyy") { x=4;y=4; }
      if (token=="yy")   { x=2;y=2; }
      if (token=="y")    { x=2;y=4; }
      year=_getInt(val,i_val,x,y);
      if (year==null) { return 0; }
      i_val += year.length;
      if (year.length==2) {
        if (year > 70) { year=1900+(year-0); }
        else { year=2000+(year-0); }
      }
    }
    else if (token=="MMM"||token=="NNN"){
      month=0;
      for (var i=0; i<MONTH_NAMES.length; i++) {
        var month_name=MONTH_NAMES[i];
        if (val.substring(i_val,i_val+month_name.length).toLowerCase()==month_name.toLowerCase()) {
          if (token=="MMM"||(token=="NNN"&&i>11)) {
            month=i+1;
            if (month>12) { month -= 12; }
            i_val += month_name.length;
            break;
          }
        }
      }
      if ((month < 1)||(month>12)){return 0;}
    }
    else if (token=="EE"||token=="E"){
      for (var i=0; i<DAY_NAMES.length; i++) {
        var day_name=DAY_NAMES[i];
        if (val.substring(i_val,i_val+day_name.length).toLowerCase()==day_name.toLowerCase()) {
          i_val += day_name.length;
          break;
        }
      }
    }
    else if (token=="MM"||token=="M") {
      month=_getInt(val,i_val,token.length,2);
      if(month==null||(month<1)||(month>12)){return 0;}
      i_val+=month.length;}
    else if (token=="dd"||token=="d") {
      date=_getInt(val,i_val,token.length,2);
      if(date==null||(date<1)||(date>31)){return 0;}
      i_val+=date.length;}
    else if (token=="hh"||token=="h") {
      hh=_getInt(val,i_val,token.length,2);
      if(hh==null||(hh<1)||(hh>12)){return 0;}
      i_val+=hh.length;}
    else if (token=="HH"||token=="H") {
      hh=_getInt(val,i_val,token.length,2);
      if(hh==null||(hh<0)||(hh>23)){return 0;}
      i_val+=hh.length;}
    else if (token=="KK"||token=="K") {
      hh=_getInt(val,i_val,token.length,2);
      if(hh==null||(hh<0)||(hh>11)){return 0;}
      i_val+=hh.length;}
    else if (token=="kk"||token=="k") {
      hh=_getInt(val,i_val,token.length,2);
      if(hh==null||(hh<1)||(hh>24)){return 0;}
      i_val+=hh.length;hh--;}
    else if (token=="mm"||token=="m") {
      mm=_getInt(val,i_val,token.length,2);
      if(mm==null||(mm<0)||(mm>59)){return 0;}
      i_val+=mm.length;}
    else if (token=="ss"||token=="s") {
      ss=_getInt(val,i_val,token.length,2);
      if(ss==null||(ss<0)||(ss>59)){return 0;}
      i_val+=ss.length;}
    else if (token=="a") {
      if (val.substring(i_val,i_val+2).toLowerCase()=="am") {ampm="AM";}
      else if (val.substring(i_val,i_val+2).toLowerCase()=="pm") {ampm="PM";}
      else {return 0;}
      i_val+=2;}
    else {
      if (val.substring(i_val,i_val+token.length)!=token) {return 0;}
      else {i_val+=token.length;}
    }
  }
  // If there are any trailing characters left in the value, it doesn't match
  if (i_val != val.length) { return 0; }
  // Is date valid for month?
  if (month==2) {
    // Check for leap year
    if ( ( (year%4==0)&&(year%100 != 0) ) || (year%400==0) ) { // leap year
      if (date > 29){ return 0; }
    }
    else { if (date > 28) { return 0; } }
  }
  if ((month==4)||(month==6)||(month==9)||(month==11)) {
    if (date > 30) { return 0; }
  }
  // Correct hours value
  if (hh<12 && ampm=="PM") { hh=hh-0+12; }
  else if (hh>11 && ampm=="AM") { hh-=12; }
  var newdate=new Date(year,month-1,date,hh,mm,ss);
  return newdate;
}

function _getInt(str,i,minlength,maxlength) {
  for (var x=maxlength; x>=minlength; x--) {
    var token=str.substring(i,i+x);
    if (token.length < minlength) { return null; }
    if (_isInteger(token)) { return token; }
  }
  return null;
}

function _isInteger(val) {
  var digits="1234567890";
  for (var i=0; i < val.length; i++) {
    if (digits.indexOf(val.charAt(i))==-1) { return false; }
  }
  return true;
}
var MONTH_NAMES=new Array('January','February','March','April','May','June','July','August','September','October','November','December','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec');
var DAY_NAMES=new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sun','Mon','Tue','Wed','Thu','Fri','Sat');

export function timeForMat(count){
  // 拼接时间
  let time1 = new Date()
  // time1.setTime(time1.getTime() - (24 * 60 * 60 * 1000))
  let Y1 = time1.getFullYear()
  let M1 = ((time1.getMonth() + 1) > 10 ? (time1.getMonth() + 1) : '0' + (time1.getMonth() + 1))
  let D1 = (time1.getDate() > 10 ? time1.getDate() : '0' + time1.getDate())
  let timer1 = Y1 + '-' + M1 + '-' + D1 // 当前时间
  let time2 = new Date()
  time2.setTime(time2.getTime() - (24 * 60 * 60 * 1000 * count))
  let Y2 = time2.getFullYear()
  let M2 = ((time2.getMonth() + 1) > 10 ? (time2.getMonth() + 1) : '0' + (time2.getMonth() + 1))
  let D2 = (time2.getDate() > 10 ? time2.getDate() : '0' + time2.getDate())
  let timer2 = Y2 + '-' + M2 + '-' + D2 // 之前的7天或者30天
  return {
    t1: timer1,
    t2: timer2
  }
}

