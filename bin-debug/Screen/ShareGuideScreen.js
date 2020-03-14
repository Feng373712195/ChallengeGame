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
var ShareGuideScreen = (function (_super) {
    __extends(ShareGuideScreen, _super);
    function ShareGuideScreen() {
        return _super.call(this) || this;
    }
    ShareGuideScreen.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ShareGuideScreen.getInstance = function () {
        if (!ShareGuideScreen.shared) {
            ShareGuideScreen.shared = new ShareGuideScreen();
        }
        return ShareGuideScreen.shared;
    };
    ShareGuideScreen.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
            _this.parent.removeChild(_this);
        }, this);
    };
    return ShareGuideScreen;
}(eui.Component));
__reflect(ShareGuideScreen.prototype, "ShareGuideScreen", ["eui.UIComponent", "egret.DisplayObject"]);
