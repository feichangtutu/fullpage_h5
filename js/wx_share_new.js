/**
 * Created by jyn on 6/7/16.
 */
var getImgUrl = function (src) {
    var img = new Image();
    img.src = src;
    return img.src;
}

var shareUrl = "http://go.codevm.com/2016/0721/";
var sharePic = 'http://go.codevm.com/2016/0721/images/sharelogo.png';
var shareTitle = '我在北方看海，你还好吗';
var shareText = '我的北京下雨了';

wx.config(config);
wx.ready(function(){
    wx.onMenuShareTimeline({
        title: shareTitle, // 分享标题
        link: shareUrl, // 分享链接
        imgUrl: sharePic
    });
    wx.onMenuShareAppMessage({
        title: shareTitle, // 分享标题
        desc: shareText, // 分享描述
        link: shareUrl, // 分享链接
        imgUrl: sharePic
    });

    wx.onMenuShareQQ({
        title: shareTitle, // 分享标题
        desc: shareText, // 分享描述
        link: shareUrl, // 分享链接
        imgUrl: sharePic
    });

    wx.onMenuShareWeibo({
        title: shareTitle, // 分享标题
        desc: shareText, // 分享描述
        link: shareUrl, // 分享链接
        imgUrl: sharePic
    });

    wx.onMenuShareQZone({
        title: shareTitle, // 分享标题
        desc: shareText, // 分享描述
        link: shareUrl, // 分享链接
        imgUrl: sharePic
    });

});