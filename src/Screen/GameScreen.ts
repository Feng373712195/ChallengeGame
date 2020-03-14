const QUESTION_COLOR = 0x888888;
const ANSWER_MAP = { 'A':0,'B':1,'C':2,D:3 };
const NUM_MAP = ['一','二','三','四','五','六'];
const SELECT_COLORS = [0x3C78F7,0x449393,0x6AC887,0xEC5357]

class Timeout {
	// 游戏中的计时器ID
	public static timer = null;
	public static time = 10;
	// 重置
	public static restTimeout(view){
		clearTimeout(Timeout.timer);
		Timeout.time = 10;
		view.text = Timeout.time;
	}
	// 倒计时
	public static startTimeOut(view,emit){
		Timeout.timer = setTimeout(()=>{
			if( Timeout.time !== 0){
				view.text = (--Timeout.time) + '';
				if( Timeout.time === 0 ){
						emit && emit();
						return;
				}
				Timeout.startTimeOut(view,emit)
			}
		},1000)
	}
	// 停止计时
	public static stopTimeOut(){
		clearTimeout(Timeout.timer);
	}
}

class GameScreen extends eui.Component implements  eui.UIComponent {
	// 背景
	private bg_img:eui.Image;
	// 
	private player_name;
	private player_avater;
	
	// 
	private ai_name;
	private ai_avater;

	// 过渡场景
	private transtionsScreen:eui.Group;
	// 题目场景
	private question_screen:eui.Group;
	// 答案部分
	private answer_group:eui.Group;
	// 题目标题
	private question_title:eui.Label;
	// 题目提示
	private question_tipe:eui.Label;

	// 按钮点击布局块
	answer_button_group_01:eui.Label;
	answer_button_group_02:eui.Label;
	answer_button_group_03:eui.Label;
	// 答案按钮
	answer_button_01:eui.Rect;
	answer_button_02:eui.Rect;
	answer_button_03:eui.Rect;
	// 答案按钮文字
	answer_button_text_01:eui.Label;
	answer_button_text_02:eui.Label;
	answer_button_text_03:eui.Label;

	// 错误提示
	error_icon_player_01:eui.Group;
	error_icon_player_02:eui.Group;
	error_icon_player_03:eui.Group;
	error_icon_ai_01:eui.Group;
	error_icon_ai_02:eui.Group;
	error_icon_ai_03:eui.Group;
	// 正确提示
	right_icon_player_01:eui.Group;
	right_icon_player_02:eui.Group;
	right_icon_player_03:eui.Group;
	right_icon_ai_01:eui.Group;
	right_icon_ai_02:eui.Group;
	right_icon_ai_03:eui.Group;

