/*
 * zhangboxuan
 */
const getCookie = (name) => {
    var strcookie = document.cookie;//获取cookie字符串
    var arrcookie = strcookie.split('; ');//分割
    //遍历匹配
    for ( var i = 0; i < arrcookie.length; i++) {
        var arr = arrcookie[i].split('=');
        if (arr[0] == name){
            return arr[1];
        }
    }
    return '';
};

/**
 * 
 * @param time
 *  s10表示10s
 *  h10表示10小时 
 */
const setCookie = (name, value, time) => {
    if (!time) {
        time = 'h12';  // 如果没有传time，默认12小时
    }
    var strsec = getsec(time);
    var exp = new Date();
    exp.setTime(exp.getTime() + strsec*1);
    document.cookie = name + "="+ escape (value);
}

const getsec = (str) => {
    var str1 = str.substring(1, str.length) * 1;
    var str2 = str.substring(0, 1);
    if (str2 == "s") {
        return str1*1000;
    } else if (str2=="h") {
        return str1*60*60*1000;
    } else if (str2=="d") {
        return str1*24*60*60*1000;
    }
}

export default{
    'getCookie': getCookie,
    'setCookie': setCookie
};


