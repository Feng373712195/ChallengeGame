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
var RankScreen = (function (_super) {
    __extends(RankScreen, _super);
    function RankScreen() {
        return _super.call(this) || this;
    }
    RankScreen.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    RankScreen.getInstance = function () {
        if (!RankScreen.shared) {
            RankScreen.shared = new RankScreen();
        }
        return RankScreen.shared;
    };
    RankScreen.prototype.childrenCreated = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, leveleIndex, levele, i, imgLoader, rank_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _super.prototype.childrenCreated.call(this);
                        this.init();
                        _a = this;
                        return [4 /*yield*/, this.getRankData()];
                    case 1:
                        _a.rank_data = _b.sent();
                        leveleIndex = 0;
                        levele = ['first', 'second', 'third'];
                        for (i = 0; i < 3; i++) {
                            if (this.rank_data[0]) {
                                this[levele[leveleIndex] + '_name'].text = this.getChar(this.rank_data[0].nickname, 10);
                                this[levele[leveleIndex] + '_score'].text = this.rank_data[0].score;
                                imgLoader = new egret.ImageLoader();
                                imgLoader.crossOrigin = "anonymous"; // 跨域请求
                                imgLoader.load(this.rank_data[0].avatar); // 去除链接中的转义字符        
                                imgLoader.once(egret.Event.COMPLETE, function (evt) {
                                    if (evt.currentTarget.data) {
                                        egret.log("加载头像成功: " + evt.currentTarget.data);
                                        var texture = new egret.Texture();
                                        texture.bitmapData = evt.currentTarget.data;
                                        _this[levele[leveleIndex] + '_avatar'].source = texture;
                                    }
                                }, this);
                                ++leveleIndex;
                                this.rank_data.shift();
                            }
                        }
                        if (this.rank_data.length) {
                            rank_1 = 3;
                            this.rank_data.forEach(function (item, index) {
                                _this.rank_list_group.addChild(_this.createRankListItem(item, ++rank_1));
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RankScreen.prototype.init = function () {
        // 垂直布局
        var vLayout = new eui.VerticalLayout();
        vLayout.horizontalAlign = egret.HorizontalAlign.CENTER;
        vLayout.gap = 50;
        vLayout.paddingTop = 0;
        vLayout.paddingBottom = 50;
        this.rank_list_group.layout = vLayout;
    };
    RankScreen.prototype.getChar = function (_str, _len) {
        var _ba = new egret.ByteArray;
        _ba.writeUTFBytes(_str);
        if (_ba.length < _len)
            return _str;
        _ba.position = 0;
        return _ba.readUTFBytes(_len) + "...";
    };
    RankScreen.prototype.createRankListItem = function (itemData, rank) {
        console.log('create', itemData, rank);
        var item = new eui.Group();
        item.width = 500;
        item.height = 80;
        var hLayout = new eui.HorizontalLayout();
        var rankText = new eui.Label();
        rankText.textColor = 0x333333;
        rankText.text = rank < 10 ? "0" + rank : rank;
        rankText.height = 80;
        rankText.size = 29;
        rankText.verticalAlign = egret.VerticalAlign.MIDDLE;
        item.addChild(rankText);
        var avatarGroup = new eui.Group();
        var mask = new eui.Rect();
        mask.width = 90;
        mask.height = 90;
        mask.ellipseWidth = 90;
        mask.ellipseWidth = 90;
        avatarGroup.addChild(mask);
        var avatar = new eui.Image();
        var imgLoader = new egret.ImageLoader();
        imgLoader.crossOrigin = "anonymous"; // 跨域请求
        imgLoader.load(itemData.avatar); // 去除链接中的转义字符        
        imgLoader.once(egret.Event.COMPLETE, function (evt) {
            if (evt.currentTarget.data) {
                egret.log("加载头像成功: " + evt.currentTarget.data);
                var texture = new egret.Texture();
                texture.bitmapData = evt.currentTarget.data;
                avatar.source = texture;
            }
        }, this);
        avatar.width = 90;
        avatar.height = 90;
        avatar.mask = mask;
        avatarGroup.addChild(avatar);
        var topGroup = new eui.Group();
        topGroup.width = 90;
        topGroup.height = 30;
        topGroup.x = 0;
        topGroup.y = -20;
        var top = new eui.Image();
        top.width = 90;
        top.height = 30;
        top.x = 0;
        top.y = 90;
        top.source = RES.getRes('t1');
        topGroup.addChild(top);
        avatarGroup.addChild(topGroup);
        avatarGroup.x = 50;
        item.addChild(avatarGroup);
        var name = new eui.Label();
        name.text = itemData.nickname;
        name.textColor = 0x333333;
        name.size = 25;
        name.x = 170;
        name.height = 80;
        name.verticalAlign = egret.VerticalAlign.MIDDLE;
        item.addChild(name);
        var score = new eui.Label();
        score.text = itemData.score + '分';
        score.textColor = 0xFFC029;
        score.size = 29;
        score.width = 500;
        score.height = 80;
        score.verticalAlign = egret.VerticalAlign.MIDDLE;
        score.x = 0;
        score.textAlign = egret.HorizontalAlign.RIGHT;
        item.addChild(score);
        return item;
    };
    RankScreen.prototype.getRankData = function () {
        var _this = this;
        return new Promise(function (reslove) {
            var request = new egret.HttpRequest();
            request.responseType = egret.HttpResponseType.TEXT;
            //设置为 POST 请求
            request.open("http://315xbapi.sinmore.vip/api/ranking", egret.HttpMethod.GET);
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.send();
            request.addEventListener(egret.Event.COMPLETE, function (event) {
                var request = event.currentTarget;
                var data = JSON.parse(request.response);
                reslove(data.data);
            }, _this);
        });
        // request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError,this);
        // request.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress,this);
    };
    return RankScreen;
}(eui.Component));
__reflect(RankScreen.prototype, "RankScreen", ["eui.UIComponent", "egret.DisplayObject"]);
