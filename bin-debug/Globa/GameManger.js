var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
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
var RANDOM_QUESTION_NUM = 6;
// 用户数据
var UserData = (function () {
    function UserData() {
        this.userInfo = {
            // 用户名称
            name: '',
            // 用户头像
            avater: '',
            // token
            token: '',
            // 是否已经授权
            isAuthor: false,
            // 用户id
            id: ''
        };
        // 用户当前选择的答案
        this.select = '';
        // 游戏分数
        this.score = 0;
    }
    return UserData;
}());
__reflect(UserData.prototype, "UserData");
// 题目数据
var QuestionData = (function () {
    function QuestionData() {
        // 问题题目
        this.title = '';
        // 正确答案
        this.right = '';
        // 题目范围
        this.range = '';
        // 题目难度
        this.level = '';
        // 答案选项
        this.options = [];
    }
    return QuestionData;
}());
__reflect(QuestionData.prototype, "QuestionData");
var GameManger = (function () {
    function GameManger() {
        // 设置默认AI信息
        this.setDefultAIinfo();
        var token = Uilt.getOption('token') || egret.localStorage.getItem('token');
        if (token) {
            egret.localStorage.setItem('token', token);
            GameManger.playerData.userInfo.isAuthor = true;
            // 分享的人的id
            var shareId_1 = Uilt.getOption('share_id');
            this.getUserInfo(token, shareId_1).then(function (res) {
                var oneself = res.data.oneself;
                GameManger.playerData.userInfo.name = oneself.nickname;
                GameManger.playerData.userInfo.avater = oneself.avatar;
                GameManger.playerData.userInfo.id = oneself.id;
                if (shareId_1) {
                    var rival = res.data.oneself;
                    GameManger.playerData.userInfo.name = rival.nickname;
                    GameManger.playerData.userInfo.avater = rival.avatar;
                    GameManger.AIData.userInfo.id = rival.id;
                }
            })
                .catch(function (err) {
                console.error(err);
                alert('获取用户信息失败');
            });
        }
        GameManger.questions = RES.getRes('questions_json');
        var i = 0;
        while (i != GameManger.questions.length) {
            GameManger.randomNums.push(i++);
        }
    }
    GameManger.prototype.setDefultAIinfo = function () {
        GameManger.AIData.userInfo.name = '小安';
        GameManger.AIData.userInfo.avater = 'https://h5.kkts.kidskiss.com.cn/element/RcPXwxAew3uKe6rAqBH3MNpFAFNVAyesJWBNcBxT.png';
    };
    GameManger.prototype.getUserInfo = function (token, rival_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var request = new egret.HttpRequest();
            request.responseType = egret.HttpResponseType.TEXT;
            //设置为 POST 请求
            request.open("http://315xbapi.sinmore.vip/api/pkTop?token=" + token + (rival_id ? '&rival_id=' + rival_id : ''), egret.HttpMethod.GET);
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.send();
            request.addEventListener(egret.Event.COMPLETE, function (event) {
                var request = event.currentTarget;
                var data = JSON.parse(request.response);
                console.log(data);
                if (data.error_code == 0) {
                    resolve(data);
                }
                else {
                    reject(data.error_msg);
                }
            }, _this);
        });
    };
    GameManger.resetGameState = function () {
        GameManger.currentQuestionIndex = 0;
        GameManger.playerData.score = 0;
        this.resetSelectedState();
    };
    GameManger.resetSelectedState = function () {
        GameManger.AIData.select = '';
        GameManger.playerData.select = '';
    };
    GameManger.getRandoQuestions = function () {
        // 随机拿取题目
        var tem = [];
        // 这么写是为了不随机拿到重复的题目
        for (var i = 0; i < RANDOM_QUESTION_NUM; i++) {
            var randomNum = Math.floor(Math.random() * (GameManger.randomNums.length - 1));
            var randomIndex = GameManger.randomNums[randomNum];
            tem.push(GameManger.randomNums.splice(randomNum, 1)[0]);
            GameManger.randomQuestions.push(GameManger.questions[randomIndex]);
        }
        // 恢复随机数索引
        tem.sort().forEach(function (val) {
            GameManger.randomNums.splice(val, 0, val);
        });
    };
    // 设置AI自动作答
    GameManger.AIControl = function (cb) {
        var _this = this;
        var that = this;
        var randomAnswer = Math.floor(Math.random() * 3);
        // 6 秒内作答 
        var randomSelectTime = Math.floor(Math.random() * 6);
        var timer = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                cb.call(that, randomAnswer, 'ai');
                clearTimeout(timer);
                return [2 /*return*/];
            });
        }); }, randomSelectTime * 1000);
    };
    // 计算得分
    GameManger.recordScore = function (time) {
        // 此题得分百分比
        // 最后一题300分 其他200分
        var resultPercentage = (GameManger.currentQuestionIndex == 5 ? 300 : 200) / 10;
        // 最后一题
        var replyTime = 10 - time;
        console.log(replyTime, 'replyTime');
        if (replyTime <= 2) {
            GameManger.playerData.score += resultPercentage * 10;
        }
        else if (replyTime <= 4) {
            GameManger.playerData.score += resultPercentage * 8;
        }
        else if (replyTime <= 6) {
            GameManger.playerData.score += resultPercentage * 6;
        }
        else if (replyTime <= 4) {
            GameManger.playerData.score += resultPercentage * 4;
        }
        else {
            GameManger.playerData.score += resultPercentage * 2;
        }
        console.log(GameManger.playerData.score);
    };
    // 问题数据
    GameManger.questions = [];
    // 存储随机数
    GameManger.randomNums = [];
    // 随机题目
    GameManger.randomQuestions = [];
    // 游戏时间
    GameManger.gameTime = 10;
    // 玩家信息
    GameManger.playerData = new UserData();
    // AI信息
    GameManger.AIData = new UserData();
    // 游戏中 当前问题索引
    GameManger.currentQuestionIndex = 0;
    return GameManger;
}());
__reflect(GameManger.prototype, "GameManger");
