var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var StartScreen = (function (_super) {
    __extends(StartScreen, _super);
    function StartScreen() {
        return _super.call(this) || this;
    }
    StartScreen.getInstance = function () {
        if (!StartScreen.shared) {
            StartScreen.shared = new StartScreen();
        }
        return StartScreen.shared;
    };
    StartScreen.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    StartScreen.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    StartScreen.prototype.init = function () {
        StartScreen.getInstance();
        this.playMusicIcon = RES.getRes('music_open'),
            this.closeMusicIcon = RES.getRes('music_close');
        if (SoundManger.isMusic) {
            this.music_btn.source = SoundManger.isMusic ?
                this.playMusicIcon :
                this.closeMusicIcon;
        }
        this.start_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
        this.rank_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showRank, this);
        this.music_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.controlMusic, this);
        this.share_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showShareMask, this);
    };
    StartScreen.prototype.controlMusic = function () {
        console.log(SoundManger.isMusic, 'isMusic');
        SoundManger.isMusic = !SoundManger.isMusic;
        this.music_btn.source = SoundManger.isMusic ? this.playMusicIcon : this.closeMusicIcon;
    };
    StartScreen.prototype.startGame = function () {
        // if( !GameManger.playerData.userInfo.isAuthor ){
        // 	window.location.href = `http://315xbapi.sinmore.vip/api/oAuthLogin?url_path=${encodeURIComponent(window.location.href)}`
        // 	return;	
        // }
        var parent = this.parent;
        parent.removeChild(this);
        parent.addChild(GameScreen.getInstance());
        // parent.addChild( ResultScreen.getInstance() );
    };
    StartScreen.prototype.showRank = function () {
        var parent = this.parent;
        parent.removeChild(this);
        parent.addChild(RankScreen.getInstance());
    };
    StartScreen.prototype.showShareMask = function () {
        var parent = this.parent;
        parent.addChildAt(ShareGuideScreen.getInstance(), 999);
    };
    return StartScreen;
}(eui.Component));
__reflect(StartScreen.prototype, "StartScreen", ["eui.UIComponent", "egret.DisplayObject"]);
