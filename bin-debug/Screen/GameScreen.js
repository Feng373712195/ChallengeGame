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
var QUESTION_COLOR = 0x888888;
var ANSWER_MAP = { 'A': 0, 'B': 1, 'C': 2, D: 3 };
var NUM_MAP = ['一', '二', '三', '四', '五', '六'];
var SELECT_COLORS = [0x3C78F7, 0x449393, 0x6AC887, 0xEC5357];
var Timeout = (function () {
    function Timeout() {
    }
    // 重置
    Timeout.restTimeout = function (view) {
        clearTimeout(Timeout.timer);
        Timeout.time = 10;
        view.text = Timeout.time;
    };
    // 倒计时
    Timeout.startTimeOut = function (view, emit) {
        Timeout.timer = setTimeout(function () {
            if (Timeout.time !== 0) {
                view.text = (--Timeout.time) + '';
                if (Timeout.time === 0) {
                    emit && emit();
                    return;
                }
                Timeout.startTimeOut(view, emit);
            }
        }, 1000);
    };
    // 停止计时
    Timeout.stopTimeOut = function () {
        clearTimeout(Timeout.timer);
    };
    // 游戏中的计时器ID
    Timeout.timer = null;
    Timeout.time = 10;
    return Timeout;
}());
__reflect(Timeout.prototype, "Timeout");
var GameScreen = (function (_super) {
    __extends(GameScreen, _super);
    function GameScreen() {
        var _this = _super.call(this) || this;
        // 答案对象数组
        _this.answerButtons = [];
        _this.answerButtonsText = [];
        _this.answerButtonsGroup = [];
        // 提示数组
        _this.playerAnswerRightTipe = [];
        _this.AIAnswerRightTipe = [];
        _this.playerAnswerErrorTipe = [];
        _this.AIAnswerErrorTipe = [];
        // 玩家是否在这题题目中已经选过答案了 用来禁止在此点击答案
        _this.playerSelected = false;
        // 玩家回答时间（用来计算得分）
        _this.playSelectTime = 0;
        // 操作次数
        _this.selectedNum = 0;
        // 时间到事件
        _this.timeoutHandle = function () {
            var currentQuestion = GameManger.randomQuestions[GameManger.currentQuestionIndex];
            _this.selectAnswer(ANSWER_MAP[currentQuestion.right], 'auto');
        };
        return _this;
    }
    GameScreen.getInstance = function () {
        if (!GameScreen.shared) {
            GameScreen.shared = new GameScreen();
        }
        document.getElementsByTagName('html')[0].style.background = 'yellow';
        return GameScreen.shared;
    };
    GameScreen.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameScreen.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    GameScreen.prototype.init = function () {
        var _this = this;
        RES.getResAsync('bg02_png').then(function (res) { return _this.bg_img.source = res; });
        this.setPkInfo();
        this.startCreateScene();
    };
    // 设置pk信息
    GameScreen.prototype.setPkInfo = function () {
        // let imgLoader = new egret.ImageLoader();
        this.ai_name.text = GameManger.AIData.userInfo.name;
        this.player_name.text = '玩家';
    };
    GameScreen.prototype.startCreateScene = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.initAnswerButton();
                this.transtionsScreen = this.createTranstionsScreen();
                GameScreen.playGame();
                return [2 /*return*/];
            });
        });
    };
    GameScreen.playGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var that, currentQuestion;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        that = GameScreen.shared;
                        // 随机抽取题目
                        GameManger.getRandoQuestions();
                        // 重置定时器
                        Timeout.restTimeout(that.timeout);
                        // 清楚一些玩家操作信息 避免BUG 还是清除一下
                        // 玩家是否在这题题目中已经选过答案了 用来禁止在此点击答案
                        that.playerSelected = false;
                        // 玩家回答时间（用来计算得分）
                        that.playSelectTime = 0;
                        // 操作次数
                        that.selectedNum = 0;
                        currentQuestion = GameManger.randomQuestions[GameManger.currentQuestionIndex];
                        that.resetQuestionScreen(currentQuestion);
                        // 重置一些状态 （这里顺序重要哦 可以让resetQuetionScreen把上次的选中提示清除掉）
                        GameManger.resetGameState();
                        return [4 /*yield*/, that.showTranstionsScreen('开始')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, that.showTranstionsScreen('第一题')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, that.showQuestionScreen()];
                    case 3:
                        _a.sent();
                        Timeout.startTimeOut(that.timeout, that.timeoutHandle);
                        // 设置AI操作
                        GameManger.AIControl.call(that, that.selectAnswer);
                        return [2 /*return*/];
                }
            });
        });
    };
    GameScreen.prototype.initAnswerButton = function () {
        for (var i = 1; i <= 3; i++) {
            this['answer_button_group_0' + i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.selectAnswer.bind(this, i - 1, 'player'), this);
            this.playerAnswerRightTipe.push(this['right_icon_player_0' + i]);
            this.AIAnswerRightTipe.push(this['right_icon_ai_0' + i]);
            this.playerAnswerErrorTipe.push(this['error_icon_player_0' + i]);
            this.AIAnswerErrorTipe.push(this['error_icon_ai_0' + i]);
            this.answerButtonsGroup.push(this['answer_button_group_0' + i]);
            this.answerButtons.push(this['answer_button_0' + i]);
            this.answerButtonsText.push(this['answer_button_text_0' + i]);
        }
    };
    GameScreen.prototype.createTranstionsScreen = function () {
        // 最外层layout盒子
        var waperLayout = new eui.Group();
        waperLayout.width = WindowScreen.WIDTH;
        waperLayout.height = 500;
        var questionNumber = 1;
        waperLayout.top = 150;
        var questionNumberText = new eui.Label;
        questionNumberText.name = 'questionNumberText';
        questionNumberText.text = "\u7B2C" + questionNumber + "\u9898";
        questionNumberText.textColor = 0x000000;
        waperLayout.addChild(questionNumberText);
        questionNumberText.size = 40;
        questionNumberText.bold = true;
        questionNumberText.width = WindowScreen.WIDTH;
        questionNumberText.height = 500;
        questionNumberText.verticalAlign = egret.VerticalAlign.MIDDLE;
        questionNumberText.textAlign = egret.HorizontalAlign.CENTER;
        return waperLayout;
    };
    // 创建过度场景
    GameScreen.prototype.showTranstionsScreen = function (text) {
        var _this = this;
        var questionNumberText = this.transtionsScreen.getChildByName('questionNumberText');
        questionNumberText.text = text;
        this.addChild(this.transtionsScreen);
        var tw = egret.Tween.get(questionNumberText);
        return new Promise(function (resolve) {
            tw.to({ size: 60 }, 500, egret.Ease.backInOut)
                .to({ alpha: 0 }, 500, egret.Ease.backInOut)
                .call(function () {
                questionNumberText.size = 40;
                questionNumberText.alpha = 1;
                _this.removeChild(_this.transtionsScreen);
                resolve();
            });
        });
    };
    // 显示题目场景
    GameScreen.prototype.showQuestionScreen = function () {
        var _this = this;
        return new Promise(function (relsove) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var shower, showedIndex, p;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.addChild(this.question_screen);
                        shower = [this.question_title, this.answer_group, this.question_tipe];
                        showedIndex = 0;
                        p = this.showQuestionAmin(shower[showedIndex]);
                        _a.label = 1;
                    case 1:
                        if (!(showedIndex !== shower.length - 1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, p.then(function () { return p = _this.showQuestionAmin(shower[++showedIndex]); })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3:
                        relsove();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    // 显示题目场景动画
    GameScreen.prototype.showQuestionAmin = function (show) {
        var p = new Promise(function (relsove) {
            var tw = egret.Tween.get(show);
            tw.to({ alpha: 1 }, 300, egret.Ease.circIn);
            tw.call(function () { return relsove(); });
        });
        return p;
    };
    // 隐藏题目场景
    GameScreen.prototype.hideQuestionScreen = function () {
        var _this = this;
        return new Promise(function (relsove) {
            var shower = [_this.question_title, _this.answer_group, _this.question_tipe];
            shower.forEach(function (show) {
                var tw = egret.Tween.get(show);
                tw.wait(800)
                    .to({ alpha: 0 }, 500, egret.Ease.circOut);
            });
            var timer = setTimeout(function () {
                relsove();
                clearTimeout(timer);
            }, 1500);
        });
    };
    // 点击按钮事件
    GameScreen.prototype.selectAnswer = function (index, from) {
        if (from === void 0) { from = 'player'; }
        return __awaiter(this, void 0, void 0, function () {
            var currentQuestionGroup, currentTouchAnswer, text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (from == 'player' && this.playerSelected) {
                            return [2 /*return*/, false];
                        }
                        ++this.selectedNum;
                        currentQuestionGroup = this['' + index];
                        currentTouchAnswer = this.answerButtons[index];
                        text = this.answerButtonsText[index];
                        // test
                        // console.log( index );
                        // console.log( text,'text',currentTouchAnswer , '点击答案对象' )
                        if (from == 'player') {
                            // 玩家点击 触发
                            text.textColor = SELECT_COLORS[0];
                            currentTouchAnswer.strokeColor = SELECT_COLORS[0];
                            this.playerSelected = true;
                            this.playSelectTime = Timeout.time;
                            GameManger.playerData.select = index;
                        }
                        ;
                        // AI点击触发
                        if (from == 'ai') {
                            // 玩家点击 触发
                            text.textColor = SELECT_COLORS[1];
                            currentTouchAnswer.strokeColor = SELECT_COLORS[1];
                            GameManger.AIData.select = index;
                        }
                        return [4 /*yield*/, this.tapAnswerAmin(currentTouchAnswer)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.checkIsNext()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 点击按钮时的动画
    GameScreen.prototype.tapAnswerAmin = function (btn) {
        return new Promise(function (relsove) {
            var tw = egret.Tween.get(btn);
            tw.to({ scaleX: 1.02, scaleY: 1.02 }, 200, egret.Ease.backInOut)
                .to({ scaleX: 1, scaleY: 1 }, 200, egret.Ease.backInOut)
                .wait(500)
                .call(relsove);
        });
    };
    // 展示下一题
    GameScreen.prototype.showNextQuestion = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentQuestion;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ++GameManger.currentQuestionIndex;
                        currentQuestion = GameManger.randomQuestions[GameManger.currentQuestionIndex];
                        return [4 /*yield*/, this.hideQuestionScreen()];
                    case 1:
                        _a.sent();
                        // 重置定时器
                        this.resetQuestionScreen(currentQuestion);
                        Timeout.restTimeout(this.timeout);
                        // 清楚玩家 和 AI选中选项
                        GameManger.resetSelectedState();
                        // 恢复状态 玩家可以再次选择答案
                        this.playerSelected = false;
                        return [4 /*yield*/, this.showTranstionsScreen(GameManger.currentQuestionIndex == 5 ?
                                "\u6700\u540E\u4E00\u9898"
                                : "\u7B2C" + NUM_MAP[GameManger.currentQuestionIndex] + "\u9898")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.showQuestionScreen()];
                    case 3:
                        _a.sent();
                        Timeout.startTimeOut(this.timeout, this.timeoutHandle);
                        // 设置AI操作
                        GameManger.AIControl.call(this, this.selectAnswer);
                        return [2 /*return*/];
                }
            });
        });
    };
    // 重制题目内容 和 重制为初始状态
    GameScreen.prototype.resetQuestionScreen = function (data) {
        var _this = this;
        var selectAnswerIndexs = [
            GameManger.playerData.select,
            GameManger.AIData.select
        ];
        // console.log( selectAnswerIndexs,'resetQuestionScreen' );
        selectAnswerIndexs.filter(function (v) { return v !== ''; }).forEach(function (index) {
            _this.playerAnswerRightTipe[index].alpha = 0;
            _this.AIAnswerRightTipe[index].alpha = 0;
            _this.playerAnswerErrorTipe[index].alpha = 0;
            _this.AIAnswerErrorTipe[index].alpha = 0;
        });
        var title = data.title, range = data.range, options = data.options;
        this.question_title.text = title;
        this.question_tipe.text = range;
        options.forEach(function (val, index) {
            _this.answerButtonsText[index].text = val;
            _this.answerButtonsText[index].textColor = 0x000000;
            _this.answerButtons[index].strokeColor = 0xCCCCCC;
        });
    };
    // 检查答案
    GameScreen.prototype.checkIsNext = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // 电脑与玩家在此题都选择过答案了 
                if (this.selectedNum === 2) {
                    // 检查答案
                    this.checkAnswer();
                    this.selectedNum = 0;
                    // 之后判断答题结束 或者 进入下一题
                    if (GameManger.currentQuestionIndex == 5) {
                        this.finishGame();
                        return [2 /*return*/];
                    }
                    this.showNextQuestion();
                }
                return [2 /*return*/];
            });
        });
    };
    GameScreen.prototype.finishGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Timeout.stopTimeOut();
                        return [4 /*yield*/, this.hideQuestionScreen()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.showTranstionsScreen('答题结束')];
                    case 2:
                        _a.sent();
                        this.parent.addChild(ResultScreen.getInstance());
                        ResultScreen.getResult(GameManger.playerData.score);
                        this.parent.removeChild(this);
                        return [2 /*return*/];
                }
            });
        });
    };
    // 检查答案
    GameScreen.prototype.checkAnswer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var answerMap, currentQuestion, rightAnswerIndex, someOneRight, selectAnswerIndexs;
            return __generator(this, function (_a) {
                answerMap = ['A', 'B', 'C', 'D'];
                currentQuestion = GameManger.randomQuestions[GameManger.currentQuestionIndex];
                rightAnswerIndex = answerMap.indexOf(currentQuestion.right);
                someOneRight = false;
                selectAnswerIndexs = [
                    GameManger.playerData.select,
                    GameManger.AIData.select
                ];
                // from = 0 玩家回答的答案 from = 1 AI回答的答案
                selectAnswerIndexs.filter(function (v) { return v !== ''; }).forEach(function (index, from) {
                    if ((+index) == rightAnswerIndex) {
                        someOneRight = true;
                        _this.answerButtonsText[index].textColor = SELECT_COLORS[1];
                        _this.answerButtons[index].strokeColor = SELECT_COLORS[1];
                        if (GameManger.playerData.select == index && from == 0) {
                            GameManger.recordScore(_this.playSelectTime);
                            _this.playerAnswerRightTipe[index].alpha = 1;
                        }
                        if (GameManger.AIData.select == index) {
                            _this.AIAnswerRightTipe[index].alpha = 1;
                        }
                    }
                    else {
                        _this.answerButtonsText[index].textColor = SELECT_COLORS[3];
                        _this.answerButtons[index].strokeColor = SELECT_COLORS[3];
                        if (GameManger.playerData.select == index) {
                            _this.playerAnswerErrorTipe[index].alpha = 1;
                            // 如果是玩家点击 则播放错误音频 和 错误动画
                            SoundManger.playErrorSound();
                            _this.errorAmin();
                        }
                        if (GameManger.AIData.select == index) {
                            _this.AIAnswerErrorTipe[index].alpha = 1;
                        }
                    }
                });
                if (!someOneRight) {
                    this.answerButtonsText[rightAnswerIndex].textColor = SELECT_COLORS[1];
                    this.answerButtons[rightAnswerIndex].strokeColor = SELECT_COLORS[1];
                }
                return [2 /*return*/];
            });
        });
    };
    // 错误动画
    GameScreen.prototype.errorAmin = function () {
        var _this = this;
        return new Promise(function (relsove) {
            var tw2 = egret.Tween.get(_this);
            tw2.to({ x: -10 }, 100, egret.Ease.cubicInOut)
                .to({ x: 10 }, 100, egret.Ease.cubicInOut)
                .to({ x: -10 }, 100, egret.Ease.cubicInOut)
                .to({ x: 0 }, 100, egret.Ease.cubicInOut)
                .wait(500)
                .call(relsove);
        });
    };
    return GameScreen;
}(eui.Component));
__reflect(GameScreen.prototype, "GameScreen", ["eui.UIComponent", "egret.DisplayObject"]);
