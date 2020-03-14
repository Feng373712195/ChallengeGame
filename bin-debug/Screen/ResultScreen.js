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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var ResultScreen = (function (_super) {
    __extends(ResultScreen, _super);
    function ResultScreen() {
        return _super.call(this) || this;
    }
    ResultScreen.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ResultScreen.getInstance = function () {
        if (!ResultScreen.shared) {
            ResultScreen.shared = new ResultScreen();
        }
        return ResultScreen.shared;
    };
    ResultScreen.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.again_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.againGame, this);
        this.share_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showShareMask, this);
    };
    ResultScreen.getResult = function (score) {
        return __awaiter(this, void 0, void 0, function () {
            var that, tx;
            return __generator(this, function (_a) {
                that = ResultScreen.shared;
                tx = new egret.TextField;
                tx.width = 480;
                tx.x = 0;
                tx.y = 0;
                tx.textColor = 0;
                tx.size = 20;
                tx.fontFamily = "微软雅黑";
                tx.textAlign = egret.HorizontalAlign.CENTER;
                tx.textFlow = [
                    { text: "加载成绩中...", style: { "size": 26 } },
                ];
                that.result_text.addChild(tx);
                tx.textFlow = [
                    { text: "答完题啦！本次得分", style: { "size": 26 } },
                    { text: " " + score + " ", style: { "textColor": 0xF7C65C, "size": 38 } }
                ];
                return [2 /*return*/];
            });
        });
    };
    ResultScreen.prototype.fetchResult = function (score) {
        var _this = this;
        return new Promise(function (resolve) {
            var request = new egret.HttpRequest();
            request.responseType = egret.HttpResponseType.TEXT;
            //设置为 POST 请求
            request.open("http://315xbapi.sinmore.vip/api/getResult", egret.HttpMethod.GET);
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.send();
            request.addEventListener(egret.Event.COMPLETE, function (event) {
                var request = event.currentTarget;
                var data = JSON.parse(request.response);
                resolve(data);
            }, _this);
        });
    };
    ResultScreen.prototype.showShareMask = function () {
        var parent = this.parent;
        parent.addChildAt(ShareGuideScreen.getInstance(), 999);
    };
    ResultScreen.prototype.againGame = function () {
        this.parent.addChild(GameScreen.getInstance());
        this.parent.removeChild(this);
        GameScreen.playGame();
    };
    return ResultScreen;
}(eui.Component));
__reflect(ResultScreen.prototype, "ResultScreen", ["eui.UIComponent", "egret.DisplayObject"]);
