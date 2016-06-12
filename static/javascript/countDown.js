/**
 * Created by zhujialun on 25/3/16.
 */

$(function(){
    var endTime=$("#endTime").attr("data-end-time");
    function getRTime() {
        var EndTime = new Date(endTime);
        var NowTime = new Date();
        var t = EndTime.getTime() - NowTime.getTime();

        var d = Math.floor(t / 1000 / 60 / 60 / 24);
        d=formatTime(d);
        var h = Math.floor(t / 1000 / 60 / 60 % 24);
        h=formatTime(h);
        var m = Math.floor(t / 1000 / 60 % 60);
        m=formatTime(m);
        var s = Math.floor(t / 1000 % 60);
        s=formatTime(s);


        document.getElementById("t_d").innerHTML = "<em>" + d + "</em>天";
        document.getElementById("t_h").innerHTML = "<em>" + h + "</em>时";
        document.getElementById("t_m").innerHTML = "<em>" + m + "</em>分";
        document.getElementById("t_s").innerHTML = "<em>" + s + "</em>秒";
    }
    setInterval(getRTime, 1000);
});

//    数字＜10 自动不足2为 如9会更改成09
function formatTime(t){
    var et=t;
    if(et<10){
        et="0"+t;
    }
    return et;
}