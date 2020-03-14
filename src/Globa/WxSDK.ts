// TypeScript file
class WxSDK {
    constructor(){
        var bodyConfig: BodyConfig = new BodyConfig();
        bodyConfig.appId = "此处填写公共平台appID，未认证的ID将不能使用自定义分享等接口，请联系微信官方获取";
        bodyConfig.debug = true;
        bodyConfig.jsApiList = ['checkJsApi','onMenuShareAppMessage','onMenuShareTimeline'];
        if( wx ){
            wx.config(bodyConfig);
            wx.ready(function() {

                var title = "标题：用户昵称邀请您对战~";
                var desc = "描述：315消保王者挑战赛，金融消费者素质提升计划";
                var url = location.href 
                
                if( GameManger.playerData.userInfo.id ){
                    url + '?=share_id=' + GameManger.playerData.userInfo.id
                }

                // 分享到朋友圈
                const shareAppMessageBody = new BodyMenuShareAppMessage();
                shareAppMessageBody.title = title;
                shareAppMessageBody.desc = desc;
                shareAppMessageBody.link = url;
                wx.onMenuShareTimeline(shareAppMessageBody);

                //分享给朋友圈
                const shareTimelineBody = new BodyMenuShareTimeline();
                shareTimelineBody.title = title;
                shareTimelineBody.link = url;
                wx.onMenuShareTimeline(shareTimelineBody);

            })
        }
    }
    getWxConfig(){
        
    }
}