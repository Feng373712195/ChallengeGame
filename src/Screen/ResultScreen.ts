interface ResultData{
	error_code:number,	//错误代码：0成功、1错误
	error_msg:string,	//错误信心
	data:Object,	//返回数据
	id:number	,//用户id
	nickname:string,	//用户昵称
	avatar:string,	//头像
	score:number,	//分数
	count:number,
}

class ResultScreen extends eui.Component implements  eui.UIComponent {
	
	private result_text:eui.Group;
	
	private again_btn:eui.Group;
	private share_btn:eui.Group;
	
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	private static shared:ResultScreen;
	public static getInstance(){
		if( !ResultScreen.shared){
			ResultScreen.shared = new ResultScreen();
		}
		return ResultScreen.shared;
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
		this.again_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.againGame,this)
		this.share_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showShareMask,this)
	}

	 public static async getResult(score){

		const that = ResultScreen.shared;
		var tx:egret.TextField = new egret.TextField;
		tx.width = 480;
		tx.x = 0;
		tx.y = 0;
		tx.textColor = 0;
		tx.size = 20;
		tx.fontFamily = "微软雅黑";
		tx.textAlign = egret.HorizontalAlign.CENTER;

		tx.textFlow = <Array<egret.ITextElement>>[
			{text: "加载成绩中...", style: {"size": 26}}, 
		]
		that.result_text.addChild(tx)

		tx.textFlow = <Array<egret.ITextElement>>[
			{text: "答完题啦！本次得分", style: {"size": 26}}, 
			{text: ` ${score} `, style: {"textColor": 0xF7C65C, "size": 38}}
		]

		// try{
		// 	const resultData:ResultData = await that.fetchResult(score);
		// 	if( resultData.error_code == 0 ){
		// 		const rank = resultData.count;
		// 		tx.textFlow = rank < 50 ? 
		// 		<Array<egret.ITextElement>>[
		// 			{text: "答完题啦！本次得分", style: {"size": 26}}, 
		// 			{text: ` ${score} `, style: {"textColor": 0xF7C65C, "size": 38}},
		// 			{text: "排名第 ", style: {"size": 26}},
		// 			{text: rank , style: {"textColor": 0xF7C65C, "size": 38}},
		// 		] :
		// 		<Array<egret.ITextElement>>[
		// 			{text: "本次答题名次次太低", style: {"size": 28}}, 
		// 		]
		// 		that.result_text.addChild( tx );
		// 	}else{
		// 		tx.textFlow = <Array<egret.ITextElement>>[
		// 			{text: "获取成绩失败～", style: {"size": 26}}, 
		// 		]
		// 	}

		// }catch(e){
		// 	tx.textFlow = <Array<egret.ITextElement>>[
		// 		{text: "获取成绩失败～", style: {"size": 26}}, 
		// 	]
		// }

	}

	private fetchResult(score):Promise<ResultData>{
		return new Promise(resolve=>{
			var request = new egret.HttpRequest();
			request.responseType = egret.HttpResponseType.TEXT;
			//设置为 POST 请求
			request.open("http://315xbapi.sinmore.vip/api/getResult",egret.HttpMethod.GET);
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			request.send();
			request.addEventListener(egret.Event.COMPLETE,(event)=>{
				var request = <egret.HttpRequest>event.currentTarget;
				var data = <ResultData>JSON.parse( request.response );
				resolve(data);
			},this);
		})
	}
	private showShareMask(){
		let parent:egret.DisplayObjectContainer = this.parent;
		parent.addChildAt(ShareGuideScreen.getInstance(),999);
	}
 	private againGame(){
		 this.parent.addChild(GameScreen.getInstance());
		 this.parent.removeChild(this);
		 GameScreen.playGame();
	}
}