	// 答案对象数组
	private answerButtons:Array<eui.Rect> = [];
	private answerButtonsText:Array<eui.Label> = [];
	private answerButtonsGroup:Array<eui.Group> = [];
	// 提示数组
	private playerAnswerRightTipe:Array<eui.Group> = [];
	private AIAnswerRightTipe:Array<eui.Group> = [];
	private playerAnswerErrorTipe:Array<eui.Group> = [];
	private AIAnswerErrorTipe:Array<eui.Group> = [];
	// 玩家是否在这题题目中已经选过答案了 用来禁止在此点击答案
	private playerSelected = false;
	// 玩家回答时间（用来计算得分）
	private playSelectTime = 0;
	// 操作次数
	private selectedNum = 0;
	// 倒计时
	private timeout:eui.Label;
	public constructor() {
		super();
	}
	private static shared:GameScreen;
	public static getInstance(){
		if( !GameScreen.shared){
			GameScreen.shared = new GameScreen();
		}
		document.getElementsByTagName('html')[0].style.background = 'yellow';
		return GameScreen.shared;
	}
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}
	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init();
	}
	private init(){
		RES.getResAsync('bg02_png').then(res=>this.bg_img.source = res)
		this.setPkInfo();
		this.startCreateScene();
	}
	// 设置pk信息
	private setPkInfo(){
		// let imgLoader = new egret.ImageLoader();
		this.ai_name.text = GameManger.AIData.userInfo.name;
		this.player_name.text = '玩家';
	}
	protected async startCreateScene():Promise<any>{
		this.initAnswerButton();
		this.transtionsScreen = this.createTranstionsScreen();
		GameScreen.playGame();
	}
	public static async playGame(){
		const that = GameScreen.shared;

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

		// 写题目到场景中
		const currentQuestion = GameManger.randomQuestions[GameManger.currentQuestionIndex];
		that.resetQuestionScreen(currentQuestion);
		// 重置一些状态 （这里顺序重要哦 可以让resetQuetionScreen把上次的选中提示清除掉）
		GameManger.resetGameState();

		await that.showTranstionsScreen('开始');
		await that.showTranstionsScreen('第一题');
		await that.showQuestionScreen();
		Timeout.startTimeOut(that.timeout,that.timeoutHandle);
		// 设置AI操作
		GameManger.AIControl.call( that, that.selectAnswer )
	}
	private initAnswerButton(){
		for( let i = 1 ; i <= 3; i++ ){
			this['answer_button_group_0' + i].addEventListener(
				egret.TouchEvent.TOUCH_TAP,
				this.selectAnswer.bind(this,i-1,'player'),
				this)
			this.playerAnswerRightTipe.push(this['right_icon_player_0' + i]);
			this.AIAnswerRightTipe.push(this['right_icon_ai_0' + i]);
			this.playerAnswerErrorTipe.push(this['error_icon_player_0' + i]);
			this.AIAnswerErrorTipe.push(this['error_icon_ai_0' + i]);
			
			this.answerButtonsGroup.push(this['answer_button_group_0' + i]);
			this.answerButtons.push(this['answer_button_0' + i]);
			this.answerButtonsText.push(this['answer_button_text_0' + i]);
		}
	}
	private createTranstionsScreen():eui.Group{
		// 最外层layout盒子
		let waperLayout = new eui.Group();
		waperLayout.width = WindowScreen.WIDTH;
		waperLayout.height = 500;
		let questionNumber = 1;
		waperLayout.top = 150;
		let questionNumberText = new eui.Label;
		questionNumberText.name = 'questionNumberText';
		questionNumberText.text = `第${questionNumber}题`;
		questionNumberText.textColor = 0x000000;
		waperLayout.addChild(questionNumberText);
		questionNumberText.size = 40;
		questionNumberText.bold = true;
		questionNumberText.width = WindowScreen.WIDTH;
		questionNumberText.height = 500;
		questionNumberText.verticalAlign = egret.VerticalAlign.MIDDLE
		questionNumberText.textAlign = egret.HorizontalAlign.CENTER;

		return waperLayout;
	}
	// 创建过度场景
	private showTranstionsScreen(text):Promise<any>{
		const questionNumberText = <eui.Label>this.transtionsScreen.getChildByName('questionNumberText');
		questionNumberText.text = text;
		this.addChild(this.transtionsScreen);
		const tw = egret.Tween.get(questionNumberText);
		return new Promise(resolve=>{
			tw.to({ size:60 },500,egret.Ease.backInOut)
			.to({ alpha:0 },500,egret.Ease.backInOut)
			.call(()=>{
				questionNumberText.size = 40;
				questionNumberText.alpha = 1;
				this.removeChild(this.transtionsScreen);
				resolve();
			})
		})
	}
	// 显示题目场景
	private showQuestionScreen(){
		return new Promise(async relsove=>{
			this.addChild(this.question_screen)
			const shower = [this.question_title,this.answer_group,this.question_tipe]
			let showedIndex = 0;

			let p = this.showQuestionAmin(shower[showedIndex]);
			while( showedIndex !== shower.length - 1 ){
				await p.then( ()=> p = this.showQuestionAmin(shower[++showedIndex]) );
			}
			relsove()
		})
	}
	// 显示题目场景动画
	private showQuestionAmin(show):Promise<any>{
		const p = new Promise(relsove=>{
			let tw = egret.Tween.get(show);
			tw.to({ alpha:1 },300,egret.Ease.circIn);
			tw.call( ()=> relsove() );
		})
		return p
	}
	// 隐藏题目场景
	private hideQuestionScreen(){
		return new Promise(relsove=>{
			const shower = [this.question_title,this.answer_group,this.question_tipe]
			shower.forEach(show=>{
				let tw = egret.Tween.get(show)
				tw.wait(800)
				.to({ alpha:0 },500,egret.Ease.circOut);
			})
			const timer = setTimeout(()=>{
				relsove();
				clearTimeout(timer);
			},1500);
		})
	}
	// 点击按钮事件
	private async selectAnswer(index,from = 'player'){

		if( from == 'player' && this.playerSelected ){
			return false;
		}
		
		++this.selectedNum
		
		const currentQuestionGroup = this['' + index];
		const currentTouchAnswer = this.answerButtons[index];
		let text = this.answerButtonsText[index];
		
		// test
		// console.log( index );
		// console.log( text,'text',currentTouchAnswer , '点击答案对象' )

		if( from == 'player'){
			// 玩家点击 触发
			text.textColor = SELECT_COLORS[0];
			currentTouchAnswer.strokeColor = SELECT_COLORS[0];
			this.playerSelected = true;
			this.playSelectTime = Timeout.time;
			GameManger.playerData.select = index;
			
		};
		
		// AI点击触发
		if( from == 'ai' ){
			// 玩家点击 触发
			text.textColor = SELECT_COLORS[1];
			currentTouchAnswer.strokeColor = SELECT_COLORS[1];
			GameManger.AIData.select = index;
		}

		await this.tapAnswerAmin(currentTouchAnswer);
		await this.checkIsNext();
		
	}
	// 点击按钮时的动画
	private tapAnswerAmin(btn):Promise<any>{
		return new Promise(relsove=>{
			let tw = egret.Tween.get(btn);
			tw.to({ scaleX:1.02,scaleY:1.02 },200,egret.Ease.backInOut)
			.to({ scaleX:1,scaleY:1 },200,egret.Ease.backInOut)
			.wait(500)
			.call(relsove);
		})
	}
	// 展示下一题
	private async showNextQuestion(){
		
		++GameManger.currentQuestionIndex;
		const currentQuestion = GameManger.randomQuestions[GameManger.currentQuestionIndex];
		await this.hideQuestionScreen();
		// 重置定时器
		this.resetQuestionScreen(currentQuestion);
		Timeout.restTimeout(this.timeout);
		// 清楚玩家 和 AI选中选项
		GameManger.resetSelectedState();
		// 恢复状态 玩家可以再次选择答案
		this.playerSelected = false;
		await this.showTranstionsScreen(
			GameManger.currentQuestionIndex == 5 ?
			`最后一题`
			:`第${ NUM_MAP[GameManger.currentQuestionIndex] }题`
		);
		await this.showQuestionScreen();
		Timeout.startTimeOut(this.timeout,this.timeoutHandle);
		// 设置AI操作
		GameManger.AIControl.call( this, this.selectAnswer )
	}
	// 重制题目内容 和 重制为初始状态
	private resetQuestionScreen(data){
		const selectAnswerIndexs = [
			GameManger.playerData.select,
			GameManger.AIData.select
		]

		// console.log( selectAnswerIndexs,'resetQuestionScreen' );

		selectAnswerIndexs.filter(v=>v!=='').forEach(index=>{
			this.playerAnswerRightTipe[index].alpha = 0;
			this.AIAnswerRightTipe[index].alpha = 0;
			this.playerAnswerErrorTipe[index].alpha = 0;
			this.AIAnswerErrorTipe[index].alpha = 0;
		})
		const { title, range , options } = data;
		this.question_title.text = title;
		this.question_tipe.text = range;
		options.forEach((val,index)=>{
			this.answerButtonsText[index].text = val
			this.answerButtonsText[index].textColor = 0x000000;
			this.answerButtons[index].strokeColor = 0xCCCCCC;
		})
	}
	// 时间到事件
	private timeoutHandle = () => {
		const currentQuestion = GameManger.randomQuestions[GameManger.currentQuestionIndex];
		this.selectAnswer( ANSWER_MAP[currentQuestion.right],'auto' )
	}
	// 检查答案
	private async checkIsNext(){
		// 电脑与玩家在此题都选择过答案了 
		if( this.selectedNum === 2 ){
			// 检查答案
			this.checkAnswer();
			this.selectedNum = 0;
			// 之后判断答题结束 或者 进入下一题
			if( GameManger.currentQuestionIndex == 5 ){
				this.finishGame();
				return;
			}
			this.showNextQuestion();
		}	
	}
	private async finishGame(){
		Timeout.stopTimeOut();
		await this.hideQuestionScreen();
		await this.showTranstionsScreen('答题结束');
		
		this.parent.addChild( ResultScreen.getInstance() );
		ResultScreen.getResult(GameManger.playerData.score);
		
		this.parent.removeChild(this);
	}
	// 检查答案
	private async checkAnswer(){
		
		const answerMap = ['A','B','C','D'];
		const currentQuestion = GameManger.randomQuestions[GameManger.currentQuestionIndex];
		const rightAnswerIndex = answerMap.indexOf(currentQuestion.right);
		
		let someOneRight = false;
		
		const selectAnswerIndexs = [
			GameManger.playerData.select,
			GameManger.AIData.select
		]

		// from = 0 玩家回答的答案 from = 1 AI回答的答案
		selectAnswerIndexs.filter(v=>v!=='').forEach( (index,from)=>{
			if( (+index) == rightAnswerIndex){
				someOneRight = true;
				
				this.answerButtonsText[index].textColor = SELECT_COLORS[1];
				this.answerButtons[index].strokeColor = SELECT_COLORS[1];
				
				if( GameManger.playerData.select == index && from == 0 ){
					GameManger.recordScore(this.playSelectTime);
					this.playerAnswerRightTipe[index].alpha = 1;
				}
				if( GameManger.AIData.select == index ){
					this.AIAnswerRightTipe[index].alpha = 1;
				}

			}else{
				this.answerButtonsText[index].textColor = SELECT_COLORS[3];
				this.answerButtons[index].strokeColor = SELECT_COLORS[3];

				if( GameManger.playerData.select == index ){
					this.playerAnswerErrorTipe[index].alpha = 1;
					// 如果是玩家点击 则播放错误音频 和 错误动画
					SoundManger.playErrorSound();
					this.errorAmin();
				}
				if( GameManger.AIData.select == index ){
					this.AIAnswerErrorTipe[index].alpha = 1;
				}
				
			}
		})

		if( !someOneRight ){
			this.answerButtonsText[rightAnswerIndex].textColor = SELECT_COLORS[1];
			this.answerButtons[rightAnswerIndex].strokeColor = SELECT_COLORS[1];
		}
		
	}
	// 错误动画
	private errorAmin():Promise<any>{
		return new Promise(relsove=>{
			let tw2 = egret.Tween.get(this);
			tw2.to({ x:-10 },100,egret.Ease.cubicInOut)
			.to({ x:10 },100,egret.Ease.cubicInOut)
			.to({ x:-10 },100,egret.Ease.cubicInOut)
			.to({ x:0 },100,egret.Ease.cubicInOut)
			.wait(500)
			.call(relsove);
		})
	}
}